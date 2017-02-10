/**
 * Created by hwh on 16/12/30.
 */
var formParse = require('co-busboy')
var fs = require('fs');
var path = require('path');
var config = require('../config/default.js')
var db = require('../lib/runSqlite3.js')
var App = require('../lib/App')

exports.get = function * (){
  return this.body= 'hello'
}
//redis 1号数据库存储app相关信息
exports.post = function * (){
  var parts = formParse(this.request)
  var part;
  //此数组用于存储图片的url
  var img_filename;
  var app_name;
  while (part = yield parts){
    //此时part为返回的流对象
    //如果不是流对象 证明是上传的参数
    if(part.pipe){
      var filename = part.filename
      img_filename = filename
      var homeDir = path.resolve(__dirname, '..')
      var newpath = homeDir + '/static/appIcon/'+app_name+'_' + this.state.user + '_' + filename;
      //生成存储路径，要注意这里的newpath必须是绝对路径，否则Stream报错
      var stream = fs.createWriteStream(newpath);
      //写入文件流
      part.pipe(stream);
    }else{
      var appName = part[1]
      if(appName){
        //var result = yield db.selectDB("select * from app where appName='"+appName+"'")
        var result = yield App.getAppByUidAndName(this.state.user,appName)
        console.log('result',result)
        if(result && result.length > 0){
          return this.body = {
            error:10000,
            message:'应用名字已存在'
          }
        }else {
          app_name = appName
        }
      }
    }
  }
  if(img_filename && app_name){
    var iconPath = config.staticPath + 'appIcon/'+app_name+'_' + this.state.user+'_' + img_filename
    var appData = {
      appName:app_name,
      appIcon:iconPath,
      user:this.state.user
    };
    yield App.addApp(appData);
    //yield db.runDB("insert into app(appName,appIcon) values ('" + appName + "', '" + iconPath + "')")
    this.body = {
      code:0,
      message:'上传成功',
      result:{
        url:config.staticPath + 'appIcon/'+app_name+'_' + this.state.user + '_' + img_filename
      }
    }
  }else{
    this.body = {
      code:10000,
      message:'上传失败'
    }
  }
}
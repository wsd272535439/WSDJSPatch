/**
 * Created by hwh on 16/12/30.
 */
var formParse = require('co-busboy')
var config = require('../config/default.js')
var path = require('path')
var fs = require('fs')
var db = require('../lib/runSqlite3')
var Patch = require('../lib/Patch')
//redis 2号数据库存放app补丁信息，使用json字符串存储，key为appName+appVersion

//取消redis存储 改为sqlite
exports.post = function * (){
  var parts = formParse(this.request)
  var part;
  var app_name;
  var app_version;
  var patch_model;
  var app_key;
  var defArg;
  while(part = yield parts){
    if(part.pipe && app_name && app_version && patch_model && app_key){
      var homeDir = path.resolve(__dirname, '..');
      var newpath = homeDir + '/static/patchFile/'+app_name+'_'+app_version+'_'+app_key+'_'+'main.js';
      //生成存储路径，要注意这里的newpath必须是绝对路径，否则Stream报错
      var stream = fs.createWriteStream(newpath);
      //写入文件流
      part.pipe(stream);
      //无错误，存入redis  sqlite
      var netFilePath = config.staticPath + 'patchFile/' + app_name+'_' + app_version+'_' + app_key+'_' + 'main.js'
      //yield client.SELECT(2)
      var patchData = {
        appName:app_name,
        appVersion:app_version,
        patch_url:netFilePath,
        patch_model:patch_model,
        created_at:Date.now(),
      }

      if(defArg && patch_model == 'condition'){
        patchData.defArg = JSON.stringify(defArg)
      }
      yield Patch.addPatch(patchData)

      //if(defArg && patch_model == 'condition'){
      //  yield db.runDB("insert into patch values('"+app_name+"','"+app_version+"','"+netFilePath+"','"+patch_model+"','"+Date.now()+"','"+JSON.stringify(defArg)+"')")
      //}else{
      //  yield db.runDB("insert into patch values('"+app_name+"','"+app_version+"','"+netFilePath+"','"+patch_model+"','"+Date.now()+"',null)")
      //}
      //var jsonStr = JSON.stringify(patchData)
      //var count = yield client.SADD(app_name,jsonStr)
      return this.body = {
        code:0,
        message:'处理成功',
        result:patchData
      }
    }else{
      switch (part[0]){
        case 'name':
          app_name = part[1]
          break
        case 'version':
          app_version = part[1]
          break
        case 'model':
          patch_model = part[1]
          break
        case 'defArg':
            //暂时实现一个参数

          var argKey = part[1].split('=')[0]
          var argValue = part[1].split('=')[1]
          defArg = {[argKey]:argValue}
          break
        case 'appKey':
          app_key = part[1];
          break
        default :
          break
      }
    }
  }
  this.body = {
    code:10000,
    message:'处理失败,请检查网络后重新操作'
  }
}
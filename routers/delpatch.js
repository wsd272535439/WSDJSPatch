/**
 * Created by hwh on 17/2/8.
 */
var redis = require('koa-redis'),client = redis().client
var fs = require('fs')
var path = require('path')
var Patch = require('../lib/Patch')
var removeFile = function (path){
  return function(callback){
    fs.unlink(path,callback)
  }
}


//补丁存放于2号数据库
exports.post = function *(){
  var body = this.request.body
  var appName = body.appName;
  var appVersion = body.appVersion;
  var appKey = body.appKey;
  //yield db.runDB("delete from patch where appName='"+appName+"' and appVersion='"+appVersion+"'")
  yield Patch.removePatchByUidAndNameAndVersion(this.state.user,appName,appVersion);
  var homeDir = path.resolve(__dirname, '..');
  var newpath = homeDir + '/static/patchFile/'+appName+'_'+appVersion+'_'+appKey+'_'+'main.js';
  if(fs.existsSync(newpath)){
    yield removeFile(newpath);
    this.body = {
      code:0,
      message:'删除成功'
    }
    return
  }
  this.body = {
    code:10000,
    message:'删除失败'
  }
}
/**
 * Created by hwh on 16/12/26.
 */
var formParse = require('co-busboy')
var fs = require('fs');
var path = require('path');
var crypto = require('crypto');
var config = require('../config/default.js');
var db = require('../lib/runSqlite3.js');
var Patch = require('../lib/Patch');
function md5 (data){
  return crypto.createHash('md5').update(data).digest('hex');
}

function readFile(path){
  return function(cb){
    fs.readFile(path,{encoding:'utf8'},cb);
  }
}

//exports.get = function * (){
//  var homeDir = path.resolve(__dirname, '..')
//  console.log('request',homeDir);
//  var dataA = yield readFile(path.join(homeDir+'/theme/index.html'));
//
//  this.set({'Etag':md5(dataA)})
//  this.body = dataA
//}

exports.post = function *(){
  var homeDir = path.resolve(__dirname, '..')
  var body = this.request.body;
  var version = body.cm_appVersion;
  var appName = body.cm_appName;
  var appKey = body.cm_appKey;
  var jspath = homeDir+'/static/patchFile/'+ appName + '_'+version + '_' + appKey + '_main.js';
  console.log(jspath);
  if(fs.existsSync(jspath)){
    //yield client.SELECT(2)
    //var result = yield client.SMEMBERS(appName)
    //var patchs = yield db.selectDB("select * from patch where appName='"+appName+"' and appVersion='"+version+"' order by create_at DESC");
    var patchs = yield Patch.getPatchByUidAndNameAndVersion(appKey,appName,version);
    if(patchs && patchs.length >0){
      var result_patch = patchs[0]
      var dataA = yield readFile(path.join(jspath));
      var fileMd5 = md5(dataA)
      if(!result_patch){
        this.body = {
          code:10000,
          message:'未找到补丁'
        }
        return
      }
      switch (result_patch.patch_model){
        case 'condition':
        {
          var defArg = JSON.parse(result_patch.defArg)
          if(defArg && body.uid == defArg.uid){
            if (dataA){
              this.body = {
                code:0,
                message:'处理成功',
                result:{
                  patch_md5:fileMd5,
                  patch_url:result_patch.patch_url
                }
              }
            }
          }
        }
          break;
        case 'all':
        {
          if (dataA){
            this.body = {
              code:0,
              message:'处理成功',
              result:{
                patch_md5:fileMd5,
                patch_url:result_patch.patch_url
              }
            }
          }
        }
          break;
        case 'dev':
        {
          var isDev = body.isDev
          if(isDev){
            if (dataA){
              this.body = {
                code:0,
                message:'处理成功',
                result:{
                  patch_md5:fileMd5,
                  patch_url:result_patch.patch_url
                }
              }
            }
          }
        }
          break;
        default :
            this.body = {
              code:10000,
              message:'补丁模式不匹配'
            }
          break
      }
    }
  }else{
    console.log('fileNone')
    this.body = {
      code:10000,
      message:'无更新'
    }
  }
}
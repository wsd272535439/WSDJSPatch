/**
 * Created by hwh on 16/12/30.
 */
var db = require('../lib/runSqlite3.js')
var Patch = require('../lib/Patch')
exports.post = function * (){
  var appName = this.request.body.appName
  //yield client.SELECT(2)
  //var result = yield client.SMEMBERS(appName)
  //var patchs = yield db.selectDB("select * from patch where appName='"+appName+"' order by create_at DESC")
  var patchs = yield Patch.getPatchByUidAndName(this.state.user,appName);
  var versionObj = {}
  if(patchs && patchs.length > 0){
    for(var patch of patchs){
      if(!versionObj[patch.appVersion]){
        versionObj[patch.appVersion] = 1
      }else{
        versionObj[patch.appVersion] += 1
      }
    }
    var result_patchs = []
    if(patchs.length > 1){
      for(var version of Object.keys(versionObj)){
        for(var new_item of patchs){
          if(new_item.appVersion == version){
            result_patchs.push(new_item)
            break
          }
        }
      }
    }
   this.body = {
     code:0,
     message:'处理成功',
     result:{
       patchs:patchs.length > 1?result_patchs:patchs,
       versionObj:versionObj
     }
   }
  }else{
    this.body = {
      code:10000,
      message:'处理失败'
    }
  }
}
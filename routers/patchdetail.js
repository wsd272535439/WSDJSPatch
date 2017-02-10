/**
 * Created by hwh on 17/1/3.
 */
var db = require('../lib/runSqlite3.js')
var Patch = require('../lib/Patch')
exports.post = function * (){
  var appName = this.request.body.appName;
  var appVersion = this.request.body.appVersion;
  //yield client.SELECT(2)
  //var result = yield client.SMEMBERS(appName)
  var patchs = yield Patch.getPatchByUidAndNameAndVersion(this.state.user,appName,appVersion);
  //var patchs = yield db.selectDB("select * from patch where appName='"+appName+"' and appVersion='"+appVersion+"' order by create_at DESC");
  if(patchs && patchs.length > 0){

    console.log('patch',patchs)
    //返回最近的一个补丁，并且返回补丁个数
    this.body = {
      code:0,
      message:'处理成功',
      result:{
        patch:patchs[0],
        count:patchs.length
      }
    }
  }else{
    this.body = {
      code:10000,
      message:'处理失败'
    }
  }
}
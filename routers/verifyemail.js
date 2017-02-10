/**
 * Created by hwh on 17/1/17.
 */
var User = require('../lib/User')
var jwt = require('koa-jwt')
exports.post = function * (){
  var verifyKey = this.request.body.verifyKey;
  var id = this.state.user;
  console.log('____id',id,verifyKey);
  var user = yield User.getUserById(id);
  if (verifyKey === user.activeKey){
    //标记已经认证过的用户
    yield User.active(id);
    return this.body = {
      code:0,
      message:'验证成功'
    }
  }
  return this.body = {
    code:10000,
    message:'验证失败'
  }
}
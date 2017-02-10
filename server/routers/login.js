/**
 * Created by hwh on 17/1/20.
 */
var User = require('../lib/User');
var jwt = require('koa-jwt')
exports.post = function * (){
  var body = this.request.body;
  var email = body.email;
  var password = body.password;
  var userExist = yield User.getUserByEmail(email);
  if(userExist){
    if(userExist.password === password){
      var token = jwt.sign(userExist._id,'wsd',{expiresIn: 24 * 60 * 60  /* 1 days */});
      return this.body = {
        code:0,
        token:token,
        message:'登录成功'
      }
    }
  }
  return this.body = {
    code:10000,
    message:'用户不存在或者密码不正确'
  }
}
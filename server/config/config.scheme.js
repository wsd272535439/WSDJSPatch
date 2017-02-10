/**
 * Created by hwh on 16/12/27.
 */
var validator = require('validator');
var crypto = require('crypto');

module.exports = {
  "(GET|POST) /login":{
    "request" : {
      "body" : checkLogin
    }
  },
  "POST /patchconfig":{
    "request":{
      "body":checkConfigBody
    }
  },
  "POST /patchmodel":{
    "request":{
      "body":checkModelBody
    }
  },
  "POST /setapp":{
    "request":{
      "body":checkAppBody
    }
  },
  "POST /register":{
    "request":{
      "body":checkRegister
    }
  }
};

function md5 (str){
  return crypto.createHash('md5').update(str).digest('hex');
}

function checkAppBody(){
  var body = this.request.body
  var appName = body.appName
  var appIcon = body.appIcon
}

function checkConfigBody(){
  var body = this.request.body
  var version = body.appVersion
  var appName = body.appName
  var defArg = body.defArg
  var flash
  if(!appName || !version){
    flash = {
      code:10000,
      message: '缺少参数'
    }
  }
  if(!defArg){
    flash = {
      code:10000,
      message: '固定参数设置失败'
    }
  }
  if(flash){
    this.body = flash
    return false
  }
  return true
}

function checkModelBody(){
  var body = this.request.body
  var version = body.version
  var appName = body.appName
  var model = body.model
  var flash
  if(!appName || !version){
    flash = {
      code:10000,
      message: '缺少参数'
    }
  }
  if(['condition','dev','all'].indexOf(model) === -1){
    flash = {
      code:10000,
      message: '模式不匹配'
    }
  }
  if(flash){
    this.body = flash
    return false
  }
  return true
}

function checkRegister(){
  var body = this.request.body
  var flash;
  if(!body.email || !validator.isEmail(body.email)){
    flash = {error:'请填写正确的邮箱地址'}
  }else if(!body.password){
    flash = {error:'请填写密码'}
  }else if(body.password != body.repassword){
    flash = {error:'两次密码不一致'}
  }
  if(flash){
    this.body = {
      code:10000,
      error:flash.error
    }
    return false;
  }
  body.email = validator.trim(body.email);
  body.activeKey = md5(body.email);
  body.password = md5(validator.trim(body.password));
  return true;
}

function checkLogin(){
  var body = this.request.body
  var flash;
  if(!body.email || !validator.isEmail(body.email)){
    flash = {error:'请填写正确的邮箱地址'}
  }else if(!body.password){
    flash = {error:'请填写密码'}
  }
  if(flash){
    this.body = {
      code:10000,
      error:flash.error
    }
    return false;
  }
  body.email = validator.trim(body.email);
  body.activeKey = md5(body.email);
  body.password = md5(validator.trim(body.password));
  return true;
}
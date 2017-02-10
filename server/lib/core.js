/**
 * Created by hwh on 17/1/18.
 */
var App = require('./App');
var Patch = require('./Patch');
var User = require('./User');
module.exports = {
  get $User(){
    return User
  },
  get $App(){
    return App
  },
  get $Patch(){
    return Patch
  }
}
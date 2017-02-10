/**
 * Created by hwh on 17/1/17.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  email:{type:String,required:true},
  password:{type:String,required:true},
  activeKey:{type:String,required:true},
  isActive:{type:Boolean,default:false},
  created_at:{type:Date,default:Date.now()},
  updated_at:{type:Date,default:Date.now()}
})

module.exports = mongoose.model('User',UserSchema)
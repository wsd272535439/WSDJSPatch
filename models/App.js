/**
 * Created by hwh on 17/1/17.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AppSchema = new Schema({
  user:{ type: Schema.Types.ObjectId, ref: 'User' },
  appName:{type:String,required:true},
  appIcon:{type:String,required:true},
  created_at:{type:Date,default:Date.now()},
  updated_at:{type:Date,default:Date.now()}
})

AppSchema.index({name:1,updated_at:-1});
module.exports = mongoose.model('App',AppSchema)
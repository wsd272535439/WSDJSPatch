/**
 * Created by hwh on 17/1/17.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PatchSchema = new Schema({
  appName:{type:String,require:true},
  appVersion:{type:String,require:true},
  user:{ type: Schema.Types.ObjectId, ref: 'User' },
  patch_url:{type:String,require:true},
  patch_model:{type:String,require:true},
  defArg:{type:String,require:false},
  created_at:{type:Date,default:Date.now()},
  updated_at:{type:Date,default:Date.now()}
});

module.exports = mongoose.model('Patch',PatchSchema)
/**
 * Created by hwh on 17/1/17.
 */
var Patch = require('../models').Patch;

exports.addPatch = function(data){
  return Patch.create(data)
};

//根据uid和appName 找到 Patch
exports.getPatchByUidAndName = function (id,name){
  return Patch.find({appName:name}).populate({path:'user',match:{_id:id}}).exec()
}

//根据uid、appName、appVersion倒序返回 Patch
exports.getPatchByUidAndNameAndVersion = function(id,name,version){
  return Patch.find({appName:name,appVersion:version}).populate({path:'user',match:{_id:id}}).sort('-updated_at').exec()
}

//根据uid、appName、appVersion删除补丁
exports.removePatchByUidAndNameAndVersion = function (id,name,version){
  return Patch.find({appName:name,appVersion:version}).populate({path:'user',match:{_id:id}}).remove()
}
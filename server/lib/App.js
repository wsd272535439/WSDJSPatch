/**
 * Created by hwh on 17/1/17.
 */
var App = require('../models').App;

exports.addApp = function(data){
  return App.create(data)
};
//根据uid找到App
exports.getAppByUId = function (id){
  return App.find().populate('user',{'user._id':id}).sort('-updated_at').exec()
}

//根据uid和appName 找到 App
exports.getAppByUidAndName = function (id,name){
  return App.find({appName:name}).populate({path:'user',match:{_id:id}}).exec()
}
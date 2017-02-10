/**
 * Created by hwh on 17/1/17.
 */
var User = require('../models').User;
//生成doc
exports.addUser = function(data){
  return User.create(data)
};
//根据id查找doc
exports.getUserById = function (data) {
  return User.findById(data).exec()
};
//根据email查找doc
exports.getUserByEmail = function (data) {
  return User.findOne({email: data}).exec()
};
//根据id更新doc的isActive字段
exports.active = function (data) {
  return User.findByIdAndUpdate(data,{$set: {isActive: true}})
};

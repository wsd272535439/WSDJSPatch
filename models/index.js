/**
 * Created by hwh on 17/1/17.
 */
var mongoose = require('mongoose');
var config = require('config-lite').mongodb;

mongoose.connect(config.url,function(err){
  if(err){
    console.error('connect to %s error:',config.url,err.message);
    process.exit(1);
  }
});

exports.User = require('./User');
exports.App = require('./App');
exports.Patch = require('./Patch');
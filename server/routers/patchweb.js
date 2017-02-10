/**
 * Created by hwh on 17/1/7.
 */
var fs = require('fs');
var path = require('path');

function readFile(path){
  return function(cb){
    fs.readFile(path,{encoding:'utf8'},cb);
  }
}

exports.get = function * (){
  var homeDir = path.resolve(__dirname, '..')
  var dataA = yield readFile(path.join(homeDir+'/static/index.html'));
  console.log('daraa',dataA)
  this.body = dataA
}
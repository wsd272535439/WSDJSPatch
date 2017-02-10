/**
 * Created by hwh on 17/1/6.
 */
var config = require('../config/default.js')
var sqlite3 = require('sqlite3')
var db = new sqlite3.Database(config.dbPath,function(){

})
//建表

//db.run("create table app(app_name varchar(15),appIcon text)",function(){
//  db.run("create table patch(appName varchar(15)," +
//      "appVersion varchar(15)," +
//      "patch_url text," +
//      "patch_model varchar(15)," +
//      "create_at int," +
//      "defArg text)")
//})
module.exports = {
  runDB:function(sql){
    return function(callback){
      db.run(sql,callback)
    }
  },
  selectDB:function(sql){
    return function(callback){
      db.all(sql,callback)
    }
  }
}


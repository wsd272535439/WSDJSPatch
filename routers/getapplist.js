/**
 * Created by hwh on 16/12/30.
 */
var db = require('../lib/runSqlite3.js')
var App = require('../lib/App')
exports.post = function * (){

  //yield client.SELECT(1)
  //var result = yield client.keys('*')
  //var result = yield db.selectDB("select * from app")
  var appList = yield App.getAppByUId(this.state.user)
  this.body = {
    code:0,
    message:'处理成功',
    result:{
      apps:appList
    }
  }
}
/**
 * Created by hwh on 16/12/9.
 */
var app = require('koa')();
var router = require('koa-frouter');
var bodyparser = require('koa-bodyparser');
var static = require('koa-static');
var cors = require('koa-cors');
var gzip = require('koa-gzip');
var staticCache = require('koa-static-cache');
var errorhandler = require('koa-errorhandler');
var scheme = require('koa-scheme');
var config = require('./config/default');
var routerCache = require('koa-router-cache');
var core = require('./lib/core')

var User = require('./lib/User');
app.keys = ['keys', 'keykeys'];
//全局异常捕获
app.use(errorhandler());
//允许跨域访问
app.use(cors());
//指定服务器的静态资源地址，在当前目录下的文件可以直接localhost:3000/filename访问到
app.use(static('static'));

app.use(bodyparser());
app.use(staticCache(config.staticCacheConf));
app.use(scheme(config.schemeConf));

var jwt = require('koa-jwt');

//使用jwt
//hotfix是iOS端访问的接口 不需要jwt验证 用appKey（id）来实现
app.use(jwt({
  secret:'wsd'
}).unless({path: [/^\/login/,/^\/register/,/^\/hotfix/]}));

app.use(function *(next){
  if (!this.url.match(/^\/login/) && !this.url.match(/^\/register/) && !this.url.match(/^\/verifyemail/)) {
    if(this.state.user){
      var user = yield User.getUserById(this.state.user);
      console.log('user',user);
      if(!(user && user.isActive)){
        //此处默认为网易邮箱，具体的根据用户email作处理
        return this.body = {
          code: 10002,
          url:'http://mail.163.com',
          error: '请先验证邮箱'
        }
      }
    }
    yield next;
  } else {
    yield next;
  }
});

app.use(function *(next){
  try {
    yield next;
  } catch (err) {
    if (401 == err.status) {
      this.status = 200;
      this.body = {
        code:10001,
        error:'鉴权失败，请重新登录'
      }
    } else {
      throw err;
    }
  }
});


//此中间件拦截所有请求，除register和login之外，session过期都需要重新登录
//app.use(function*(next){
//  if((!this.session || !this.session.user) && (this.request.url !== '/register' && this.request.url !== '/login')){
//    console.log('requestInto');
//    this.body = {
//      code:10001,
//      error:'请登录后再操作'
//    }
//  }else{
//    yield next
//  }
//})

app.use(routerCache(app,config.routerCacheConf));
app.use(router(app,'routers'));
app.use(gzip());


app.listen(3000,function(){
  console.log('Server listening on:',3000);
})
# WSDJSPatch
# 自己搭建的JSPatch补丁下发系统（仿官方）。   

项目已经部署在阿里云公网112.126.78.86,访问http://112.126.78.86。   

# Usage
本地的运行方式：  

### server  

cd server && npm install   

npm start  

### react   

cd react && npm install   

npm start  

### iOS  

将TMJSPatchClient.h && TMJSPatchClient.m拖入到你的工程目录下  

### 匹配全量下发，AppKey和AppName是必填参数，和网页获取的一样；DefArg为选填，用于条件下发。目前条件只支持uid。
<pre><code>
TMJSPatchClient.setDefArg(["uid":xxx])  
TMJSPatchClient.setAppKey("589ae021685edd000fbb942e", withAppName: "wsd")  
TMJSPatchClient.sync()
</pre></code>

### 匹配开发预览
<pre><code>
TMJSPatchClient.setDefArg(["uid":xxx])  
TMJSPatchClient.setAppKey("589ae021685edd000fbb942e", withAppName: "wsd")  
//TMJSPatchClient.sync()  
TMJSPatchClient.setDevModel()
</pre></code>

### 注意   

运行server之前需要开启本机mongodb服务 sudo mongod --dbpath data/db2 --logpath /var/log/mongodb.log --logappend，若没有安装mongodb请先安装   

如果一切顺利 cd react && npm start 将会在浏览器打开localhost:4000，并出现登录页面   

以下配置需要修改为你自己的   

打开server/routers/register.js  

     
     

#### 这里的user和pass是你发送邮箱的帐号和授权码。
<pre><code>
var stmpTransport = nodemailer.createTransport("SMTP",{   
 
    host:"smtp.qq.com",//主机 qq邮箱，可修改   
    
    secureConnection:true,//使用SSL   
    
    port:465,   
    
    auth:{   
    
      user:"xxx", //你的邮箱帐号,   
      
      pass:"xxx"//你的邮箱授权码   
      
    }   
    
  });
  </pre></code>
  
  

# WSDJSPatch
自己搭建的JSPatch补丁下发系统（仿官方）。   

项目已经部署在阿里云公网112.126.78.86,访问http://112.126.78.86。   

本地的运行方式：   

cd server && npm install   

cd react && npm install   

开启本机mongodb服务 sudo mongod --dbpath data/db2 --logpath /var/log/mongodb.log --logappend   

如果一切顺利 cd react && npm start 将会在浏览器打开localhost:4000，并出现登录页面   

要注意以下配置需要修改为你自己的   

server/routers/register.js   

//这里的user和pass是你发送邮箱的帐号和授权码。   

var stmpTransport = nodemailer.createTransport("SMTP",{   
 
    host:"smtp.qq.com",//主机 qq邮箱，可修改   
    
    secureConnection:true,//使用SSL   
    
    port:465,   
    
    auth:{   
    
      user:"xxx", //你的邮箱帐号,   
      
      pass:"xxx"//你的邮箱授权码   
      
    }   
    
  });   
  

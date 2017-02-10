/**
 * Created by hwh on 17/1/19.
 */
import React, {Component} from 'react'
import {hashHistory} from 'react-router'
import network from '../network/network.js'
import Toast from 'antd-mobile/lib/toast/index.web.js'
Object.assign(Component.prototype,{
  toLogin(){
    hashHistory.push('login');
  },
  toVerifyEmail(url){
    console.log('json',url);
    hashHistory.push({pathname: 'verifyemail',query: {url: url}});
  },
  async getData(api,param){
    try{
      let json = await network(api,param);
      if(json.code === 10001){
        this.toLogin();
        return
      }else if(json.code === 10002){
        this.toVerifyEmail(json.url);
      }
      return json
    }catch(e){
      Toast.fail(e.toString());
    }
  }
})
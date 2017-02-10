/**
 * Created by hwh on 17/1/14.
 */
import React, { Component } from 'react';
import Button from '../antd-mobile/lib/button/index.web.js'
import {hashHistory} from 'react-router'
import Toast from 'antd-mobile/lib/toast/index.web.js'
export default class extends Component{
  render(){
    return (
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',width:'100%',height:'100%',backgroundColor:'#f2f2f2'}}>
          <div style={{fontSize:35,fontWeight:'bold'}}>登录</div>
          <input ref='email' style={{marginTop:50,border:'2px solid #999999',width:'40%',padding:10,borderRadius:6,'box-sizing': 'border-box'}} placeholder="邮箱"/>
          <input ref='password' style={{marginTop:40,border:'2px solid #999999',width:'40%',padding:10,borderRadius:6,'box-sizing': 'border-box'}} placeholder="密码"/>
          <div onClick={e=>hashHistory.push('register')} style={{color:'blue',fontSize:14,textAlign:'left',width:'40%',marginTop:20}}>立即注册</div>
          <Button onClick={e=> this._login(e)} style={{backgroundColor:'#ff4000',color:'white',width:'40%',marginTop:20}}>登录</Button>
        </div>
    )
  }

  async _login(e){
    let email = this.refs.email.value.trim()
    let password = this.refs.password.value.trim()
    if(!email || !password){
      Toast.fail('请填入相关信息')
      return
    }
    let param = {email:email,password:password}
    let data = await this.getData('login',param)
    if(data.code === 0){
      if(data.token){
        window.localStorage.setItem('token',data.token)
        hashHistory.push('/')
      }
    }else{
      Toast.fail(data.message)
    }
  }
}
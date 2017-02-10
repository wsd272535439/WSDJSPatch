/**
 * Created by hwh on 17/1/20.
 */
import React, { Component } from 'react';
import Button from '../antd-mobile/lib/button/index.web.js'
import {hashHistory} from 'react-router'
import Toast from 'antd-mobile/lib/toast/index.web.js'
export default class extends Component {
  render() {
    return (
        <div
            style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',width:'100%',height:'100%',backgroundColor:'#f2f2f2'}}>
          <div style={{fontSize:35,fontWeight:'bold'}}>注册</div>
          <input ref='email'
                 style={{marginTop:50,border:'2px solid #999999',width:'40%',padding:10,borderRadius:6,'box-sizing': 'border-box'}}
                 placeholder="邮箱"/>
          <input ref='password'
                 style={{marginTop:40,border:'2px solid #999999',width:'40%',padding:10,borderRadius:6,'box-sizing': 'border-box'}}
                 placeholder="密码"/>
          <input ref='repassword'
                 style={{marginTop:40,border:'2px solid #999999',width:'40%',padding:10,borderRadius:6,'box-sizing': 'border-box'}}
                 placeholder="重复密码"/>

          <Button onClick={e=> this._register(e)}
                  style={{backgroundColor:'#ff4000',color:'white',width:'40%',marginTop:40}}>注册</Button>
        </div>
    )
  }

  async _register(){
    let email = this.refs.email.value.trim()
    let password = this.refs.password.value.trim()
    let repassword = this.refs.repassword.value.trim()
    if(!email || !password || !repassword){
      Toast.fail('请填入相关信息')
      return
    }
    let param = {email:email,password:password,repassword:repassword}
    let data = await this.getData('register',param)
    if(data.code === 0){
      if(data.token){
        window.localStorage.setItem('token',data.token)
        hashHistory.push('/')
      }
    }else{
      Toast.fail(data.error)
    }
  }
}
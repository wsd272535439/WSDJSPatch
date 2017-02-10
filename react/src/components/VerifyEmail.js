/**
 * Created by hwh on 17/2/4.
 */
import React, { Component } from 'react';
import Button from '../antd-mobile/lib/button/index.web.js'
import {hashHistory} from 'react-router'
import Toast from 'antd-mobile/lib/toast/index.web.js'
export default class extends Component{
  render(){
    return (
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%',height:'100%',backgroundColor:'#f2f2f2'}}>
          <Button onClick={e=> this._verify(e)} style={{backgroundColor:'#ff4000',color:'white',width:'50%'}}>点击验证邮箱</Button>
        </div>
    )
  }

  async componentDidMount(){
    let verifyKey = this.props.location.query.verifyKey;
    if(verifyKey){
      let data = await this.getData('verifyemail',{verifyKey: verifyKey});
      if(data.code === 0){
        hashHistory.push('/');
      }
    }
  }

  _verify(e){
    let url = this.props.location.query.url;
    console.log('url',url);
    window.location.replace(url);
  }
}
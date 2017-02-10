/**
 * Created by hwh on 16/12/29.
 */
import React, { Component } from 'react';
import Button from '../antd-mobile/lib/button/index.web.js'
//import $ from 'jquery'
import Toast from '../antd-mobile/lib/toast/index.web.js'
import { hashHistory } from 'react-router'
import config from '../config/config'
export default class extends Component{
  constructor(props){
    super(props)
    this.state = {
      fileName:undefined,
      file:undefined
    }
  }
  _handleChange(e){
    e.preventDefault();
    try{
      let target = e.target;
      let files = target.files;
      console.log(files)
      let img = files[0];
      if (img) {
        this.setState({
          fileName: img.name,
          file:img
        })
      }
      console.log('img',img.name);
    }catch(e){
      console.log('error',e)
    }
  }

  _uploadFile(e){
    e.preventDefault()
    let appName = this.refs.appName.value.trim();
    let token = window.localStorage.getItem('token');
    if(!this.state.file || !appName){
      Toast.fail('名字或logo为空')
    }
    let formData = new FormData();

    formData.append('name',appName);
    formData.append('filedata',this.state.file);

    window.jQuery.ajax({
      url:config.baseUrl + 'setapp',
      data:formData,
      dataType:'json',
      type:'post',
      cache: false,
      contentType: false,
      processData: false,
      headers:{'Authorization':'Bearer' + ' '+token},
      success:function(data){
        if(data.code === 0){
          hashHistory.goBack();
        }else{
          if(data.code === 10001){
            this.toLogin()
          }
          Toast.fail(data.message);
        }

      },error:function(err){
        Toast.fail(err.toString);
      }
    });
  }

  render(){
    return (
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',width:'100%',height:'100%',backgroundColor:'#f2f2f2'}}>
          <div style={{fontSize:35,fontWeight:'bold'}}>添加App</div>
          <input ref='appName' style={{marginTop:70,border:'2px solid #999999',width:'40%',padding:10,borderRadius:6,'box-sizing': 'border-box'}} placeholder="App名"/>
          <a style={{display:'flex',marginTop:70,width:'40%',padding:5,'box-sizing': 'border-box',overflow:'hidden'}}>
            <div style={{width:'80%',border:'2px solid #999999',borderRadius:6,padding:10,'box-sizing': 'border-box',color:this.state.fileName?"#333333":"#666666"}}>
              {this.state.fileName ? this.state.fileName:'请选择图片,为app logo'}
            </div>
            <div style={{position:'relative',backgroundColor:'#ff4000',borderRadius:6,color:'white',padding:10,'box-sizing': 'border-box'}}>
              选择图片
              <input type='file' style={{fontSize:100,position:'absolute',opacity:0,right:0,top:0,filter: 'alpha(opacity=0)',
    cursor: 'pointer'}} onChange={(v)=>this._handleChange(v)}/>
            </div>

          </a>
          <Button onClick={e=> this._uploadFile(e)} style={{backgroundColor:'#ff4000',color:'white',width:'40%',marginTop:50}}>提交</Button>
        </div>
    )
  }
}
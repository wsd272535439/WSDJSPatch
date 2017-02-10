/**
 * Created by hwh on 16/12/30.
 */

import React, { Component } from 'react';
import Button from 'antd-mobile/lib/button/index.web.js'
//import $ from 'jquery'
import './addPatch.css'
import Toast from 'antd-mobile/lib/toast/index.web.js'
//import Flex from '../antd-mobile/lib/flex/index.web.js'
//import Radio from '../antd-mobile/lib/radio/index.web.js'
//import List from '../antd-mobile/lib/list/index.web.js'
import { hashHistory } from 'react-router'
import config from '../config/config'

export default class extends Component{
  constructor(props){
    super(props)
    this.state = {
      fileName:undefined,
      file:undefined,
      radioIndex:0,
      model:'dev'
    }
  }
  _handleChange(e){
    e.preventDefault();
    try{
      let target = e.target;
      let files = target.files;

      let patch = files[0];
      if(!(patch.type == "text/javascript")){
        Toast.fail('请选择正确的js文件')
        return
      }
      if (patch) {
        this.setState({
          fileName: patch.name,
          file:patch
        })
      }
    }catch(e){
      console.log('error',e)
    }
  }

  _uploadFile(e){
    e.preventDefault()
    let version = this.props.location.query.appVersion
    let appVersion = version?version:this.refs.appVersion.value.trim()
    var defArg
    if(this.refs.conditionArg){
      defArg = this.refs.conditionArg.value.trim()
    }
    const {appName,appKey} = this.props.location.query
    if(!this.state.file || !appVersion || !this.state.model){
      Toast.fail('文件或版本号为空')
    }
    let formData = new FormData();
    var index = 0;
    formData.append('name',appName);
    formData.append('version',appVersion);
    formData.append('model',this.state.model);
    this.refs.conditionArg && formData.append('defArg',defArg);
    formData.append('appKey',appKey);
    formData.append('filedata',this.state.file);
    let token = window.localStorage.getItem('token');

    console.log('defArg',defArg)
    window.jQuery.ajax({
      url:config.baseUrl + 'addpatch',
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

  _selectRadio(e){
    let index = e.target.id
    let value = e.target.value
    this.setState({
      radioIndex:Number(index),
      model:value
    })
  }


  render(){
    const {radioIndex} = this.state
    const {appVersion} = this.props.location.query
    return (
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',width:'100%',height:'100%',backgroundColor:'#f2f2f2'}}>
          <div style={{fontSize:35,fontWeight:'bold'}}>发布补丁</div>
          <div style={{marginTop:70,marginBottom:10,textAlign:'left',width:'40%'}}>App版本</div>
          {appVersion ? <div style={{color:'#ff4000',textAlign:'left',width:'40%'}}>{appVersion}</div>:<input ref='appVersion' style={{border:'2px solid #999999',width:'40%',padding:10,borderRadius:6,'box-sizing': 'border-box'}} placeholder="App版本"/>}
          <div style={{marginTop:30,marginBottom:10,textAlign:'left',width:'40%'}}>补丁文件</div>
          <a style={{display:'flex',width:'40%',padding:5,'box-sizing': 'border-box',overflow:'hidden'}}>
            <div style={{width:'75%',border:'2px solid #999999',borderRadius:6,padding:10,'box-sizing': 'border-box',color:this.state.fileName?"#333333":"#666666"}}>
              {this.state.fileName ? this.state.fileName:'请选择补丁文件(main.js)'}
            </div>
            <div style={{position:'relative',backgroundColor:'#ff4000',borderRadius:6,color:'white',padding:10,'box-sizing': 'border-box'}}>
              选择文件
              <input type='file' style={{fontSize:100,position:'absolute',opacity:0,right:0,top:0,filter: 'alpha(opacity=0)',
    cursor: 'pointer'}} onChange={(v)=>this._handleChange(v)}/>
            </div>
          </a>
          {radioIndex === 2 && <div style={{marginTop:30,marginBottom:10,textAlign:'left',width:'40%'}}>设置条件参数（如果有多个，形如uid=2,name=john，中间以逗号分隔）</div>}
          {radioIndex === 2 && <input ref='conditionArg' style={{border:'2px solid #999999',width:'40%',padding:10,borderRadius:6,'box-sizing': 'border-box'}} placeholder="设置条件下发参数"/>}
          <div style={{marginTop:30,display:'flex',width:'40%'}}>
            <label><input checked={0 === radioIndex} id={0} ref='dev' type='radio' value='dev' onClick={e=>this._selectRadio(e)}/>开发预览</label>
            <label style={{marginLeft:10}}><input checked={1 === radioIndex} onClick={e=>this._selectRadio(e)} id={1} ref='all' type='radio' value='all'/>全量下发</label>
            <label style={{marginLeft:10}}><input checked={2 === radioIndex} onClick={e=>this._selectRadio(e)} id={2} ref='condition' type='radio' value='condition'/>条件下发</label>
          </div>
          <Button onClick={e=> this._uploadFile(e)} style={{backgroundColor:'#ff4000',color:'white',width:'40%',marginTop:50}}>提交</Button>
        </div>
    )
  }
}
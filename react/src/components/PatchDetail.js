/**
 * Created by hwh on 17/1/3.
 */

import React, { Component } from 'react';
import './patchDetail.css'
import {Link} from 'react-router'
import Button from '../antd-mobile/lib/button/index.web.js'
import Toast from '../antd-mobile/lib/toast/index.web.js'
import {hashHistory} from 'react-router'
//var paths = require('../config/paths');
import config from '../config/config'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      patch:undefined,
      count:0
    }
  }

  componentDidMount(){
    this._fetchData()
  }

  async _fetchData(){
    const {appName,appVersion,appKey} = this.props.location.query
    //console.log('aoo\\pp',appName,appIcon)
    let responseJson = await this.getData('patchdetail',{
      appName:appName,
      appVersion:appVersion,
      appKey:appKey
    })

    if(responseJson.code === 0){
      let patch = responseJson.result.patch
      let count = responseJson.result.count
      if(patch){
        this.setState({
          patch:patch,
          count:count
        })
      }
    }else{
      if(responseJson.code === 10001){
        this.toLogin()
      }
    }
  }

  //_renderApp(){
  //  var list = this.state.list
  //  var components
  //  if(this.state.list.length > 0){
  //    components = list.map((item,index)=>{
  //      return(
  //          <li style={{marginLeft:'6%',height:'30%',marginTop:30}}>
  //            <Link to>
  //              <div style={{display:'flex',flexDirection:'column',width:200,height:'100%',borderRadius:2,backgroundColor:'white'}}>
  //                <div to='patchDetail' className='havePatchContent'>{item.appVersion}</div>
  //              </div>
  //            </Link>
  //          </li>
  //      )
  //    })
  //  }
  //  return components
  //}
  _getLocalTime(nS){
    console.log(nS)
    return new Date(parseInt(nS)).toLocaleString().replace(/:\d{1,2}$/,' ')
  }

  async _delete(){
    try{
      const {appName,appVersion,appKey} = this.props.location.query
      let responseJson = await this.getData('delpatch',{
        appName:appName,
        appVersion:appVersion,
        appKey:appKey
      })
      if(responseJson.code === 0){
        console.log(hashHistory)
        hashHistory.goBack()
      }else{
        Toast.fail('出错拉')
      }
    }catch(e){
      console.log('error',e)
    }

  }

  _getModelName(model){
    if(!model){
      return
    }
    switch (model){
      case 'dev':
        return '开发预览'
      case 'all':
        return '全量下发'
      case 'condition':
        return '条件下发'
    }
  }

  render() {
    const {appName,appIcon,appKey} = this.props.location.query
    const {patch,count} = this.state
    return (
        <div style={{display:'flex',width:'100%',height:'100%',backgroundColor:'#f2f2f2'}}>
          <div style={{display:'flex',flexDirection:'column',width:200,height:'100%',borderRadius:4,backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
            <img style={{width:100,height:100}} src={appIcon}/>
            <Link to={{pathname:'AddPatch',query:{appName:appName}}} style={{color:'#333333',fontSize:15,marginTop:20}}>AppName:{appName}</Link>
            <div style={{width:150,color:'#333333',fontSize:15,wordWrap: 'break-word',marginTop:20}}>AppKey：{appKey}</div>
          </div>
          {patch &&
          <div style={{marginLeft:40,width:'100%',display:'flex',flexDirection:'column',alignItems:'center',boxSizing:'border-box'}}>
            <div style={{fontSize:35,fontWeight:'bold',alignSelf:'center',marginTop:60}}>补丁详情</div>
            <span style={{marginTop:15,color:'#666666'}}>App版本号：<span style={{color:'#333333'}}>{patch.appVersion}</span></span>
            <span style={{marginTop:15,color:'#666666'}}>当前补丁版本号：<span style={{color:'#333333'}}>{count}</span></span>
            <span style={{marginTop:15,color:'#666666'}}>更新时间：<span style={{color:'#333333'}}>{(Date.parse(patch.created_at)/1000).timeDiff()}</span></span>
            <span style={{alignSelf:'center',marginTop:15,color:'#666666'}}>补丁下发模式：<span style={{color:'#333333'}}>{this._getModelName(patch.patch_model)}</span></span>
            <div style={{marginTop:35,display:'flex',justifyContent:'center'}}>
              <Link to={{pathname:'AddPatch',query:{appName:appName,appVersion:patch.appVersion}}}>
                <Button style={{width:150,backgroundColor:'#ff4000',color:'white'}}>发布新补丁</Button>
              </Link>
              <Button onClick={()=>this._delete()} style={{marginLeft:70,width:150,backgroundColor:'#ff4000',color:'white'}}>删除此版本</Button>
            </div>
          </div>
          }
        </div>
    );
  }
}

export default App;

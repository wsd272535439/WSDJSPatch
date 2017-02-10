/**
 * Created by hwh on 16/12/30.
 */
import React, { Component } from 'react';
import './appDetail.css'
import {Link} from 'react-router'
import config from '../config/config'

//var paths = require('../config/paths');

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      list:[],
      versionObj:undefined
    }
  }

  componentDidMount(){
    this._fetchData()
  }

  async _fetchData(){
    const {appName,appKey} = this.props.location.query
    let responseJson = await this.getData('getapppatchlist',{
      appName:appName,
      appKey:appKey
    });
    if(responseJson.code === 0){
      let resultList = responseJson.result.patchs
      let versionObj = responseJson.result.versionObj
      console.log(resultList)
      if(resultList && resultList.length > 0){
        this.setState({
          list:resultList,
          versionObj:versionObj
        })
      }
    }else{
      if(responseJson.code === 10001){
        this.toLogin()
      }
    }
  }



  _renderApp(name,icon,appKey){
    var list = this.state.list
    console.log('list',list)
    var components
    if(this.state.list.length > 0){
      components = list.map((item,index)=>{
        return(
            <li key={index} style={{marginLeft:'6%',height:'30%',marginTop:30}}>
              <Link to={{pathname:'patchDetail',query:{appName:name,appVersion:item.appVersion,appIcon:icon,appKey:appKey}}}>
                <div style={{display:'flex',flexDirection:'column',width:200,height:'100%',borderRadius:2,backgroundColor:'white'}}>
                  <div className='havePatchContent'>{item.appVersion}<div style={{color:'white',fontSize:13,marginTop:10,opacity:0.8}}>App Version</div></div>
                  <span style={{alignSelf:'center',marginTop:15,color:'#666666'}}>补丁版本：<span style={{color:'#333333'}}>{this.state.versionObj[item.appVersion]}</span></span>
                  <span style={{alignSelf:'center',marginTop:15,color:'#666666'}}>更新时间：<span style={{color:'#333333'}}>{(Date.parse(item.created_at)/1000).timeDiff()}</span></span>
                </div>
              </Link>
            </li>
        )
      })
    }
    return components
  }

  render() {
    const {appName,appIcon,appKey} = this.props.location.query
    console.log('app',appName,appIcon,appKey)

    return (
        <div style={{display:'flex',width:'100%',height:'100%',backgroundColor:'#f2f2f2'}}>
          <div style={{display:'flex',flexDirection:'column',width:200,height:'100%',borderRadius:4,backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
            <img style={{width:100,height:100}} src={appIcon}/>
            <Link to={{pathname:'AddPatch',query:{appName:appName,appKey:appKey}}} style={{color:'#333333',fontSize:15,marginTop:20}}>{'AppName：'+appName}</Link>
            <div style={{width:150,color:'#333333',fontSize:15,wordWrap: 'break-word',marginTop:20}}>AppKey：{appKey}</div>
          </div>
          <ul style={{height:'100%',display:'flex',flexWrap:'wrap'}}>
            {this._renderApp(appName,appIcon,appKey)}
            <li style={{marginLeft:'6%',height:'30%',marginTop:30}}>
              <div style={{display:'flex',flexDirection:'column',width:200,height:'100%',borderRadius:2,backgroundColor:'white'}}>
                <Link to={{pathname:'AddPatch',query:{appName:appName,appKey:appKey}}} className='patchContent'>添加App版本</Link>
              </div>
            </li>
          </ul>
        </div>
    );
  }
}

Number.prototype.timeDiff = function(){
  var d_minutes,d_hours,d_days;
  var timeNow = parseInt(new Date().getTime()/1000);
  var d;
  d = parseInt(timeNow - this);
  d_days = parseInt(d/86400);
  d_hours = parseInt(d/3600);
  d_minutes = parseInt(d/60);
  if(d_days>0 && d_days<4){
    return d_days+"天前";
  }else if(d_days<=0 && d_hours>0){
    return d_hours+"小时前";
  }else if(d_hours<=0 && d_minutes>0){
    return d_minutes+"分钟前";
  }else if(d_minutes <= 0 && d >= 0){
    return "刚刚"
  }else{
    var s = new Date(this*1000);
    //s.getFullYear()+"年";
    return (s.getFullYear()+"年" + (s.getMonth() + 1)+"月"+s.getDate()+"日")
  }
}

export default App;

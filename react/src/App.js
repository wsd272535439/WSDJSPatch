import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router'
import config from './config/config'
//var paths = require('../config/paths');

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      list:[]
    }
  }

  componentDidMount(){
    this._fetchData()

  }

  async _fetchData(){
    console.log('configbaseUrl',config.baseUrl)
    try{
      var responseJson = await this.getData('getapplist',{})
      if(!responseJson){
        return
      }
      if(responseJson.code === 0){
        let resultList = responseJson.result.apps
        if(resultList && resultList.length > 0){
          this.setState({
            list:resultList
          })
        }
      }
    }catch(e){
      console.log('e',e)
    }

  }
  _renderApp(){
    var list = this.state.list
    var components
    if(this.state.list.length > 0){
      components = list.map((item,index)=>{
        console.log('item',item._id)
        return(
            <li key={index} style={{marginLeft:'6%',height:'40%'}}>
              <div style={{display:'flex',flexDirection:'column',width:200,height:'100%',borderRadius:4,backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
                <img style={{width:60,height:60}} src={item.appIcon}/>
                <Link to={{pathname:'appDetail',query:{appName:item.appName,appIcon:item.appIcon,appKey:item._id}}} className='content'>{item.appName}</Link>
              </div>
            </li>
        )
      })
    }
    return components
  }
  render() {
    return (
        <div style={{width:'100%',height:'100%',backgroundColor:'#f2f2f2'}}>
          <ul style={{height:'100%',display:'flex',justifyContent:'center',alignItems:'center',flexWrap:'wrap'}}>
            {this._renderApp()}
            <li style={{marginLeft:'6%',height:'40%'}}>
              <div style={{display:'flex',flexDirection:'column',width:200,height:'100%',borderRadius:4,backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
                <img style={{width:60,height:60}} src={require('./img/button_jia2@2x.png')}/>
                <Link to='addApp' className='content'>新增App</Link>
              </div>
            </li>
          </ul>
        </div>
    );
  }
}

export default App;

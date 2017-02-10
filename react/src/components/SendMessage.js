/**
 * Created by hwh on 16/12/26.
 */
import React, { Component } from 'react';
import io from 'socket.io-client'
import '../antd-mobile/dist/antd-mobile.min.css';
import NavBar from '../antd-mobile/lib/nav-bar/index.web.js'
export default class extends Component{
  constructor(props){
    super(props)
    var socket = io.connect('http://localhost:3000')
    socket.on('connected',function() {
      alert('connected to technode!')
    })

  }
  render(){
    return (
        <div style={{width:'100%',height:'100%'}}>
          <NavBar style={{backgroundColor:'black'}} leftContent={<div style={{marginLeft:30}}>technode</div>}>

          </NavBar>
          <div className='inputBack'>
            <div style={{width:'60%',padding:10,border: '1px dashed #e8e8e8',backgroundColor:'#f2f2f2','box-sizing': 'border-box'}}>
              techone
            </div>
            <div style={{backgroundColor:'white',width:'60%',padding:20,border: '1px dashed #e8e8e8','box-sizing': 'border-box'}}>
              <textarea style={{border: '1px dashed #e8e8e8',width:'100%'}} placeholder="Enter to quick send">
              </textarea>
            </div>
          </div>
        </div>
    )
  }
}
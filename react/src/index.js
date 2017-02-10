import React from 'react';
import { render } from 'react-dom';
import App from './App';
import AddApp from './components/AddAppMessage.js'
import AppDetail from './components/AppDetail.js'
import AddPatch from './components/AddPatch.js'
import PatchDetail from './components/PatchDetail.js'
import UserLogin from './components/UserLogin.js'
import Register from './components/Register.js'
import {Router, Route, hashHistory} from 'react-router';
import VerifyEmail from './components/VerifyEmail.js'
require('./category/Category')
import './index.css';
import './print.css'
import './antd-mobile/dist/antd-mobile.min.css';

render(
  <Router history={hashHistory}>
    <Route path="/" component={App} onEnter={(param,replace)=>{
      if(!window.localStorage.getItem('token')){
        replace('/login');
      }
    }}/>
    <Route path="addApp" component={AddApp}/>
    <Route path="AppDetail" component={AppDetail}/>
    <Route path="AddPatch" component={AddPatch}/>
    <Route path="patchDetail" component={PatchDetail}/>
    <Route path="login" component={UserLogin}/>
    <Route path="register" component={Register}/>
    <Route path="verifyemail" component={VerifyEmail}/>
  </Router>,
  document.getElementById('root')
);

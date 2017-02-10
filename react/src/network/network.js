/**
 * Created by hwh on 17/1/19.
 */
import config from '../config/config.js'
import {hashHistory} from 'react-router'
export default function(api,param){
  return new Promise(async (resolve,reject)=>{
    try{
      let token = window.localStorage.getItem('token')
      console.log('publishtoken',token)
      let response = await window.fetch(config.baseUrl+api,{
        method:'POST',
        body:JSON.stringify(param),
        headers: token?{
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization':'Bearer' + ' '+token
        }:{
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      })
      let responseJson = await response.json()
      resolve(responseJson)
      console.log(api,response,responseJson)
    }catch(e){
      console.log('e',e)
      reject(e)
    }
  })
}
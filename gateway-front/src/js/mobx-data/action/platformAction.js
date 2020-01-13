import { action, runInAction } from 'mobx';

export class PlatformAction {

  @action('平台登录') platformLogin = async (data) => {
    if(data === 'nacos'){
      await fetch('http://127.0.0.1:8848/nacos/v1/auth/login',{
        body:'username=nacos&password=nacos',
        method:'POST',
        // mode:'cors',
        headers: {
          // 'host':'localhost:8848',
          // 'refer':'localhost:8848',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }).then( res => {
        console.log(res.ok)
      }, err => {
        console.log(err)
      })
    }
  };
}
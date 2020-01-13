import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import zhCN from 'antd/lib/locale-provider/zh_CN'
import { LocaleProvider } from 'antd'
import moment from 'moment'
import './App.less'
import Dashboard from './js/components/dashboard'
import Login from './js/components/login'
import history from './js/utils/history';

moment.locale('zh-cn')

const App = () => (
  <LocaleProvider locale={zhCN}>
    <div className="main-app">
      <Router history={history}>
        <Switch>
          /* 登陆 */
          <Route exact path="/" component={Login}/>
          <Route path="/login" component={Login}/>
          /* dashboard */
          <Route path="/dashboard" component={Dashboard}/>
        </Switch>
      </Router>
    </div>
  </LocaleProvider>
)

export default App

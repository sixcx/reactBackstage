//路由配置文件

import React from 'react'
import { HashRouter, Switch } from 'react-router-dom'
import { IndexRoute,Route, Redirect } from 'react-router'
import createHistory from 'history/createBrowserHistory'
import Layout from 'layout'
import Login from 'pages/login'

const history = createHistory();
const location = history.location;

const routes = (
  <HashRouter>
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/app/index" push />} />        
      <Route path="/app" component={Layout} />
      <Route path="/login" component={Login} />
    </Switch>
  </HashRouter>
)

export default routes
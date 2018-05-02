//路由配置文件

import React from 'react'
import { HashRouter, Switch } from 'react-router-dom'
import { Route, Redirect } from 'react-router'
import createHistory from 'history/createBrowserHistory'
import Layout from 'layout'
import Login from 'pages/login'

const history = createHistory();
const location = history.location;

const routes = (
  <HashRouter>
    <Switch>
      <Route exec path="/" component={Layout} />
      <Route exec path="/login" component={Login} />
      {/* {location.hash === '#/' ? <Redirect to='/login' /> : ''} */}
    </Switch>
  </HashRouter>
)

export default routes
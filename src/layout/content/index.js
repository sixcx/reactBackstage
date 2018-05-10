//主要内容显示
import React from 'react'
import { Route } from 'react-router-dom'
import { Layout } from 'antd'
import Index from 'pages/index'
import Button from 'pages/basic/button'
import Icons from 'pages/basic/icon'
import Carousels from 'pages/basic/carousel'

import './index.less'

class Content extends React.Component {
  render() {
    return (
      <Layout.Content className="content" id="content">
        <Route path="/app/index" component={Index} />
        <Route path="/app/basic/button" component={Button} />
        <Route path="/app/basic/icon" component={Icons} />
        <Route path="/app/basic/carousel" component={Carousels} />
      </Layout.Content>
    )
  }
}

export default Content

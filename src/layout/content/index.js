//主要内容显示
import React from 'react'
import { Route } from 'react-router-dom'
import { Layout } from 'antd'
import Index from 'pages/index'
import './index.less'

class Content extends React.Component {
  render() {
    return (
      <Layout.Content className="content" id="content">
        <Route path="/index" component={Index} />
      </Layout.Content>
    )
  }
}

export default Content

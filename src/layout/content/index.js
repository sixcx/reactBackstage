//主要内容显示
import React from 'react'
import { Route } from 'react-router-dom'
import { Layout } from 'antd'
import Index from 'pages/index'
import Button from 'pages/basic/button'
import Icons from 'pages/basic/icon'
import Carousels from 'pages/basic/carousel'
import Tab from 'pages/basic/tab'
import Tree from 'pages/basic/tree'
import Modal from 'pages/basic/modal'
import Tip from 'pages/basic/tip'
import RichText from 'pages/basic/richText'
import BasicForm from 'pages/form/basic'
import OtherForm from 'pages/form/other'
import BasicTable from 'pages/table/basic'
import SeniorTable from 'pages/table/senior'
import AsyncTable from 'pages/table/async'
import Echarts from 'pages/charts/echarts'
import TodoList from 'pages/utils/todoList'
import MortgageCal from 'pages/utils/mortgage'
import Map from 'pages/map/index'
import Gallery from 'pages/gallery/index'

import './index.less'

class Content extends React.Component {
  render() {
    return (
      <Layout.Content className="content" id="content">
        <Route path="/app/index" component={Index} />
        <Route path="/app/basic/button" component={Button} />
        <Route path="/app/basic/icon" component={Icons} />
        <Route path="/app/basic/carousel" component={Carousels} />
        <Route path="/app/basic/tabs" component={Tab} />
        <Route path="/app/basic/tree" component={Tree} />
        <Route path="/app/basic/modal" component={Modal} />
        <Route path="/app/basic/tipNote" component={Tip} />
        <Route path="/app/basic/richText" component={RichText} />
        <Route path="/app/form/basicForm" component={BasicForm} />
        <Route path="/app/form/otherForm" component={OtherForm} />
        <Route path="/app/table/basicTable" component={BasicTable} />
        <Route path="/app/table/seniorTable" component={SeniorTable} />
        <Route path="/app/table/dataTable" component={AsyncTable} />
        <Route path="/app/charts/echarts" component={Echarts} />
        <Route path="/app/utils/todoList" component={TodoList} />
        <Route path="/app/utils/mortgage" component={MortgageCal} />
        <Route path="/app/map" component={Map} />
        <Route path="/app/gallery" component={Gallery} />
      </Layout.Content>
    )
  }
}

export default Content

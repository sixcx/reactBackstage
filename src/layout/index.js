//布局主页
import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Icon, Switch, Layout } from 'antd'
import { menus } from 'utils/menu'
import Headers from './header'
import Content from './content'
import Bottom from './bottom'
import SiderCustom from './menu/sider'
import './index.less'

class Layouts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'dark',
      current: 'index',
      collapsed: false,
      mode: 'inline',
      isMobile: false
    }
  }

  componentWillMount() {
    this.getClientWidth();
    window.onresize = () => {
      this.getClientWidth();
    }
  }

  componentDidMount() {
    this.handleClick([], 'index')
  }

  getClientWidth = () => {    // 获取当前浏览器宽度并设置responsive管理响应式
    const clientWidth = document.body.clientWidth;
    this.setState({
      isMobile: clientWidth <= 992 ? true : false
    })
  };

  //菜单折叠
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
      mode: this.state.collapsed ? 'inline' : 'vertical',
    })
  }

  handleClick = (e, special) => {
    this.setState({
      current: e.key || special,
    })
  }

  render() {
    return (
      <Layout style={{height: '100%'}}>
        {!this.state.isMobile && <SiderCustom collapsed={this.state.collapsed} />}
        <Layout style={{flexDirection: 'column'}}>
          <Headers toggle={this.toggle} collapsed={this.state.collapsed} isMobile={this.state.isMobile} />
          <Content style={{ margin: '0 16px', overflow: 'initial' }}/>
          <Bottom style={{ textAlign: 'center' }}/>
        </Layout>
      </Layout>
    )
  }
}

export default Layouts
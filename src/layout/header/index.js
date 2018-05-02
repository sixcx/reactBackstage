//头部布局
import React from 'react'
import { Menu, Icon, Layout } from 'antd'
import { Link } from 'react-router-dom'
import * as screenfull from 'screenfull'
import './index.less'

const SubMenu = Menu.SubMenu;
const { Header } = Layout;

class Headers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'wyz' //用户名
    }
  }

  //退出登录
  clear = (key) => {
    if (key.key === 'out') {
      this.props.logout()
    }
  }

  //全屏
  screenFull = () => {
    if (screenfull.enabled) {
      screenfull.request()
    }
  }

  render () {
    return (
      <Header style={{background: '#fff', height: 58}}>
        <Icon
          className="trigger"
          type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={this.props.toggle}
        />
        <Menu mode='horizontal' className='logout' onClick={this.clear}>
          <SubMenu title={<span><Icon type="user" />{ this.state.username }</span>}>
            <Menu.Item key='out'>
              <Link to='/login'>退出</Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
        <Icon
          className="screenFull"
          type="arrows-alt"
          onClick={this.screenFull}
        />
      </Header>
    )
  }
}

export default Headers
//布局主页
import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Icon, Switch, Layout } from 'antd'
import { menus } from 'utils/menu'
import Headers from './header'
import Content from './content'
import Bottom from './bottom'
import './index.less'

class Layouts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'dark',
      current: 'index',
      collapsed: false,
      mode: 'inline'
    }
  }

  componentDidMount() {
    this.handleClick([], 'index')
  }

  //改变主题
  changeTheme = (value) => {
    this.setState({
      theme: value ? 'dark' : 'light',
    })
  }

  //菜单折叠
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
      mode: this.state.collapsed ? 'inline' : 'vertical',
    })
  }

  //退出登录
  logout = () => {
    this.setState({
      current: 'index',
    })
  }

  handleClick = (e, special) => {
    this.setState({
      current: e.key || special,
    })
  }

  render() {
    return (
      <Layout className="containAll">
        <Layout.Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
          className="leftMenu"
        >
          {this.state.theme === 'light' ? <a href="https://github.com/sixcx/reactBackstage" target='_blank' rel='noopener noreferrer'><Icon type="github" className="github" /></a> :
            <a href="https://github.com/sixcx/reactBackstage" target='_blank' rel='noopener noreferrer'><Icon type="github" className="github white" /></a> }
          { this.state.theme === 'light' ? <span className="author">pbh</span> : <span className="author white">pbh</span> }
          <Menu
            theme={this.state.theme}
            onClick={this.handleClick}
            defaultOpenKeys={['']}
            selectedKeys={[this.state.current]}
            className="menu"
            mode={this.state.mode}
          >
            {
              menus.map((subMenu) => {
                if (subMenu.children && subMenu.children.length) {
                  return (
                    <Menu.SubMenu key={subMenu.url} title={<span><Icon type={subMenu.icon} /><span>{subMenu.name}</span></span>}>
                      {subMenu.children.map(menu => (
                        <Menu.Item key={menu.url}><Link to={`/${menu.url}`}>{menu.name}</Link></Menu.Item>
                      ))}
                    </Menu.SubMenu>
                  )
                }
                return (
                  <Menu.Item key={subMenu.url}>
                    <Link to={`/${subMenu.url}`}>
                      <Icon type={subMenu.icon} /><span className="nav-text">{subMenu.name}</span>
                    </Link>
                  </Menu.Item>
                )
              })
            }
          </Menu>
          <div className="switch">
            <Switch
              checked={this.state.theme === 'dark'}
              onChange={this.changeTheme}
              checkedChildren="Dark"
              unCheckedChildren="Light"
            />
          </div>
        </Layout.Sider>
        <Layout>
          <Headers toggle={this.toggle} collapsed={this.state.collapsed} logout={this.logout} />
          <Content />
          <Bottom />
        </Layout>
      </Layout>
    )
  }
}

export default Layouts
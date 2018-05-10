//按钮组件

import React from 'react'
import { Button, Row, Col, Radio, Icon, Dropdown, Menu } from 'antd'
import './index.less'
import { DropdownButtonProps } from 'antd/lib/dropdown';

const menu = (
  <Menu>
    <Menu.Item key="1">1st item</Menu.Item>
    <Menu.Item key="2">2nd item</Menu.Item>
    <Menu.Item key="3">3rd item</Menu.Item>
  </Menu>
);

class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 'default',
      loading: false,
      iconLoading: false,
      delayLoading: false
    }
  }

  handleSizeChange = (e) => {
    this.setState({ size: e.target.value });
  }

  enterLoading = () => {
    this.setState({ loading: true });
  }

  enterIconLoading = () => {
    this.setState({ iconLoading: true });
  }

  delayLoading = () => {
    this.setState({
      delayLoading: true,
    });

    setTimeout(() => this.setState({
      delayLoading: false,
    }), 150);
  }

  render () {
    const ButtonGroup = Button.Group;
    const size = this.state.size;
    return (
      <div>
        <Row gutter={24}>
          <Col span={12} className="row">
            <div className='col'>
              <Button style={{marginLeft: 15}} type="primary">Primary</Button>
              <Button style={{marginLeft: 15}}>Default</Button>
              <Button style={{marginLeft: 15}} type="dashed">Dashed</Button>
              <Button style={{marginLeft: 15}} type="danger">Danger</Button>
            </div>
          </Col>
          <Col span={12} className="row">
            <div className='col'>
              <Button style={{marginLeft: 15}} type="primary" shape="circle" icon="search" />
              <Button style={{marginLeft: 15}} type="primary" icon="search">Search</Button>
              <Button style={{marginLeft: 15}} shape="circle" icon="search" />
              <Button style={{marginLeft: 15}} icon="search">Search</Button>
              <br />
              <Button style={{marginLeft: 15, marginTop:20}} shape="circle" icon="search" />
              <Button style={{marginLeft: 15}} icon="search">Search</Button>
              <Button style={{marginLeft: 15}} type="dashed" shape="circle" icon="search" />
              <Button style={{marginLeft: 15}} type="dashed" icon="search">Search</Button>
            </div>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={12} className="row">
            <div className='col'>
              <Radio.Group value={size} onChange={this.handleSizeChange}>
                <Radio.Button value="large">Large</Radio.Button>
                <Radio.Button value="default">Default</Radio.Button>
                <Radio.Button value="small">Small</Radio.Button>
              </Radio.Group>
              <br /><br />
              <Button style={{marginLeft: 15}} type="primary" shape="circle" icon="download" size={size} />
              <Button style={{marginLeft: 15}} type="primary" icon="download" size={size}>Download</Button>
              <Button style={{marginLeft: 15}} type="primary" size={size}>Normal</Button>
              <br />
              <Button.Group size={size}>
                <Button style={{marginLeft: 15, marginTop:20}} type="primary">
                  <Icon type="left" />Backward
                </Button>
                <Button style={{marginLeft: 15}} type="primary">
                  Forward<Icon type="right" />
                </Button>
              </Button.Group>
            </div>
          </Col>
          <Col span={12} className="row">
            <div className='col'>
              <Button style={{marginLeft: 15}} type="primary">Primary</Button>
              <Button style={{marginLeft: 15}} type="primary" disabled>Primary(disabled)</Button>
              <br />
              <Button style={{marginLeft: 15, marginTop:20}}>Default</Button>
              <Button style={{marginLeft: 15}} disabled>Default(disabled)</Button>
              <br />
              <Button style={{marginLeft: 15, marginTop:20}}>Ghost</Button>
              <Button style={{marginLeft: 15}} disabled>Ghost(disabled)</Button>
              <br />
              <Button type="dashed" style={{marginLeft: 15, marginTop:20}}>Dashed</Button>
              <Button style={{marginLeft: 15}} type="dashed" disabled>Dashed(disabled)</Button>
            </div>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={12} className="row">
            <div className='col'>
              <Button className='marl' type="primary" loading>
                Loading
              </Button>
              <Button className='marl' type="primary" size="small" loading>
                Loading
              </Button>
              <br />
              <Button className='marlt' type="primary" loading={this.state.loading} onClick={this.enterLoading}>
                Click me!
              </Button>
              <Button className='marl' type="primary" icon="poweroff" loading={this.state.iconLoading} onClick={this.enterIconLoading}>
                Click me!
              </Button>
              <Button className='marl' type="primary" loading={this.state.delayLoading} onClick={this.delayLoading}>
                Won&apos;t show loading
              </Button>
              <br />
              <Button className='marlt' shape="circle" loading />
              <Button className='marl' type="primary" shape="circle" loading />
            </div>
          </Col>
          <Col span={12} className="row">
            <div className='col'>
              <Button className='marl' type="primary">primary</Button>
              <Button className='marl'>secondary</Button>
              <Dropdown overlay={menu}>
                <Button className='marl'>
                  more <Icon type="down" />
                </Button>
              </Dropdown>
            </div>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={12} className="row">
            <div className='col'>
              <ButtonGroup>
                <Button className='marl'>Cancel</Button>
                <Button type="primary">OK</Button>
              </ButtonGroup>
              <ButtonGroup>
                <Button className='marl' disabled>L</Button>
                <Button disabled>M</Button>
                <Button disabled>R</Button>
              </ButtonGroup>
              <ButtonGroup>
                <Button className='marl' type="primary">L</Button>
                <Button>M</Button>
                <Button>M</Button>
                <Button type="dashed">R</Button>
              </ButtonGroup>

              <ButtonGroup>
                <Button className='marlt' type="primary">
                  <Icon type="left" />Go back
                </Button>
                <Button type="primary">
                  Go forward<Icon type="right" />
                </Button>
              </ButtonGroup>
              <ButtonGroup>
                <Button className='marl' type="primary" icon="cloud" />
                <Button type="primary" icon="cloud-download" />
              </ButtonGroup>
            </div>
          </Col>
          <Col span={12} className="row">
            <div className='col' style={{ background: 'rgb(190, 200, 200)', padding: '26px 16px 16px' }}>
              <Button type="primary" ghost>Primary</Button>
              <Button ghost>Default</Button>
              <Button type="dashed" ghost>Dashed</Button>
              <Button type="danger" ghost>danger</Button>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Buttons
//标签页
import React from 'react'
import { Tabs, Row, Col, Card, Icon, Button, Select } from 'antd'

import './index.less'

const TabPane = Tabs.TabPane;
const Option = Select.Option;

class Tab extends React.Component {
  constructor (props) {
    super(props);
    this.newTabIndex = 0;
    const panes = [
      { title: 'Tab 1', content: 'Content of Tab 1', key: '1', closable: false },
      { title: 'Tab 2', content: 'Content of Tab 2', key: '2' },
    ];
    this.state = {
      tabPosition: 'top',
      activeKey: panes[0].key,
      panes
    };
  }

  onChange = (activeKey) => {
    this.setState({ activeKey });
  }

  onEdit = (targetKey, action) => {
    this[action](targetKey);
  }

  changeTabPosition = (tabPosition) => {
    this.setState({ tabPosition });
  }

  add = () => {
    const panes = this.state.panes;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({ title:`New Tab${this.newTabIndex}`, content: 'Content of new Tab', key: activeKey });
    this.setState({ panes, activeKey });
  }

  remove = (targetKey) => {
    let activeKey = this.state.activeKey;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (lastIndex >= 0 && activeKey === targetKey) {
      activeKey = panes[lastIndex].key;
    }
    this.setState({ panes, activeKey });
  }

  render () {
    return (
      <div>
        <Row gutter={24}>
          <Col span={12} className="row">
            <Card title="基本标签页" bordered={false}>
              <Tabs defaultActiveKey="1">
                <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
                <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
                <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
              </Tabs>
            </Card>
          </Col>
          <Col span={12} className="row">
            <Card title="禁用" bordered={false}>
              <Tabs defaultActiveKey="1">
                <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
                <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
                <TabPane tab="Tab 3" key="3" disabled>Content of Tab Pane 3</TabPane>
              </Tabs>
            </Card>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={12} className="row">
            <Card title="带图标" bordered={false}>
              <Tabs defaultActiveKey="2">
                <TabPane tab={<span><Icon type="apple" />apple</span>} key="1">
                  Tab 1
                </TabPane>
                <TabPane tab={<span><Icon type="android" />android</span>} key="2">
                  Tab 2
                </TabPane>
              </Tabs>
            </Card>
          </Col>
          <Col span={12} className="row">
            <Card title="可滑动" bordered={false}>
              <Tabs defaultActiveKey="1">
                <TabPane tab="Tab 1" key="1">Content of tab 1</TabPane>
                <TabPane tab="Tab 2" key="2">Content of tab 2</TabPane>
                <TabPane tab="Tab 3" key="3">Content of tab 3</TabPane>
                <TabPane tab="Tab 4" key="4">Content of tab 4</TabPane>
                <TabPane tab="Tab 5" key="5">Content of tab 5</TabPane>
                <TabPane tab="Tab 6" key="6">Content of tab 6</TabPane>
                <TabPane tab="Tab 7" key="7">Content of tab 7</TabPane>
                <TabPane tab="Tab 8" key="8">Content of tab 8</TabPane>
                <TabPane tab="Tab 9" key="9">Content of tab 9</TabPane>
              </Tabs>
            </Card>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={12} className="row">
            <Card title="附加内容" bordered={false}>
              <Tabs tabBarExtraContent={<Button>other</Button>}>
                <TabPane tab="Tab 1" key="1">Content of tab 1</TabPane>
                <TabPane tab="Tab 2" key="2">Content of tab 2</TabPane>
                <TabPane tab="Tab 3" key="3">Content of tab 3</TabPane>
              </Tabs>
            </Card>
          </Col>
          <Col span={12} className="row">
            <Card title="size" bordered={false}>
              <Tabs defaultActiveKey="3" size="small">
                <TabPane tab="Tab 1" key="1">Content of tab 1</TabPane>
                <TabPane tab="Tab 2" key="2">Content of tab 2</TabPane>
                <TabPane tab="Tab 3" key="3">Content of tab 3</TabPane>
              </Tabs>
            </Card>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={12} className="row">
            <Card title="位置" bordered={false}>
              <div style={{ marginBottom: 16 }}>
                Tab position：
                <Select value={this.state.tabPosition} onChange={this.changeTabPosition}
                  dropdownMatchSelectWidth={false}
                >
                  <Option value="top">top</Option>
                  <Option value="bottom">bottom</Option>
                  <Option value="left">left</Option>
                  <Option value="right">right</Option>
                </Select>
              </div>
              <Tabs tabPosition={this.state.tabPosition}>
                <TabPane tab="Tab 1" key="1">Content of Tab 1</TabPane>
                <TabPane tab="Tab 2" key="2">Content of Tab 2</TabPane>
                <TabPane tab="Tab 3" key="3">Content of Tab 3</TabPane>
              </Tabs>
            </Card>
          </Col>
          <Col span={12} className="row">
            <Card title="卡片式" bordered={false}>
              <Tabs defaultActiveKey="3" type="card">
                <TabPane tab="Tab 1" key="1">Content of tab 1</TabPane>
                <TabPane tab="Tab 2" key="2">Content of tab 2</TabPane>
                <TabPane tab="Tab 3" key="3">Content of tab 3</TabPane>
              </Tabs>
            </Card>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={12} className="row">
            <Card title="新增和关闭" bordered={false}>
              <Tabs
                onChange={this.onChange}
                activeKey={this.state.activeKey}
                type="editable-card"
                onEdit={this.onEdit}
              >
                {this.state.panes.map(pane => <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>{pane.content}</TabPane>)}
              </Tabs>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Tab
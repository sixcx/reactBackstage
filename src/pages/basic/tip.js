//提示
import React from 'react'
import { Row, Col, Alert, Card, Tooltip, message, Button, notification, Icon, Select, Popconfirm } from 'antd'

import './index.less'

const { Option } = Select;
const options = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'];

const success = () => {
  message.success('This is a message of success');
};

const error = () => {
  message.error('This is a message of error');
};

const warning = () => {
  message.warning('This is message of warning');
};

const info = () => {
  message.info('This is a normal message');
};

const successd = () => {
  message.success('This is a prompt message for success, and it will disappear in 5 seconds', 5);
};

const loading = () => {
  const hide = message.loading('Action in progress..', 0);
  setTimeout(hide, 2500);
};

const openNotificationWithIcon = (type) => {
  notification[type]({
    message: 'Notification Title',
    description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
  });
};

const openNotificationWithMyIcon = () => {
  notification.open({
    message: 'Notification Title',
    description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    icon: <Icon type="smile-circle" style={{ color: '#108ee9' }} />,
  });
};

const openNotification = () => {
  notification.open({
    message: 'Notification Title',
    description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
  });
};

class TipNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render () {
    const text = <span>prompt text</span>;
    return (
      <div>
        <Row gutter={24}>
          <Col span={24} className="row">
            <Card title="警告提示" bordered={false}>
              <Alert message="Success Tips" type="success" showIcon closable/>
              <Alert className='alert' message="Informational Notes" type="info" showIcon />
              <Alert className='alert' message="Warning" type="warning" showIcon closable/>
              <Alert className='alert' message="Error" type="error" showIcon />
              <Alert
                className='alert' 
                message="success tips"
                description="Detailed description and advices about successful copywriting."
                type="success"
                showIcon
                closable
              />
              <Alert
                className='alert'
                message="Informational Notes"
                description="Additional description and informations about copywriting."
                type="info"
                showIcon
              />
              <Alert
                className='alert'
                message="Warning"
                description="This is a warning notice about copywriting."
                type="warning"
                showIcon
                closable
              />
              <Alert
                className='alert'
                message="Error"
                description="This is an error message about copywriting."
                type="error"
                showIcon
              />
            </Card>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={24} className="row">
            <Card title="文字提示" bordered={false}>
              <div style={{ marginLeft: 60 }}>
                <Tooltip placement="topLeft" title={text}>
                  <a>TL</a>
                </Tooltip>
                <Tooltip placement="top" title={text}>
                  <a className='marl'>Top</a>
                </Tooltip>
                <Tooltip placement="topRight" title={text}>
                  <a className='marl'>TR</a>
                </Tooltip>
                <Tooltip placement="leftTop" title={text}>
                  <a className='marl'>LT</a>
                </Tooltip>
                <Tooltip placement="left" title={text}>
                  <a className='marl'>Left</a>
                </Tooltip>
                <Tooltip placement="leftBottom" title={text}>
                  <a className='marl'>LB</a>
                </Tooltip>
                <Tooltip placement="rightTop" title={text}>
                  <a className='marl'>RT</a>
                </Tooltip>
                <Tooltip placement="right" title={text}>
                  <a className='marl'>Right</a>
                </Tooltip>
                <Tooltip placement="rightBottom" title={text}>
                  <a className='marl'>RB</a>
                </Tooltip>
                <Tooltip placement="bottomLeft" title={text}>
                  <a className='marl'>BL</a>
                </Tooltip>
                <Tooltip placement="bottom" title={text}>
                  <a className='marl'>Bottom</a>
                </Tooltip>
                <Tooltip placement="bottomRight" title={text}>
                  <a className='marl'>BR</a>
                </Tooltip>
              </div>
            </Card>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={24} className="row">
            <Card title="全局提示" bordered={false}>
              <Button onClick={success}>Success</Button>
              <Button onClick={error} className='marl'>Error</Button>
              <Button onClick={warning} className='marl'>Warning</Button>
              <Button onClick={info} className='marl'>info</Button>
              <Button onClick={successd} className='marl'>success duration</Button>
              <Button onClick={loading} className='marl'>loading</Button>
            </Card>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={24} className="row">
            <Card title="通知提醒框" bordered={false}>
              <Button onClick={() => openNotificationWithIcon('success')}>Success</Button>
              <Button onClick={() => openNotificationWithIcon('info')} className='marl'>Info</Button>
              <Button onClick={() => openNotificationWithIcon('warning')} className='marl'>Warning</Button>
              <Button onClick={() => openNotificationWithIcon('error')} className='marl'>Error</Button>
              <Button onClick={() => openNotificationWithMyIcon()} className='marl'>自定义icon</Button>
              <div style={{marginTop: 20}}>
                <Select
                  defaultValue="topRight"
                  style={{ width: 120, marginRight: 10 }}
                  onChange={(val) => {
                    notification.config({
                      placement: val,
                    });
                  }}
                >
                  {options.map(val => <Option key={val} value={val}>{val}</Option>)}
                </Select>
                <Button
                  type="primary"
                  onClick={openNotification}
                >
                  Open the notification box
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={24} className="row">
            <Card title="气泡确认框" bordered={false}>
              <div style={{ whiteSpace: 'nowrap' }}>
                <Popconfirm placement="topLeft" title={text} okText="Yes" cancelText="No">
                  <Button className='marl'>TL</Button>
                </Popconfirm>
                <Popconfirm placement="top" title={text} okText="Yes" cancelText="No">
                  <Button className='marl'>Top</Button>
                </Popconfirm>
                <Popconfirm placement="topRight" title={text} okText="Yes" cancelText="No">
                  <Button className='marl'>TR</Button>
                </Popconfirm>
                <Popconfirm placement="leftTop" title={text} okText="Yes" cancelText="No">
                  <Button className='marl'>LT</Button>
                </Popconfirm>
                <Popconfirm placement="left" title={text} okText="Yes" cancelText="No">
                  <Button className='marl'>Left</Button>
                </Popconfirm>
                <Popconfirm placement="leftBottom" title={text} okText="Yes" cancelText="No">
                  <Button className='marl'>LB</Button>
                </Popconfirm>
                <Popconfirm placement="rightTop" title={text} okText="Yes" cancelText="No">
                  <Button className='marl'>RT</Button>
                </Popconfirm>
                <Popconfirm placement="right" title={text} okText="Yes" cancelText="No">
                  <Button className='marl'>Right</Button>
                </Popconfirm>
                <Popconfirm placement="rightBottom" title={text} okText="Yes" cancelText="No">
                  <Button className='marl'>RB</Button>
                </Popconfirm>
                <Popconfirm placement="bottomLeft" title={text} okText="Yes" cancelText="No">
                  <Button className='marl'>BL</Button>
                </Popconfirm>
                <Popconfirm placement="bottom" title={text} okText="Yes" cancelText="No">
                  <Button className='marl'>Bottom</Button>
                </Popconfirm>
                <Popconfirm placement="bottomRight" title={text} okText="Yes" cancelText="No">
                  <Button className='marl'>BR</Button>
                </Popconfirm>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default TipNote
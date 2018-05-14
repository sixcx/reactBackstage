//模态框
import React from 'react'
import { Row, Col, Card, Modal, Button } from 'antd'

import './index.less'

class Modals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visiblea: false,
      ModalText: 'Content of the modal dialog',
      visibleb: false,
      loading: false,
      visiblec: false
    }
  }

  showModala = () => {
    this.setState({
      visiblea: true
    });
  }

  handleOka = (e) => {
    this.setState({
      visiblea: false
    });
  }

  handleCancela = (e) => {
    this.setState({
      visiblea: false
    });
  }

  showModalb = () => {
    this.setState({
      visibleb: true
    });
  }

  handleOkb = () => {
    this.setState({
      ModalText: 'The modal dialog will be closed after two seconds',
      confirmLoading: true
    });
    setTimeout(() => {
      this.setState({
        visibleb: false,
        confirmLoading: false
      });
    }, 2000);
  }

  handleCancelb = () => {
    this.setState({
      visibleb: false
    });
  }

  showModalc = () => {
    this.setState({
      visiblec: true,
    });
  }

  handleOkc = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visiblec: false });
    }, 3000);
  }

  handleCancelc = () => {
    this.setState({ visiblec: false });
  }

  showConfirm = () => {
    Modal.confirm({
      title: 'Want to delete these items?',
      content: 'some descriptions',
      onOk() {
        // console.log('OK');
      },
      onCancel() {
        // console.log('Cancel');
      },
    });
  }
 
  //info
  info = () => {
    Modal.info({
      title: 'This is a notification message',
      content: (
        <div>
          <p>some messages...some messages...</p>
          <p>some messages...some messages...</p>
        </div>
      ),
      onOk() {},
    });
  }

  success = () => {
    Modal.success({
      title: 'This is a success message',
      content: 'some messages...some messages...',
    });
  }
  
  error = () => {
    Modal.error({
      title: 'This is an error message',
      content: 'some messages...some messages...',
    });
  }
  
  warning = () => {
    Modal.warning({
      title: 'This is a warning message',
      content: 'some messages...some messages...',
    });
  }
  

  render () {
    return (
      <div>
        <Row gutter={24}>
          <Col span={12} className="row">
            <Card title="基本对话框" bordered={false}>
              <div>
                <Button type="primary" onClick={this.showModala} style={{fontSize: 12}}>打开对话框</Button>
                <Modal title="基本对话框" visible={this.state.visiblea}
                  onOk={this.handleOka} onCancel={this.handleCancela}
                >
                  <p>some contents...</p>
                  <p>some contents...</p>
                  <p>some contents...</p>
                </Modal>
              </div>
            </Card>
          </Col>
          <Col span={12} className="row">
            <Card title="异步对话框" bordered={false}>
              <div>
                <Button type="primary" onClick={this.showModalb} style={{fontSize: 12}}>打开对话框</Button>
                <Modal title="异步对话框"
                  visible={this.state.visibleb}
                  onOk={this.handleOkb}
                  confirmLoading={this.state.confirmLoading}
                  onCancel={this.handleCancelb}
                >
                  <p>{this.state.ModalText}</p>
                </Modal>
              </div>
            </Card>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={12} className="row">
            <Card title="自定义footer" bordered={false}>
              <div>
                <Button type="primary" onClick={this.showModalc} style={{fontSize: 12}}>
                  打开对话框
                </Button>
                <Modal
                  visible={this.state.visiblec}
                  title="自定义页脚"
                  onOk={this.handleOkc}
                  onCancel={this.handleCancelc}
                  footer={[
                    <Button key="back" size="large" onClick={this.handleCancelc}>返回</Button>,
                    <Button key="submit" type="primary" size="large" loading={this.state.loading} onClick={this.handleOkc}>
                      提交
                    </Button>,
                  ]}
                >
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                </Modal>
              </div>
            </Card>
          </Col>
          <Col span={12} className="row">
            <Card title="确认对话框" bordered={false}>
              <div>
                <Button onClick={this.showConfirm}>
                  confirmation modal dialog
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={12} className="row">
            <Card title="信息提示框" bordered={false}>
              <Button onClick={this.info}>Info</Button>
              <Button onClick={this.success}>Success</Button>
              <Button onClick={this.error}>Error</Button>
              <Button onClick={this.warning}>Warning</Button>
            </Card>   
          </Col>
        </Row>
      </div>
    )
  }
}

export default Modals
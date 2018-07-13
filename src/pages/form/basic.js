//基本表单
import React from 'react'
import { Form, Input, Button, Icon, Tooltip, Select, Row, Col, Checkbox, Cascader, DatePicker, TimePicker, Modal, Radio } from 'antd'

import './index.less'

const FormItem = Form.Item;
const Option = Select.Option;
const MonthPicker = DatePicker.MonthPicker;
const RangePicker = DatePicker.RangePicker;

const residences = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
    }],
  }],
}];

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class BasicForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmDirty: false,
      visible: false
    }
  }

  componentDidMount () {
    // this.props.form.validateFields();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  handleSubmitm = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, fieldsValue) => {
      if (err) {
        return;
      }
      // Should format date value before submit.
      const rangeValue = fieldsValue['range-picker'];
      const rangeTimeValue = fieldsValue['range-time-picker'];
      const values = {
        ...fieldsValue,
        'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD'),
        'date-time-picker': fieldsValue['date-time-picker'].format('YYYY-MM-DD HH:mm:ss'),
        'month-picker': fieldsValue['month-picker'].format('YYYY-MM'),
        'range-picker': [rangeValue[0].format('YYYY-MM-DD'), rangeValue[1].format('YYYY-MM-DD')],
        'range-time-picker': [
          rangeTimeValue[0].format('YYYY-MM-DD HH:mm:ss'),
          rangeTimeValue[1].format('YYYY-MM-DD HH:mm:ss'),
        ],
        'time-picker': fieldsValue['time-picker'].format('HH:mm:ss'),
      };
      // console.log('Received values of form: ', values);
    });
  }

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  checkPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }

  checkConfirm = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }

  showModal = () => {
    this.setState({ visible: true });
  }
  
  handleCancel = () => {
    this.setState({ visible: false });
  }

  handleCreate = () => {
    this.props.form.validateFields((err, values) => {
      if (err) {
        return;
      }
      // console.log('Received values of form: ', values);
      this.props.form.resetFields();
      this.setState({ visible: false });
    });
  }

  render () {
    const { getFieldDecorator, isFieldTouched, getFieldError, getFieldsError } = this.props.form;
    const userNameError = isFieldTouched('userName') && getFieldError('userName');
    const passwordError = isFieldTouched('password') && getFieldError('password');
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 14,
          offset: 8,
        },
      },
    };
    const tailFormItemLayout1 = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 14,
          offset: 5,
        },
      },
    };
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select className="icp-selector">
        <Option value="86">+86</Option>
      </Select>
    );
    const config = {
      rules: [{ type: 'object', required: true, message: 'Please select time!' }],
    };
    const rangeConfig = {
      rules: [{ type: 'array', required: true, message: 'Please select time!' }],
    };
    return (
      <div>
        <Row gutter={24}>
          <Col span={12} md={12} className='coll'>
            <Form className='form' onSubmit={this.handleSubmit}>
              <FormItem {...tailFormItemLayout1}>
                {
                  getFieldDecorator('userName', {
                    rules: [{required: true, message: 'Please input your username!'}]
                  })
                  (
                    <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
                  )
                }
              </FormItem>
              <FormItem {...tailFormItemLayout1}>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                  <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
                )}
              </FormItem>
              <FormItem {...tailFormItemLayout1}>
                {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true,
                })(
                  <Checkbox>Remember me</Checkbox>
                )}
                <a className="login-form-forgot">Forgot password</a>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  Log in
                </Button>
                Or <a>register now!</a>
              </FormItem>
            </Form>
          </Col>
          <Col span={12} md={12} className='coll'>
            <Form className='form' style={{paddingLeft: 10}} layout="inline" onSubmit={this.handleSubmit}>
              <FormItem
                validateStatus={userNameError ? 'error' : ''}
                help={userNameError || ''}
              >
                {getFieldDecorator('userName', {
                  rules: [{ required: true, message: 'Please input your username!' }],
                })(
                  <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
                )}
              </FormItem>
              <FormItem
                validateStatus={passwordError ? 'error' : ''}
                help={passwordError || ''}
              >
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                  <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
                )}
              </FormItem>
              <FormItem>
                <Button
                  type="primary"
                  htmlType="submit"
                  disabled={hasErrors(getFieldsError())}
                >
                  Log in
                </Button>
              </FormItem>
              <Button style={{marginTop: 5}} type="primary" onClick={this.showModal}>New Collection</Button>
            </Form>
            <Modal
              visible={this.state.visible}
              title="Create a new collection"
              okText="Create"
              onCancel={this.handleCancel}
              onOk={this.handleCreate}
            >
              <Form layout="vertical">
                <FormItem label="Title">
                  {getFieldDecorator('title', {
                    rules: [{ required: true, message: 'Please input the title of collection!' }],
                  })(
                    <Input />
                  )}
                </FormItem>
                <FormItem label="Description">
                  {getFieldDecorator('description')(<Input type="textarea" />)}
                </FormItem>
                <FormItem className="collection-create-form_last-form-item">
                  {getFieldDecorator('modifier', {
                    initialValue: 'public',
                  })(
                    <Radio.Group>
                      <Radio value="public">Public</Radio>
                      <Radio value="private">Private</Radio>
                    </Radio.Group>
                  )}
                </FormItem>
              </Form>
            </Modal>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={12} md={12} className='coll'>
            <Form onSubmit={this.handleSubmit} className='form'>
              <FormItem
                {...formItemLayout}
                label='E-mail'
                hasFeedback
              >
                {
                  getFieldDecorator('email', {
                    rules: [{
                      type: 'email',
                      message: 'this input is not valid email'
                    }, {
                      required: true, message: 'please input email'
                    }]
                  })
                  (
                    <Input />
                  )
                }
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="Password"
                hasFeedback
              >
                {getFieldDecorator('password', {
                  rules: [{
                    required: true, message: 'Please input your password!',
                  }, {
                    validator: this.checkConfirm,
                  }],
                })(
                  <Input type="password" />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="Confirm Password"
                hasFeedback
              >
                {getFieldDecorator('confirm', {
                  rules: [{
                    required: true, message: 'Please confirm your password!',
                  }, {
                    validator: this.checkPassword,
                  }],
                })(
                  <Input type="password" onBlur={this.handleConfirmBlur} />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label={(
                  <span>
                    Nickname&nbsp;
                    <Tooltip title="What do you want other to call you?">
                      <Icon type="question-circle-o" />
                    </Tooltip>
                  </span>
                )}
                hasFeedback
              >
                {getFieldDecorator('nickname', {
                  rules: [{ required: true, message: 'Please input your nickname!' }],
                })(
                  <Input />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="Habitual Residence"
              >
                {getFieldDecorator('residence', {
                  initialValue: ['zhejiang', 'hangzhou', 'xihu'],
                  rules: [{ type: 'array', required: true, message: 'Please select your habitual residence!' }],
                })(
                  <Cascader options={residences} />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="Phone Number"
              >
                {getFieldDecorator('phone', {
                  rules: [{ required: true, message: 'Please input your phone number!' }],
                })(
                  <Input addonBefore={prefixSelector} />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="Captcha"
                extra="We must make sure that your are a human."
              >
                <Row gutter={8}>
                  <Col span={12}>
                    {getFieldDecorator('captcha', {
                      rules: [{ required: true, message: 'Please input the captcha you got!' }],
                    })(
                      <Input size="large" />
                    )}
                  </Col>
                  <Col span={12}>
                    <Button size="large">Get captcha</Button>
                  </Col>
                </Row>
              </FormItem>
              <FormItem {...tailFormItemLayout} style={{ marginBottom: 8 }}>
                {getFieldDecorator('agreement', {
                  valuePropName: 'checked',
                })(
                  <Checkbox>I have read the <a>agreement</a></Checkbox>
                )}
              </FormItem>
              <FormItem {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit" size="large">Register</Button>
              </FormItem>
            </Form>
          </Col>
          <Col span={12} md={12} className='coll'>
            <Form className='form' onSubmit={this.handleSubmitm}>
              <FormItem
                {...formItemLayout}
                label='DatePicker'
              >
                {
                  getFieldDecorator('date-picker', config)
                  (
                    <DatePicker />
                  )
                }
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="DatePicker[showTime]"
              >
                {getFieldDecorator('date-time-picker', config)(
                  <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="MonthPicker"
              >
                {getFieldDecorator('month-picker', config)(
                  <MonthPicker />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="RangePicker"
              >
                {getFieldDecorator('range-picker', rangeConfig)(
                  <RangePicker />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="RangePicker[showTime]"
              >
                {getFieldDecorator('range-time-picker', rangeConfig)(
                  <RangePicker showTime format="YYYY-MM-DD HH:mm:ss" />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="TimePicker"
              >
                {getFieldDecorator('time-picker', config)(
                  <TimePicker />
                )}
              </FormItem>
              <FormItem
                wrapperCol={{
                  xs: { span: 24, offset: 0 },
                  sm: { span: 16, offset: 8 },
                }}
              >
                <Button type="primary" htmlType="submit" size="large">Submit</Button>
              </FormItem>
            </Form>
          </Col>
        </Row>
      </div>
    )
  }
}

const WrapperBasicForm = Form.create()(BasicForm)

export default WrapperBasicForm
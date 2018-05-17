//其它表单
import React from 'react'
import { Form, Input, Button, Icon, Switch, Select, Row, Col, Checkbox, InputNumber, Upload, Slider, Modal, Radio } from 'antd'

import './index.less'

const FormItem = Form.Item;
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

class OtherForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {

    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // console.log('Received values of form: ', values);
      }
    });
  }

  handleSelectChange = (value) => {
    // console.log(value);
    this.props.form.setFieldsValue({
      note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
    });
  }

  normFile = (e) => {
    // console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  }

  render () {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
      },
    };
    return (
      <div>
        <Row gutter={24}>
          <Col span={12} md={12} className='coll'>
            <Form className='form'>
              <FormItem
                {...formItemLayout}
                label="Fail"
                validateStatus="error"
                help="Should be combination of numbers & alphabets"
              >
                <Input placeholder="unavailable choice" id="error" />
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="Warning"
                validateStatus="warning"
              >
                <Input placeholder="Warning" id="warning" />
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="Validating"
                hasFeedback
                validateStatus="validating"
                help="The information is being validated..."
              >
                <Input placeholder="validated" id="validating" />
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="Success"
                hasFeedback
                validateStatus="success"
              >
                <Input placeholder="I'm the success" id="success" />
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="Warning"
                hasFeedback
                validateStatus="warning"
              >
                <Input placeholder="Warning" id="warning" />
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="Failed"
                hasFeedback
                validateStatus="error"
                help="Should be combination of numbers & alphabets"
              >
                <Input placeholder="unavailable" id="error" />
              </FormItem>
            </Form>
          </Col>
          <Col span={12} md={12} className='coll'>
            <Form className='form' onSubmit={this.handleSubmit}>
              <FormItem
                {...formItemLayout}
                label="Note"
              >
                {getFieldDecorator('note', {
                  rules: [{ required: true, message: 'Please input your note!' }],
                })(
                  <Input />
                )}
              </FormItem>
              <FormItem
                label="Gender"
                {...formItemLayout}
              >
                {getFieldDecorator('gender', {
                  rules: [{ required: true, message: 'Please select your gender!' }],
                  onChange: this.handleSelectChange,
                })(
                  <Select placeholder="Select a option and change input text above">
                    <Option value="male">male</Option>
                    <Option value="female">female</Option>
                  </Select>
                )}
              </FormItem>
              <FormItem
                wrapperCol={{ span: 8, offset: 8 }}
              >
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </FormItem>
            </Form>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={24} md={24} className='coll'>
            <Form className='form' onSubmit={this.handleSubmit}>
            <FormItem
                {...formItemLayout}
                label="Plain Text"
              >
                <span className="ant-form-text">hello world</span>
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="Select"
                hasFeedback
              >
                {getFieldDecorator('select', {
                  rules: [
                    { required: true, message: 'Please select your country!' },
                  ],
                })(
                  <Select placeholder="Please select a country">
                    <Option value="china">China</Option>
                    <Option value="use">U.S.A</Option>
                    <Option value="use">U.K</Option>
                  </Select>
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="Select[multiple]"
              >
                {getFieldDecorator('select-multiple', {
                  rules: [
                    { required: true, message: 'Please select your favourite colors!', type: 'array' },
                  ],
                })(
                  <Select placeholder="Please select favourite colors" multiple>
                    <Option value="red">Red</Option>
                    <Option value="green">Green</Option>
                    <Option value="blue">Blue</Option>
                  </Select>
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="InputNumber"
              >
                {getFieldDecorator('input-number', { initialValue: 3 })(
                  <InputNumber min={1} max={10} />
                )}
                <span className="ant-form-text"> machines</span>
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="Switch"
              >
                {getFieldDecorator('switch', { valuePropName: 'checked' })(
                  <Switch />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="Slider"
              >
                {getFieldDecorator('slider')(
                  <Slider marks={{ 0: 'A', 20: 'B', 40: 'C', 60: 'D', 80: 'E', 100: 'F' }} />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="Radio.Group"
              >
                {getFieldDecorator('radio-group')(
                  <RadioGroup>
                    <Radio value="a">item 1</Radio>
                    <Radio value="b">item 2</Radio>
                    <Radio value="c">item 3</Radio>
                  </RadioGroup>
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="Radio.Button"
              >
                {getFieldDecorator('radio-button')(
                  <RadioGroup>
                    <RadioButton value="a">item 1</RadioButton>
                    <RadioButton value="b">item 2</RadioButton>
                    <RadioButton value="c">item 3</RadioButton>
                  </RadioGroup>
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="Upload"
                extra="upup"
              >
                {getFieldDecorator('upload', {
                  valuePropName: 'fileList',
                  getValueFromEvent: this.normFile,
                })(
                  <Upload name="logo" action="/upload.do" listType="picture">
                    <Button>
                      <Icon type="upload" /> Click to upload
                    </Button>
                  </Upload>
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="Dragger"
              >
                <div className="dropbox">
                  {getFieldDecorator('dragger', {
                    valuePropName: 'fileList',
                    getValueFromEvent: this.normFile,
                  })(
                    <Upload.Dragger name="files" action="/upload.do">
                      <p className="ant-upload-drag-icon">
                        <Icon type="inbox" />
                      </p>
                      <p className="ant-upload-text">Click or drag file to this area to upload</p>
                      <p className="ant-upload-hint">Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>
                    </Upload.Dragger>
                  )}
                </div>
              </FormItem>
              <FormItem
                wrapperCol={{ span: 12, offset: 8 }}
              >
                <Button type="primary" htmlType="submit">Submit</Button>
              </FormItem>
            </Form>
          </Col>
        </Row>
      </div>
    )
  }
}

const WrapperOtherForm = Form.create()(OtherForm)

export default WrapperOtherForm
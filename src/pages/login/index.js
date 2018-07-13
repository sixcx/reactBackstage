import React from 'react'
import { Form, Input, Checkbox, Button, message, Icon } from 'antd'
import createHistory from 'history/createHashHistory'
import './index.less'

const FormItem = Form.Item;
const history = createHistory();

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
    let name = this.props.form.getFieldsValue().userName;
    let pass = this.props.form.getFieldsValue().password;
    if (name === 'admin' && pass === '123456') {
      // 表单的路由处理
      history.push('/app/index');
    } else {
      message.info('用户名或密码错误');
    }
  }

  render () {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className='login'>
        <div className='loginForm'>
          <div className='logo'>
            <h1>react</h1>
          </div>
          <div className="loginWrap">
            <Form className='form' onSubmit={this.handleSubmit}>
              <FormItem>
                {
                  getFieldDecorator('userName', {
                    rules: [{required: true, message: 'Please input your username!'}]
                  })
                  (
                    <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username: admin" />
                  )
                }
              </FormItem>
              <FormItem>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                  <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password: 123456" />
                )}
              </FormItem>
              <FormItem>
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
                {/* Or <a>register now!</a> */}
              </FormItem>
            </Form>
          </div>
        </div>
      </div>
    )
  }
}

let Loging = Form.create()(Login)
export default Loging
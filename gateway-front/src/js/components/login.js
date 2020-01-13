import * as React from 'react'
import '../../less/login.less'
import history from '../utils/history'
import {Row,Col,Button,Form,Icon,Input} from 'antd'

const FormItem = Form.Item

@Form.create()
class Login extends React.Component{

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        if (values.role === '0') {
          history.push('/agent/declarationAgent');
        } else if (values.role === '1') {
          history.push('/custom/declarationApproval');
        }
      }

    });

  };

  render () {
    const {getFieldDecorator} = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: {span: 24},
        sm: {span: 4},
      },
      wrapperCol: {
        xs: {span: 24},
        sm: {span: 18},
      },
    };
    return (
      <div className="login-form-wrapper">
        <div className="bg" />
        <div className="title">
          Awesome Gateway
        </div>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem
            className="login-form-account"
            label="账号"
            {...formItemLayout}
          >
            {getFieldDecorator('username', {
              rules: [{required: true, message: '请输入用户名'}],
            })(<Input prefix={<Icon type="user" />} placeholder="用户名" />)}
          </FormItem>
          <FormItem label="密码" {...formItemLayout}>
            {getFieldDecorator('password', {
              rules: [{required: true, message: '请输入密码'}],
            })(<Input prefix={<Icon type="lock" />} placeholder="密码" type="password" />)}
          </FormItem>
          <FormItem className="login-form-item">
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              登录
            </Button>
          </FormItem>
        </Form>
        <div className="foot">slh-NightBreeze</div>
      </div>
    )
  }
}
export default Login;
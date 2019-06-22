import React from 'react'
import styled from 'styled-components'
import { Button, Form, Icon } from 'antd'
import InputItem from '../../components/InputItem'

const Container = styled.div`
  min-height: 100vh;
  background-image: url('https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg');
  display: flex;
  align-items: center;
  justify-content: center;
`

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
`
const LoginForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.div`
  padding: 10px;
  font-size: 16px;
`

const LoginButton = styled(Button)`
  width: 300px;
`

const RememberWrapper = styled.div`
  width: 21%;
  display: flex;
  justify-content: space-between;
`

const ForgotPassWord = styled.a`
  margin-top: 9px;
`

function LoginPage ({ form, loginReq }) {
  const handleClick = () => {
    form.validateFields((err, values) => {
      if (err) {
        return
      }
      form.resetFields()
      loginReq({
        username: values.userName,
        password: values.password,
        rememberMe: values.rememberMe
      })
    })
  }

  return (
    <Container>
      <Wrapper>
        <Title>Sở Nội Vụ</Title>
        <LoginForm>
          <InputItem
            form={form}
            field='userName'
            placeholder='User name'
            prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
            style={{ width: '300px', marginBottom: '10px' }}
            rules={[
              { required: true, message: 'Vui lòng không để trống thẻ này' }
            ]}
          />
          <InputItem
            form={form}
            field='password'
            placeholder='Password'
            type='password'
            prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
            style={{ width: '300px', marginBottom: '10px' }}
            rules={[
              { required: true, message: 'Vui lòng không để trống thẻ này' }
            ]}
          />
          <RememberWrapper>
            <InputItem
              form={form}
              field='rememberMe'
              checkboxLabel='Remember me'
              type='checkbox'
            />
            <ForgotPassWord>Forgot Your Password?</ForgotPassWord>
          </RememberWrapper>
          <LoginButton type='primary' htmlType='button' onClick={handleClick}>
            Login
          </LoginButton>
        </LoginForm>
      </Wrapper>
    </Container>
  )
}

export default Form.create({ name: 'form' })(LoginPage)

import React, { useState } from 'react'
import styled from 'styled-components'
import { Button, Input, Form } from 'antd'

const Wrapper = styled.div`
  margin-top: 130px;
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

const LoginInput = styled(Input)`
  width: 300px !important;
  margin-bottom: 10px !important;
`

function LoginPage ({ loginReq }) {
  const [userName, setUserName] = useState('')
  const [userPassword, setUserPassword] = useState('')

  const handleClick = () => {
    loginReq({
      userName,
      userPassword,
      rememberMe: true
    })
  }

  return (
    <Wrapper>
      <Title>Sở Nội Vụ</Title>
      <LoginForm>
        <LoginInput
          placeholder='User Name'
          className='login-input'
          onChange={e => setUserName(e.target.value)}
        />
        <LoginInput
          placeholder='Password'
          type='password'
          className='login-input'
          onChange={e => setUserPassword(e.target.value)}
        />
        <LoginButton type='primary' htmlType='button' onClick={handleClick}>
          Login
        </LoginButton>
      </LoginForm>
    </Wrapper>
  )
}

export default LoginPage

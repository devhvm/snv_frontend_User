// import {connect} from 'react-redux'
// import LoginPage from './LoginPage'
// import {compose, lifecycle, mapProps} from 'recompose'
// import {
//
// } from '../../reducers/login'
//
// export default compose(
//   connect(
//     state => ({
//       login: state.login
//     }),
//     {
//
//     }
//   )
// )(LoginPage)

import React, { useState } from 'react'
import styled from 'styled-components'
import { Button, Input, Form } from 'antd'
import axios from 'axios'

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

function LoginPage (props) {
  const [userName, setUserName] = useState('')
  const [userPassword, setUserPassword] = useState('')

  const handleClick = () => {
    axios({
      url: 'http://vtools.xyz:9999/api/authenticate',
      method: 'POST',
      data: {
        username: userName,
        password: userPassword,
        rememberMe: true
      },
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    })
      .then(res => {
        localStorage.setItem('jwt_token', res.data.id_token)
        props.loginReq()
      })
      .catch(err => {
        alert('Sai username hay password, mời thử lại')
        console.log(err)
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

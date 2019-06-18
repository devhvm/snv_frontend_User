import axios from 'axios'
import { handleActions, createAction } from 'redux-actions'
import { rest } from '../utils/rest'

// Action
export const LOGIN_STATUS = 'LOGIN_STATUS'

// Action Creator
export const loginReq = item => dispatch => {
  return axios({
    url: 'http://vtools.xyz:9999/api/authenticate',
    data: {
      username: item.userName,
      password: item.userPassword,
      rememberMe: item.rememberMe
    },
    method: 'POST'
  })
    .then(res => {
      localStorage.setItem('jwt_token', res.data.id_token)
      localStorage.setItem('loginStatus', true)
      dispatch(userInfo())
    })
    .then(() => {
      dispatch(setLoginStatus(true))
      window.location.reload()
    })
    .catch(err => {
      console.log(err)
    })
}

export const logOutReq = () => dispatch => {
  // dispatch(setLoginStatus(false))
  localStorage.removeItem('jwt_token')
  localStorage.removeItem('loginStatus')
  window.location.reload()
}

export const userInfo = () => dispatch => {
  rest
    .get('/api/nguoiDung/admin')
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
}

export const setLoginStatus = status => dispatch => {
  return dispatch(getLoginStatus(status))
}

const getLoginStatus = createAction(LOGIN_STATUS)

// Initial State
const initialState = {
  loginStatus: false
}

// reducer
export default handleActions(
  {
    [LOGIN_STATUS]: (state, { payload }) => ({
      ...state,
      loginStatus: payload
    })
  },
  initialState
)

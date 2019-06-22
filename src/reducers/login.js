import { handleActions } from 'redux-actions'
import { rest } from '../utils/rest'

// Action

// Action Creator
export const loginReq = form => dispatch => {
  rest
    .post('http://vtools.xyz:9999/api/authenticate', form)
    .then(res => {
      localStorage.setItem('id_token', res.data.id_token)
      localStorage.setItem('loginStatus', true)
      dispatch(userInfo())
    })
    .then(() => {
      window.location.reload()
    })
    .catch(err => {
      alert('Sai username hay password, mời thử lại')
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

// Initial State
const initialState = {}

// reducer
export default handleActions({}, initialState)

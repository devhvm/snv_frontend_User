import axios from 'axios'
import { handleActions, createAction } from 'redux-actions'

// Action
export const LOGIN = 'LOGIN'

// Action Creator
export const login = () => {
  return dispatch => {
    axios({
      url: 'http://210.2.91.13:8771/api/authenticate',
      method: 'POST',
      data: {
        password: 'string',
        rememberMe: true,
        username: 'string'
      }
    })
      .then(res => {
        dispatch(loginRequest(res))
      })
      .catch(err => {
        console.log(err)
      })
  }
}

const loginRequest = createAction(LOGIN)

// Initial State
const initialState = {}

// reducer
export default handleActions(
  {
    [LOGIN]: (state, { payload }) => ({
      ...state,
      login: payload
    })
  },
  initialState
)

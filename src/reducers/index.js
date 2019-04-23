import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import login from './login'
import menu from './menu'
import phathanhmau from './phathanhmau'

export default history =>
  combineReducers({
    router: connectRouter(history),
    login,
    menu,
    phathanhmau
  })

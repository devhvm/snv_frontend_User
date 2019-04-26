import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import login from './login'
import menu from './menu'
import phatHanhMau from './phatHanhMau'

export default history =>
  combineReducers({
    router: connectRouter(history),
    login,
    menu,
    phatHanhMau
  })

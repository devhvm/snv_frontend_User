import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import login from './login'
import menu from './menu'
import mauphathanh from './mauphathanh'

export default history =>
  combineReducers({
    router: connectRouter(history),
    login,
    menu,
    mauphathanh
  })

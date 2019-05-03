import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import login from './login'
import menu from './menu'
import mauPhatHanh from './mauPhatHanh'
import tab from './tab'

export default history =>
  combineReducers({
    router: connectRouter(history),
    login,
    menu,
    mauPhatHanh,
    tab
  })

import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import login from './login'
import mauphathanh from './mauphathanh'

export default history =>
  combineReducers({
    router: connectRouter(history),
    login,
    mauphathanh
  })

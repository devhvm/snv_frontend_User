import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import login from './login'
import menu from './menu'
import mauPhatHanh from './mauPhatHanh'
import duLieuTienTrinh from './duLieuTienTrinh'
import tab from './tab'
import tieuChi from './tieuChi'

export default history =>
  combineReducers({
    router: connectRouter(history),
    login,
    menu,
    mauPhatHanh,
    tab,
    duLieuTienTrinh,
    tieuChi
  })

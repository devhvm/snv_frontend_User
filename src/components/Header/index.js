import { connect } from 'react-redux'
import Header from './Header'
import { logOutReq } from '../../reducers/login'
import { getMenuItem, getMenu, getScreen } from '../../reducers/menu'
import { getCoQuanHanhChinh } from '../../reducers/duLieuTienTrinh'

export default connect(
  state => ({
    menu: state.menu
  }),
  {
    logOutReq,
    getMenuItem,
    getMenu,
    getScreen,
    getCoQuanHanhChinh
  }
)(Header)

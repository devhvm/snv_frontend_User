import { connect } from 'react-redux'
import Header from './Header'
// import {} from '../../reducers/menu'
import { logOutReq } from '../../reducers/login'
import { getMenuItem } from '../../reducers/menu'

export default connect(
  state => ({
    menu: state.menu
  }),
  {
    logOutReq,
    getMenuItem
  }
)(Header)

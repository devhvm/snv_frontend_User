import { connect } from 'react-redux'
import Header from './Header'
// import {} from '../../reducers/menu'
import { logOutReq } from '../../reducers/login'

export default connect(
  state => ({
    menu: state.menu
  }),
  {
    logOutReq
  }
)(Header)

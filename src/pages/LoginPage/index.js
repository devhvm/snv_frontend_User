import { connect } from 'react-redux'
import LoginPage from './LoginPage'
import { compose } from 'recompose'
import { loginReq } from '../../reducers/login'

export default compose(
  connect(
    state => ({
      login: state.login
    }),
    {
      loginReq
    }
  )
)(LoginPage)

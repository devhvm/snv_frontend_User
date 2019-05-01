import { connect } from 'react-redux'
import Create from './Create'
import { getCoQuanChuTri } from '../../reducers/phatHanhMau'

export default connect(
  state => ({
    dataTest: state.phatHanhMau
  }),
  {
    getCoQuanChuTri
  }
)(Create)

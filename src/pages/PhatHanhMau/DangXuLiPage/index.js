import { connect } from 'react-redux'
import DangXuLiPage from './DangXuLiPage'
import { getCoQuanChuTri } from '../../../reducers/phatHanhMau'

export default connect(
  state => ({
    data: state.phatHanhMau
  }),
  {
    getCoQuanChuTri
  }
)(DangXuLiPage)

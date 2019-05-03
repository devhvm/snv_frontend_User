import { connect } from 'react-redux'
import YeuCauDieuChinhPage from './YeuCauDieuChinhPage'
import { getCoQuanChuTri } from '../../../reducers/phatHanhMau'

export default connect(
  state => ({
    data: state.phatHanhMau
  }),
  {
    getCoQuanChuTri
  }
)(YeuCauDieuChinhPage)

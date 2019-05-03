import { connect } from 'react-redux'
import YeuCauDieuChinhPage from './YeuCauDieuChinhPage'
import { getCoQuanChuTri } from '../../../reducers/mauPhatHanh'

export default connect(
  state => ({
    data: state.phatHanhMau
  }),
  {
    getCoQuanChuTri
  }
)(YeuCauDieuChinhPage)

import { connect } from 'react-redux'
import BaoCaoHangMuc from './BaoCaoHangMuc'
import { postExcelFile } from '../../reducers/baoCao'

export default connect(
  state => ({
    ...state.baoCao
  }),
  {
    postExcelFile
  }
)(BaoCaoHangMuc)

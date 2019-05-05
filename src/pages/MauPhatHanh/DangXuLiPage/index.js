import { connect } from 'react-redux'
import DangXuLiPage from './DangXuLiPage'
import {
  getCoQuanChuTri,
  getMauPhatHanh,
  getLoaiBaoCao,
  getTieuChi
} from '../../../reducers/mauPhatHanh'
import {
  fecthTab,
  changeTabList,
  addNewTab,
  changeActiveTab
} from '../../../reducers/tab'

export default connect(
  state => ({
    data: state.mauPhatHanh,
    tab: state.tab
  }),
  {
    fecthTab,
    changeTabList,
    addNewTab,
    changeActiveTab,
    getCoQuanChuTri,
    getMauPhatHanh,
    getLoaiBaoCao,
    getTieuChi
  }
)(DangXuLiPage)

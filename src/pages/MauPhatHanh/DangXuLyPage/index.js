import { connect } from 'react-redux'
import DangXuLyPage from './DangXuLyPage'
import {
  getCoQuanChuTri,
  getMauPhatHanh,
  getLoaiBaoCao,
  getTieuChi
} from '../../../reducers/mauPhatHanh'
import { getDuLieuTienTrinh } from '../../../reducers/duLieuTienTrinh'
import {
  fecthTab,
  removeTab,
  addNewTab,
  changeActiveTab
} from '../../../reducers/tab'

export default connect(
  state => ({
    data: state.mauPhatHanh,
    dataTienTrinh: state.duLieuTienTrinh,
    tab: state.tab
  }),
  {
    fecthTab,
    removeTab,
    addNewTab,
    changeActiveTab,
    getCoQuanChuTri,
    getMauPhatHanh,
    getLoaiBaoCao,
    getTieuChi,
    getDuLieuTienTrinh
  }
)(DangXuLyPage)

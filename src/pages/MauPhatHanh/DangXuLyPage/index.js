import { connect } from 'react-redux'
import DangXuLyPage from './DangXuLyPage'
import {
  getCoQuanChuTriList,
  getMauPhatHanh,
  getLoaiBaoCao,
  getTieuChi,
  addMauPhatHanh
} from '../../../reducers/mauPhatHanh'
import {
  getDuLieuTienTrinh,
  getCoQuanHanhChinh,
  upDateDuLieuTienTrinh
} from '../../../reducers/duLieuTienTrinh'
import {
  fecthTab,
  removeTab,
  addNewTab,
  changeActiveTab
} from '../../../reducers/tab'

export default connect(
  state => ({
    data: state.mauPhatHanh,
    ...state.duLieuTienTrinh,
    ...state.tab
  }),
  {
    fecthTab,
    removeTab,
    addNewTab,
    changeActiveTab,
    getCoQuanChuTriList,
    getMauPhatHanh,
    addMauPhatHanh,
    getLoaiBaoCao,
    getTieuChi,
    getDuLieuTienTrinh,
    getCoQuanHanhChinh,
    upDateDuLieuTienTrinh
  }
)(DangXuLyPage)

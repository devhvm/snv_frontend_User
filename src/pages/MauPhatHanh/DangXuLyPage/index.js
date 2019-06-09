import { connect } from 'react-redux'
import DangXuLyPage from './DangXuLyPage'
import {
  getCoQuanChuTriList,
  getMauPhatHanh,
  getLoaiBaoCao,
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
import { getTieuChiByCoQuanChuTri } from '../../../reducers/tieuChi'

export default connect(
  state => ({
    ...state.mauPhatHanh,
    ...state.duLieuTienTrinh,
    ...state.tab,
    ...state.tieuChi
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
    getTieuChiByCoQuanChuTri,
    getDuLieuTienTrinh,
    getCoQuanHanhChinh,
    upDateDuLieuTienTrinh
  }
)(DangXuLyPage)

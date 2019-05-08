import { connect } from 'react-redux'
import DangXuLyPage from './DangXuLyPage'
import {
  getCoQuanChuTriList,
  getMauPhatHanh,
  getLoaiBaoCao,
  getTieuChi,
  addMauPhatHanh
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
    getCoQuanChuTriList,
    getMauPhatHanh,
    addMauPhatHanh,
    getLoaiBaoCao,
    getTieuChi,
    getDuLieuTienTrinh
  }
)(DangXuLyPage)

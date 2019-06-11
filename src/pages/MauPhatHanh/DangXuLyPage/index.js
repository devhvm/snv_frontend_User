import { connect } from 'react-redux'
import DangXuLyPage from './DangXuLyPage'
import {
  getMauPhatHanh,
  addMauPhatHanh,
  deleteMauPhatHanh
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

import { getLoaiBaoCao } from '../../../reducers/loaiBaoCao'
import { getCoQuanChuTriList } from '../../../reducers/coQuanChuTri'

export default connect(
  state => ({
    ...state.mauPhatHanh,
    ...state.duLieuTienTrinh,
    ...state.tab,
    ...state.tieuChi,
    ...state.loaiBaoCao,
    ...state.coQuanChuTri
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
    upDateDuLieuTienTrinh,
    deleteMauPhatHanh
  }
)(DangXuLyPage)

import { connect } from 'react-redux'
import TruyLucPage from './TruyLucPage'
import {
  getCoQuanChuTriList,
  getMauPhatHanh
} from '../../../reducers/mauPhatHanh'
import {
  fecthTab,
  removeTab,
  addNewTab,
  changeActiveTab
} from '../../../reducers/tab'
import {
  getCoQuanHanhChinh
  // getDuLieuTienTrinh
} from '../../../reducers/duLieuTienTrinh'
export default connect(
  state => ({
    ...state.mauPhatHanh,
    ...state.tab,
    ...state.duLieuTienTrinh
  }),
  {
    fecthTab,
    removeTab,
    addNewTab,
    changeActiveTab,
    getCoQuanChuTriList,
    getCoQuanHanhChinh,
    getMauPhatHanh
  }
)(TruyLucPage)

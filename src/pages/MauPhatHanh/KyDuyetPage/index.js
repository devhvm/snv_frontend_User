import { connect } from 'react-redux'
import KyDuyetPage from './KyDuyetPage'
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
import { getCoQuanHanhChinh } from '../../../reducers/duLieuTienTrinh'
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
)(KyDuyetPage)

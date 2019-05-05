import { connect } from 'react-redux'
import YeuCauDieuChinhPage from './YeuCauDieuChinhPage'
import { getCoQuanChuTri } from '../../../reducers/mauPhatHanh'
import {
  fecthTab,
  changeTabList,
  addNewTab,
  changeActiveTab
} from '../../../reducers/tab'
export default connect(
  state => ({
    data: state.phatHanhMau,
    tab: state.tab
  }),
  {
    fecthTab,
    changeTabList,
    addNewTab,
    changeActiveTab,
    getCoQuanChuTri
  }
)(YeuCauDieuChinhPage)

import { connect } from 'react-redux'
import KyDuyetPage from './KyDuyetPage'
import { getCoQuanChuTri } from '../../../reducers/mauPhatHanh'
import {
  fecthTab,
  removeTab,
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
    removeTab,
    addNewTab,
    changeActiveTab,
    getCoQuanChuTri
  }
)(KyDuyetPage)

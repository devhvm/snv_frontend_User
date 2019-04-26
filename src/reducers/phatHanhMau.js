import { handleActions, createAction } from 'redux-actions'
import callApi from '../utils/APIcaller'

// Action
export const CO_QUAN_CHU_TRI = 'CO_QUAN_CHU_TRI'

// Action Creator
export const getCoQuanChuTri = () => dispatch => {
  console.log('get')
  callApi('common/api/co-quan-chu-tris', 'GET')
    .then(res => {
      console.log('res', res)
      dispatch(getCoQuanChuTriRequest(res.data))
    })
    .catch(err => {
      console.log(err)
    })
  // )
}

const getCoQuanChuTriRequest = createAction(CO_QUAN_CHU_TRI)

// Initial State
const initialState = {}

// reducer
export default handleActions(
  {
    [CO_QUAN_CHU_TRI]: (state, { payload }) => ({
      ...state,
      coQuanChuTri: payload
    })
  },
  initialState
)

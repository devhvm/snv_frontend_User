import { handleActions, createAction } from 'redux-actions'
import callApi from '../utils/APIcaller'

// Action
export const CO_QUAN_CHU_TRI = 'CO_QUAN_CHU_TRI'
export const MAU_PHAT_HANH = 'MAU_PHAT_HANH'
export const MAU_PHAT_HANH_TAB = 'MAU_PHAT_HANH_TAB'

// Action Creator
export const getCoQuanChuTri = () => dispatch => {
  callApi('common/api/co-quan-chu-tris', 'GET')
    .then(res => {
      dispatch(getCoQuanChuTriRequest(res.data))
    })
    .catch(err => {
      console.log(err)
    })
}

export const getMauPhatHanh = () => dispatch => {
  // callApi('common/api/co-quan-chu-tris', 'GET')
  //   .then(res => {
  //     dispatch(getCoQuanChuTriRequest(res.data))
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   })
}

const getCoQuanChuTriRequest = createAction(CO_QUAN_CHU_TRI)
// const getMauPhatHanhRequest = createAction(MAU_PHAT_HANH)

// Initial State
const initialState = {}

// reducer
export default handleActions(
  {
    [CO_QUAN_CHU_TRI]: (state, { payload }) => ({
      ...state,
      coQuanChuTri: payload
    }),
    [MAU_PHAT_HANH]: (state, { payload }) => ({
      ...state,
      mauPhatHanh: payload
    }),
    [MAU_PHAT_HANH]: (state, { payload }) => ({
      ...state,
      mauPhatHanh: payload
    })
  },
  initialState
)

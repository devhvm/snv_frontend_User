import { handleActions, createAction } from 'redux-actions'
import callApi from '../utils/APIcaller'

// Action
export const DU_LIEU_TIEN_TRINH = 'DU_LIEU_TIEN_TRINH'

// Action Creator
export const getDuLieuTienTrinh = () => dispatch => {
  callApi('quytrinhdonvi/api/du-lieu-tien-trinhs-detail/1/TTMPHNEW', 'GET')
    .then(res => {
      dispatch(getDuLieuTienTrinhRequest(res.data))
    })
    .catch(err => {
      console.log(err)
    })
}

const getDuLieuTienTrinhRequest = createAction(DU_LIEU_TIEN_TRINH)

// Initial State
const initialState = {}

// reducer
export default handleActions(
  {
    [DU_LIEU_TIEN_TRINH]: (state, { payload }) => ({
      ...state,
      duLieuTienTrinh: payload
    })
  },
  initialState
)

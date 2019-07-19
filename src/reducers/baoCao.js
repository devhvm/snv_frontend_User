import { handleActions } from 'redux-actions'
import { rest } from '../utils/rest'

// Action
export const DU_LIEU_TIEN_TRINH = 'DU_LIEU_TIEN_TRINH'
export const CO_QUAN_HANH_CHINH = 'CO_QUAN_HANH_CHINH'

// Action Creator

export const postExcelFile = form => dispatch => {
  rest
    .post('http://Phuong:8081/tonghop/upload', form)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
}

// const getDuLieuTienTrinhRequest = createAction(DU_LIEU_TIEN_TRINH)

// Initial State
const initialState = {
  // duLieuTienTrinh: {},
  coQuanHanhChinhList: []
}

// reducer
export default handleActions(
  {
    [DU_LIEU_TIEN_TRINH]: (state, { payload }) => ({
      ...state,
      duLieuTienTrinh: payload
    }),
    [CO_QUAN_HANH_CHINH]: (state, { payload }) => ({
      ...state,
      coQuanHanhChinhList: payload
    })
  },
  initialState
)

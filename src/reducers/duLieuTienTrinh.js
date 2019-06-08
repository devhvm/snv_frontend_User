import { handleActions, createAction } from 'redux-actions'
import { rest } from '../utils/rest'

// Action
export const DU_LIEU_TIEN_TRINH = 'DU_LIEU_TIEN_TRINH'
export const CO_QUAN_HANH_CHINH = 'CO_QUAN_HANH_CHINH'

// Action Creator
// export const getDuLieuTienTrinh = () => dispatch => {
//   rest.get('quytrinhdonvi/api/du-lieu-tien-trinhs-detail/1/TTMPHNEW')
//     .then(res => {
//       dispatch(getDuLieuTienTrinhRequest(res.data))
//     })
//     .catch(err => {
//       console.log(err)
//     })
// }

export const getCoQuanHanhChinh = () => dispatch => {
  rest
    .get('quytrinhdonvi/api/co-quan-hanh-chinhs')
    .then(res => {
      dispatch(getCoQuanHanhChinhRequest(res.data))
      dispatch(getDuLieuTienTrinh())
    })
    .catch(err => {
      console.log(err)
    })
}

export const getDuLieuTienTrinh = () => (dispatch, getState) => {
  const coQuanHanhChinhCode = getState().duLieuTienTrinh.coQuanHanhChinhList
  rest
    .get(
      `quytrinhdonvi/api/du-lieu-tien-trinhs-detail/${
        coQuanHanhChinhCode[0].coQuanHanhChinhCode
      }`
    )
    .then(res => {
      dispatch(getDuLieuTienTrinhRequest(res.data))
    })
    .catch(err => {
      console.log(err)
    })
}

export const upDateDuLieuTienTrinh = item => dispatch => {
  console.log('item', item.duLieuCode)
  rest
    .put('quytrinhdonvi/api/update-du-lieu-tien-trinhs', item)
    .then(res => {
      console.log(item)
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
}

const getDuLieuTienTrinhRequest = createAction(DU_LIEU_TIEN_TRINH)
const getCoQuanHanhChinhRequest = createAction(CO_QUAN_HANH_CHINH)

// Initial State
const initialState = {
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

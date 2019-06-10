import { handleActions, createAction } from 'redux-actions'
import { rest } from '../utils/rest'
import { getDuLieuTienTrinh } from './duLieuTienTrinh'

// Action
export const MAU_PHAT_HANH = 'MAU_PHAT_HANH'

// Action Creator
export const getMauPhatHanh = maMauPhatHanh => dispatch => {
  rest
    .get(`donviphathanh/api/mau-phat-hanh/${maMauPhatHanh}`)
    .then(res => {
      dispatch(getMauPhatHanhRequest(res.data))
    })
    .catch(err => {
      console.log(err)
    })
}

export const addMauPhatHanh = item => dispatch => {
  rest
    .post('donviphathanh/api/mau-phat-hanh', {
      idCoQuanChuTri: item.idCoQuanChuTri,
      maCoQuanChuTri: item.maCoQuanChuTri,
      maMauPhatHanh: item.maMauPhatHanh,
      max: item.min,
      min: item.max,
      note: item.note,
      quyTrinhDonViId: item.quyTrinhDonViId,
      quyTrinhDonViName: item.quyTrinhDonViName,
      status: item.status,
      tenMauPhatHanh: item.tenMauPhatHanh,
      tienTrinhCode: item.tienTrinhCode
    })
    .then(res => {
      dispatch(getDuLieuTienTrinh())
    })
    .catch(err => {
      console.log(err)
    })
}

export const deleteMauPhatHanh = maMauPhatHanh => dispatch => {
  rest
    .delete(`donviphathanh/api/mau-phat-hanh/${maMauPhatHanh}`)
    .then(res => {
      dispatch(getDuLieuTienTrinh())
    })
    .catch(err => {
      console.log(err)
    })
}

const getMauPhatHanhRequest = createAction(MAU_PHAT_HANH)

// Initial State
const initialState = {
  mauPhatHanh: {}
}

// reducer
export default handleActions(
  {
    [MAU_PHAT_HANH]: (state, { payload }) => ({
      ...state,
      mauPhatHanh: payload
    })
  },
  initialState
)

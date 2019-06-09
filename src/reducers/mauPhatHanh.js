import { handleActions, createAction } from 'redux-actions'
import { rest } from '../utils/rest'
import { getDuLieuTienTrinh } from './duLieuTienTrinh'

// Action
export const CO_QUAN_CHU_TRI = 'CO_QUAN_CHU_TRI'
export const MAU_PHAT_HANH = 'MAU_PHAT_HANH'
export const MAU_BAO_CAO = 'MAU_BAO_CAO'

// Action Creator
export const getCoQuanChuTriList = () => dispatch => {
  rest
    .get('common/api/co-quan-chu-tris')
    .then(res => {
      dispatch(getCoQuanChuTriListRequest(res.data))
    })
    .catch(err => {
      console.log(err)
    })
}

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

export const getLoaiBaoCao = () => dispatch => {
  rest
    .get('common/api/loai-bao-caos')
    .then(res => {
      dispatch(getLoaiBaoCaoRequest(res.data[0].name))
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

const getCoQuanChuTriListRequest = createAction(CO_QUAN_CHU_TRI)
const getMauPhatHanhRequest = createAction(MAU_PHAT_HANH)
const getLoaiBaoCaoRequest = createAction(MAU_BAO_CAO)

// Initial State
const initialState = {
  mauPhatHanh: {}
}

// reducer
export default handleActions(
  {
    [CO_QUAN_CHU_TRI]: (state, { payload }) => ({
      ...state,
      coQuanChuTriList: payload
    }),
    [MAU_PHAT_HANH]: (state, { payload }) => ({
      ...state,
      mauPhatHanh: payload
    }),
    [MAU_BAO_CAO]: (state, { payload }) => ({
      ...state,
      mauBaoCao: payload
    })
  },
  initialState
)

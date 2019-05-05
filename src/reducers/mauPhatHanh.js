import { handleActions, createAction } from 'redux-actions'
import callApi from '../utils/APIcaller'

// Action
export const CO_QUAN_CHU_TRI = 'CO_QUAN_CHU_TRI'
export const MAU_PHAT_HANH = 'MAU_PHAT_HANH'
export const MAU_BAO_CAO = 'MAU_BAO_CAO'
export const TIEU_CHI = 'TIEU_CHI'

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
  callApi('donviphathanh/api/mau-phat-hanh', 'GET')
    .then(res => {
      dispatch(getMauPhatHanhRequest(res.data))
    })
    .catch(err => {
      console.log(err)
    })
}

export const getLoaiBaoCao = () => dispatch => {
  callApi('common/api/loai-bao-caos', 'GET')
    .then(res => {
      dispatch(getLoaiBaoCaoRequest(res.data[0].name))
    })
    .catch(err => {
      console.log(err)
    })
}

export const getTieuChi = id => dispatch => {
  callApi(`common/api/tieu-chis/co_quan_chu_tri?id=${id}`, 'GET')
    .then(res => {
      console.log(res.data)
      dispatch(getTieuChiRequest(res.data))
    })
    .catch(err => {
      console.log(err)
    })
}

const getCoQuanChuTriRequest = createAction(CO_QUAN_CHU_TRI)
const getMauPhatHanhRequest = createAction(MAU_PHAT_HANH)
const getLoaiBaoCaoRequest = createAction(MAU_BAO_CAO)
const getTieuChiRequest = createAction(TIEU_CHI)

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
    [MAU_BAO_CAO]: (state, { payload }) => ({
      ...state,
      mauBaoCao: payload
    }),
    [TIEU_CHI]: (state, { payload }) => ({
      ...state,
      tieuChi: payload
    })
  },
  initialState
)

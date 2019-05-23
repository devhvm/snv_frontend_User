import { handleActions, createAction } from 'redux-actions'
import callApi from '../utils/APIcaller'

// Action
export const CO_QUAN_CHU_TRI = 'CO_QUAN_CHU_TRI'
export const MAU_PHAT_HANH = 'MAU_PHAT_HANH'
export const MAU_BAO_CAO = 'MAU_BAO_CAO'
export const TIEU_CHI = 'TIEU_CHI'

// Action Creator
export const getCoQuanChuTriList = () => dispatch => {
  callApi('common/api/co-quan-chu-tris', 'GET')
    .then(res => {
      dispatch(getCoQuanChuTriListRequest(res.data))
    })
    .catch(err => {
      console.log(err)
    })
}

export const getMauPhatHanh = maMauPhatHanh => dispatch => {
  callApi(`donviphathanh/api/mau-phat-hanh/${maMauPhatHanh}`, 'GET', {}, {})
    .then(res => {
      console.log(res.data)
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
      console.log('datatieuChi', res.data)
      dispatch(getTieuChiRequest(res.data))
    })
    .catch(err => {
      console.log(err)
    })
}

export const addMauPhatHanh = item => dispatch => {
  console.log(item)
  callApi('donviphathanh/api/mau-phat-hanh', 'POST', {
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
      console.log('res.data', res.data)
      dispatch(getTieuChiRequest(res.data))
    })
    .catch(err => {
      console.log(err)
    })
}

const getCoQuanChuTriListRequest = createAction(CO_QUAN_CHU_TRI)
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
      coQuanChuTriList: payload
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

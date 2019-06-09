import { handleActions, createAction } from 'redux-actions'
import { rest } from '../utils/rest'

export const TIEU_CHI = 'TIEU_CHI'

export const getTieuChiByCoQuanChuTri = id => dispatch => {
  rest
    .get(`common/api/tieu-chis/co_quan_chu_tri?id=${id}`)
    .then(res => {
      dispatch(getTieuChiRequest(res.data))
    })
    .catch(err => {
      console.log(err)
    })
}

const getTieuChiRequest = createAction(TIEU_CHI)

// Initial State
const initialState = {
  // tieuChi: []
}

// reducer
export default handleActions(
  {
    [TIEU_CHI]: (state, { payload }) => ({
      ...state,
      tieuChi: payload
    })
  },
  initialState
)

import { handleActions, createAction } from 'redux-actions'
import { rest } from '../utils/rest'

export const CO_QUAN_CHU_TRI = 'CO_QUAN_CHU_TRI'

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

const getCoQuanChuTriListRequest = createAction(CO_QUAN_CHU_TRI)

const initialState = {
  // coQuanChuTriList: []
}

export default handleActions(
  {
    [CO_QUAN_CHU_TRI]: (state, { payload }) => ({
      ...state,
      coQuanChuTriList: payload
    })
  },
  initialState
)

import { handleActions, createAction } from 'redux-actions'
import { rest } from '../utils/rest'

export const MAU_BAO_CAO = 'MAU_BAO_CAO'

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

const getLoaiBaoCaoRequest = createAction(MAU_BAO_CAO)

// Initial State
const initialState = {
  // mauBaoCao: {}
}

export default handleActions(
  {
    [MAU_BAO_CAO]: (state, { payload }) => ({
      ...state,
      mauBaoCao: payload
    })
  },
  initialState
)

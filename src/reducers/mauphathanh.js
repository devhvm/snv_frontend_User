import { handleActions, createAction } from 'redux-actions'

// Action
export const GET_DATA_EDIT_MAU_PHAT_HANH = 'GET_DATA_EDIT_MAU_PHAT_HANH'

// Action Creator
// export const fecthMauPhatHanh = () => {
//   return dispatch => {
//     axios({
//       url: 'http://210.2.91.13:8771/api/authenticate',
//       method: 'POST',
//       data: {
//         password: 'string',
//         rememberMe: true,
//         username: 'string'
//       }
//     })
//       .then(res => {
//         dispatch(loginRequest(res))
//       })
//       .catch(err => {
//         console.log(err)
//       })
//   }
// }

export const getDataEditMauPhatHanh = data => dispatch => {
  // console.log('dataReduce', data)
  return dispatch(getDataEditMauPhatHanhRequest(data))
}

const getDataEditMauPhatHanhRequest = createAction(GET_DATA_EDIT_MAU_PHAT_HANH)

// Initial State
const initialState = {}

// reducer
export default handleActions(
  {
    [GET_DATA_EDIT_MAU_PHAT_HANH]: (state, { payload }) => ({
      ...state,
      dataEditMauPhatHanh: payload
    })
  },
  initialState
)

import axios from 'axios'
import { handleActions, createAction } from 'redux-actions'
import token from '../common/jwtToken'

// Action
export const MENU_ITEM = 'MENU_ITEM'

// Action Creator
export const getMenuItem = () => dispatch => {
  return axios({
    url: 'http://vtools.xyz:9999/phanquyenchucnang/api/menu-items',
    method: 'GET',
    headers: {
      Authorization: token()
    }
  })
    .then(res => {
      dispatch(getMenuRequest(res.data))
    })
    .catch(err => {
      console.log(err)
    })
}

const getMenuRequest = createAction(MENU_ITEM)

// Initial State
const initialState = {
  menuItem: []
}

// reducer
export default handleActions(
  {
    [MENU_ITEM]: (state, { payload }) => ({
      ...state,
      menuItem: payload
    })
  },
  initialState
)

import { handleActions, createAction } from 'redux-actions'
import callApi from '../utils/APIcaller'

// Action
export const MENU_ITEM = 'MENU_ITEM'
export const MENU = 'MENU'
export const SCREEN = 'SCREEN'

// Action Creator
export const getMenuItem = () => dispatch => {
  callApi('phanquyenchucnang/api/menu-items', 'GET')
    .then(res => {
      dispatch(getMenuItemRequest(res.data))
    })
    .catch(err => {
      console.log(err)
    })
}

export const getMenu = () => dispatch => {
  callApi('phanquyenchucnang/api/menus', 'GET')
    .then(res => {
      dispatch(getMenuRequest(res.data))
    })
    .catch(err => {
      console.log(err)
    })
}

export const getScreen = () => dispatch => {
  callApi('phanquyenchucnang/api/screens', 'GET')
    .then(res => {
      dispatch(getScreenRequest(res.data))
    })
    .catch(err => {
      console.log(err)
    })
}

const getMenuItemRequest = createAction(MENU_ITEM)
const getMenuRequest = createAction(MENU)
const getScreenRequest = createAction(SCREEN)

// Initial State
const initialState = {
  menuItem: [],
  menu: [],
  screen: []
}

// reducer
export default handleActions(
  {
    [MENU_ITEM]: (state, { payload }) => ({
      ...state,
      menuItem: payload
    }),
    [MENU]: (state, { payload }) => ({
      ...state,
      menu: payload
    }),
    [SCREEN]: (state, { payload }) => ({
      ...state,
      screen: payload
    })
  },
  initialState
)

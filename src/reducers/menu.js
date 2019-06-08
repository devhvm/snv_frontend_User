import { handleActions, createAction } from 'redux-actions'
import { rest } from '../utils/rest'

// Action
export const MENU_ITEM = 'MENU_ITEM'
export const MENU = 'MENU'
export const SCREEN = 'SCREEN'

// Action Creator
export const getMenuItem = () => dispatch => {
  rest
    .get('phanquyenchucnang/api/menu-items')
    .then(res => {
      dispatch(getMenuItemRequest(res.data))
    })
    .catch(err => {
      console.log(err)
    })
}

export const getMenu = () => dispatch => {
  rest
    .get('phanquyenchucnang/api/menus')
    .then(res => {
      dispatch(getMenuRequest(res.data))
    })
    .catch(err => {
      console.log(err)
    })
}

export const getScreen = () => dispatch => {
  rest
    .get('phanquyenchucnang/api/screens')
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

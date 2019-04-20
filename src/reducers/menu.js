import axios from 'axios'
import { handleActions, createAction } from 'redux-actions'
import token from '../common/jwtToken'

// Action
export const MENU_ITEM = 'MENU_ITEM'
export const MENU = 'MENU'
export const SCREEN = 'SCREEN'

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
      dispatch(getMenuItemRequest(res.data))
    })
    .catch(err => {
      console.log(err)
    })
}

export const getMenu = () => dispatch => {
  return axios({
    url: 'http://vtools.xyz:9999/phanquyenchucnang/api/menus',
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

export const getScreen = () => dispatch => {
  return axios({
    url: 'http://vtools.xyz:9999/phanquyenchucnang/api/screens',
    method: 'GET',
    headers: {
      Authorization: token()
    }
  })
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

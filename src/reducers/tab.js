import { handleActions, createAction } from 'redux-actions'

const tabList = [
  { title: 'Tab 1', content: 'Content of Tab 1', key: '1' },
  { title: 'Tab 2', content: 'Content of Tab 2', key: '2' },
  { title: 'Tab 3', content: 'Content of Tab 3', key: '3' }
]

// Action
export const TAB_LIST = 'TAB_LIST'
export const ACTIVE_TAB = 'ACTIVE_TAB'

// Action Creator
export const fecthTab = () => dispatch => {
  dispatch(fetchTabRequest(tabList))
}

export const changeTabList = item => dispatch => {
  dispatch(fetchTabRequest(item))
}

export const changeActiveTab = item => dispatch => {
  dispatch(changeActiveTabRequest(item))
}

export const addNewTab = item => dispatch => {
  console.log(item)
  tabList.push({
    title: item.tenMau,
    content: 'Content of new Tab',
    key: item.maMau
  })
  dispatch(fetchTabRequest(tabList))
}

const changeActiveTabRequest = createAction(ACTIVE_TAB)
const fetchTabRequest = createAction(TAB_LIST)

// Initial State
const initialState = {
  activeTab: '1'
}

// reducer
export default handleActions(
  {
    [TAB_LIST]: (state, { payload }) => ({
      ...state,
      tabList: payload
    }),
    [ACTIVE_TAB]: (state, { payload }) => ({
      ...state,
      activeTab: payload
    })
  },
  initialState
)

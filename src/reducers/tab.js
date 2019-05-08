import { handleActions, createAction } from 'redux-actions'

const tabList = [{ title: 'Tab 1', content: 'Content of Tab 1', key: '1' }]

// Action
export const TAB_LIST = 'TAB_LIST'
export const ACTIVE_TAB = 'ACTIVE_TAB'

// Action Creator
export const fecthTab = () => dispatch => {
  dispatch(fetchTabRequest(tabList))
}

export const removeTab = (list, targetKey, activeTab) => dispatch => {
  let lastIndex = 0
  list.forEach((item, i) => {
    if (String(item.key) === targetKey) {
      lastIndex = i - 1
    }
  })
  const panes = list.filter(item => item.key !== targetKey)
  if (panes.length && activeTab === targetKey) {
    if (lastIndex >= 0) {
      changeActiveTab(panes[lastIndex].key)
    } else {
      changeActiveTab(panes[0].key)
    }
  }
  dispatch(fetchTabRequest(panes))
}

export const changeActiveTab = item => dispatch => {
  dispatch(changeActiveTabRequest(item))
}

export const addNewTab = (list, item, status) => dispatch => {
  let isExist = false
  list.forEach(function (elm) {
    if (elm.key === item.maMau) {
      isExist = true
    }
  })
  if (!isExist) {
    list.push({
      title: `${item.tenMau} (${status})`,
      content: 'Content of new Tab',
      key: item.maMau
    })
  }
  dispatch(fetchTabRequest(list))
}

const changeActiveTabRequest = createAction(ACTIVE_TAB)
const fetchTabRequest = createAction(TAB_LIST)

// Initial State
const initialState = {
  activeTab: '1',
  tabList: [
    { title: 'Tab 1', content: 'Content of Tab 1', key: '1' },
    { title: 'Tab 2', content: 'Content of Tab 2', key: '2' }
  ]
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

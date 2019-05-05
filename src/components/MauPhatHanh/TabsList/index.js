import React, { useEffect } from 'react'
import { Tabs } from 'antd'
import TabItem from '../TabItem'

const TabPane = Tabs.TabPane

export default function TabList ({
  tab,
  fecthTab,
  changeTabList,
  changeActiveTab
}) {
  console.log(tab)

  const tabList = tab.tabList
  const activeTab = tab.activeTab

  useEffect(() => {
    fecthTab()
  }, [])

  // const [activeTab, setActiveTab] = useState(1)

  const onEdit = (targetKey, action) => {
    if (action === 'remove') remove(targetKey)
  }

  // const add = () => {
  //   const panes = tabList
  //   const activeKey = String(Math.random())
  //   panes.push({ title: tab.tenMau, content: 'Content of new Tab', key: tab.maMau })
  //   changeActiveTab(activeKey)
  //   changeTabList(panes)
  // }

  const remove = targetKey => {
    let activeKey = activeTab
    console.log('activeKey', activeKey)
    console.log('targetKey', targetKey)
    let lastIndex
    tabList.forEach((pane, i) => {
      if (String(pane.key) === targetKey) {
        lastIndex = i - 1
      }
    })
    const panes = tabList.filter(pane => pane.key !== targetKey)
    if (panes.length && activeKey === targetKey) {
      if (lastIndex >= 0) {
        // activeKey = panes[lastIndex].key
        changeActiveTab(panes[lastIndex].key)
      } else {
        // activeKey = panes[0].key
        changeActiveTab(panes[0].key)
      }
    }
    console.log('panes', panes)
    changeTabList(panes)
    changeActiveTab(targetKey)
  }

  return (
    <React.Fragment>
      <Tabs defaultActiveKey='1' type='editable-card' hideAdd onEdit={onEdit}>
        {tabList &&
          tabList.map(pane => (
            <TabPane tab={pane.title} key={pane.key}>
              <TabItem />
            </TabPane>
          ))}
      </Tabs>
    </React.Fragment>
  )
}

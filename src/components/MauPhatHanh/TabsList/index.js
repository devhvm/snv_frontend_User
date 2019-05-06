import React, { useEffect } from 'react'
import { Tabs } from 'antd'
import TabItem from '../TabItem'

const TabPane = Tabs.TabPane

export default function TabList ({
  tab,
  fecthTab,
  removeTab,
  changeActiveTab
}) {
  const tabList = tab.tabList
  const activeTab = tab.activeTab

  useEffect(() => {
    fecthTab()
  }, [])

  const onEdit = (targetKey, action) => {
    if (action === 'remove') remove(targetKey)
  }

  const remove = targetKey => {
    removeTab(tabList, targetKey, activeTab)
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

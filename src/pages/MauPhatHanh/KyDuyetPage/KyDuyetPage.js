import React, { useEffect } from 'react'
import { Layout } from 'antd'
import TabsList from '../../../components/MauPhatHanh/TabsList'
import KyDuyetMenuSider from '../../../components/MauPhatHanh/MenuSider/kyDuyet'

export default function KyDuyetPage ({
  mauPhatHanh,
  mauBaoCao,
  duLieuTienTrinh,
  tabList,
  activeTab,
  fecthTab,
  addNewTab,
  removeTab,
  changeActiveTab,
  getMauPhatHanh,
  getDuLieuTienTrinh,
  getCoQuanHanhChinh,
  upDateDuLieuTienTrinh,
  getMauPhatHanhSelecting
}) {
  useEffect(() => {
    getCoQuanHanhChinh()
  }, [])

  return (
    <Layout>
      <Layout.Content style={{ background: '#fff' }}>
        <TabsList
          tabList={tabList}
          activeTab={activeTab}
          fecthTab={fecthTab}
          removeTab={removeTab}
          changeActiveTab={changeActiveTab}
          duLieuTienTrinh={duLieuTienTrinh}
          mauPhatHanh={mauPhatHanh}
          upDateDuLieuTienTrinh={upDateDuLieuTienTrinh}
        />
      </Layout.Content>
      <Layout.Sider
        width={300}
        style={{
          borderLeft: '1px solid #e8e8e8',
          marginLeft: '10px',
          background: '#fff'
        }}
        // collapsed={collapsed}
      >
        <Layout.Content>
          <KyDuyetMenuSider
            addNewTab={addNewTab}
            getMauPhatHanh={getMauPhatHanh}
            tabList={tabList}
            changeActiveTab={changeActiveTab}
            duLieuTienTrinh={duLieuTienTrinh}
            getMauPhatHanhSelecting={getMauPhatHanhSelecting}
          />
        </Layout.Content>
      </Layout.Sider>
    </Layout>
  )
}

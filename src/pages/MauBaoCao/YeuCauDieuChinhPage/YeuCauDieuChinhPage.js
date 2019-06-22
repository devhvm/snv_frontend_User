import React, { useEffect } from 'react'
import { Layout } from 'antd'
import TabsList from '../../../components/MauBaoCao/TabsList'
import YeuCauDieuChinhMenuSider from '../../../components/MauPhatHanh/MenuSider/yeuCauDieuChinh'

export default function YeuCauDieuChinhPage ({
  data,
  tab,
  fecthTab,
  addNewTab,
  removeTab,
  changeActiveTab,
  getCoQuanChuTri,
  getMauPhatHanh,
  getLoaiBaoCao,
  getTieuChi
}) {
  useEffect(() => {
    // getMauPhatHanh()
  })

  return (
    <Layout>
      <Layout.Content style={{ background: '#fff' }}>
        {/* <TabsList */}
        {/* tab={tab} */}
        {/* fecthTab={fecthTab} */}
        {/* removeTab={removeTab} */}
        {/* changeActiveTab={changeActiveTab} */}
        {/* /> */}
        <TabsList
          tab={tab}
          fecthTab={fecthTab}
          removeTab={removeTab}
          changeActiveTab={changeActiveTab}
        />
      </Layout.Content>
      <Layout.Sider
        width={300}
        style={{
          borderLeft: '1px solid #e8e8e8',
          marginLeft: '10px',
          background: '#fff'
        }}
      >
        <Layout.Content>
          <YeuCauDieuChinhMenuSider
            addNewTab={addNewTab}
            tabList={tab.tabList}
            changeActiveTab={changeActiveTab}
          />
        </Layout.Content>
      </Layout.Sider>
    </Layout>
  )
}

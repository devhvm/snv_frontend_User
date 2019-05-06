import React, { useEffect, useState } from 'react'
import { Layout } from 'antd'
import CreateModal from '../../../components/MauPhatHanh/CreateModal'
import TabsList from '../../../components/MauPhatHanh/TabsList'
import DangXuLiMenuSider from '../../../components/MauPhatHanh/MenuSider/dangXuLi'

export default function DangXuLyPage ({
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
  // console.log('data', data)

  useEffect(() => {
    // getMauPhatHanh()
  })

  const [visibleCreateModal, setVisibleCreateModal] = useState(false)

  return (
    <Layout>
      <Layout.Content style={{ background: '#fff' }}>
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
        // collapsed={collapsed}
      >
        <Layout.Content>
          <DangXuLiMenuSider
            setVisibleCreateModal={setVisibleCreateModal}
            getCoQuanChuTri={getCoQuanChuTri}
            addNewTab={addNewTab}
            tabList={tab.tabList}
            changeActiveTab={changeActiveTab}
            getLoaiBaoCao={getLoaiBaoCao}
          />
        </Layout.Content>
      </Layout.Sider>
      <CreateModal
        visible={visibleCreateModal}
        closeModal={() => {
          setVisibleCreateModal(false)
        }}
        coQuanChuTri={data.coQuanChuTri}
        mauBaoCao={data.mauBaoCao}
        tieuChi={data.tieuChi}
        getTieuChi={getTieuChi}
      />
    </Layout>
  )
}

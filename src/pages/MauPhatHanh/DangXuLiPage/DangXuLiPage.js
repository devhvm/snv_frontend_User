import React, { useEffect, useState } from 'react'
import { Layout } from 'antd'
import CreateModal from '../../../components/MauPhatHanh/CreateModal'
import TabsList from '../../../components/MauPhatHanh/TabsList'
import DangXuLiMenuSider from '../../../components/MauPhatHanh/MenuSider/dangxuli'

export default function DangXuLiPage ({
  data,
  tab,
  getCoQuanChuTri,
  getMauPhatHanh,
  getLoaiBaoCao,
  getTieuChi,
  fecthTab,
  addNewTab,
  changeTabList,
  changeActiveTab
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
          changeTabList={changeTabList}
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

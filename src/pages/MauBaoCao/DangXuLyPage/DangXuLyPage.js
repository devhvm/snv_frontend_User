import React, { useEffect, useState } from 'react'
import { Layout } from 'antd'
import CreateModal from '../../../components/MauBaoCao/CreateModal'
import TabsList from '../../../components/MauBaoCao/TabsList'
import DangXuLiMenuSider from '../../../components/MauBaoCao/MenuSider/dangXuLi'

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

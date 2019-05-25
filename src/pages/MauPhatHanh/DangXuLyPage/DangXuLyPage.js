import React, { useEffect, useState } from 'react'
import { Layout } from 'antd'
import CreateModal from '../../../components/MauPhatHanh/CreateModal'
import TabsList from '../../../components/MauPhatHanh/TabsList'
import DangXuLiMenuSider from '../../../components/MauPhatHanh/MenuSider/dangXuLi'

export default function DangXuLyPage ({
  data,
  dataTienTrinh,
  tab,
  fecthTab,
  addNewTab,
  removeTab,
  changeActiveTab,
  getCoQuanChuTriList,
  getMauPhatHanh,
  addMauPhatHanh,
  getLoaiBaoCao,
  getTieuChi,
  getDuLieuTienTrinh
}) {
  useEffect(() => {
    getDuLieuTienTrinh()
  }, [])

  const [visibleCreateModal, setVisibleCreateModal] = useState(false)

  return (
    <Layout>
      <Layout.Content style={{ background: '#fff' }}>
        <TabsList
          tab={tab}
          fecthTab={fecthTab}
          removeTab={removeTab}
          changeActiveTab={changeActiveTab}
          dataTienTrinh={dataTienTrinh.duLieuTienTrinh}
          dataMauPhatHanh={data.mauPhatHanh}
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
            getCoQuanChuTriList={getCoQuanChuTriList}
            addNewTab={addNewTab}
            getMauPhatHanh={getMauPhatHanh}
            tabList={tab.tabList}
            changeActiveTab={changeActiveTab}
            getLoaiBaoCao={getLoaiBaoCao}
            dataTienTrinh={dataTienTrinh.duLieuTienTrinh}
          />
        </Layout.Content>
      </Layout.Sider>
      <CreateModal
        visible={visibleCreateModal}
        closeModal={() => {
          setVisibleCreateModal(false)
        }}
        coQuanChuTriList={data.coQuanChuTriList}
        mauBaoCao={data.mauBaoCao}
        tieuChi={data.tieuChi}
        getTieuChi={getTieuChi}
        addMauPhatHanh={addMauPhatHanh}
        dataTienTrinh={dataTienTrinh.duLieuTienTrinh}
      />
    </Layout>
  )
}

import React, { useState } from 'react'
import { Layout } from 'antd'
import CreateModal from '../../components/MauPhatHanh/CreateModal'
import DeleteModal from '../../components/MauPhatHanh/DeleteModal'
import ContentTabs from '../../components/MauPhatHanh/ContentTabs'
import CreateMenuSider from '../../components/MauPhatHanh/MenuSider/create'

export default function DangXuLi ({ data, getCoQuanChuTri }) {
  console.log(data.coQuanChuTri)
  const [visibleDeleteModal, setVisibleDeleteModal] = useState(false)
  const [visibleCreateModal, setVisibleCreateModal] = useState(false)

  return (
    <Layout>
      <Layout.Content style={{ background: '#fff' }}>
        <ContentTabs setVisibleDeleteModal={setVisibleDeleteModal} />
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
          <CreateMenuSider
            setVisibleCreateModal={setVisibleCreateModal}
            getCoQuanChuTri={getCoQuanChuTri}
          />
        </Layout.Content>
      </Layout.Sider>
      <DeleteModal
        visible={visibleDeleteModal}
        closeModal={() => {
          setVisibleDeleteModal(false)
        }}
      />
      <CreateModal
        visible={visibleCreateModal}
        closeModal={() => {
          setVisibleCreateModal(false)
        }}
        coQuanChuTri={data.coQuanChuTri}
      />
    </Layout>
  )
}

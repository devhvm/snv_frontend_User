import React from 'react'
import { Input, Row, Table, Menu, Icon, Button } from 'antd'
import styled from 'styled-components'

export default function KyDuyetMenuSider ({
  getLoaiBaoCao,
  getMauPhatHanh,
  addNewTab,
  changeActiveTab,
  tabList,
  duLieuTienTrinh
}) {
  const SubMenu = Menu.SubMenu

  const ListTable = styled(Table)`
    margin-top: 10px !important;
    width: 90%;
    margin: auto;
  `

  const SearchInput = styled(Input)`
    width: 90% !important;
    margin: auto !important;
    display: flex !important;
  `

  const columnsSmall = [
    {
      title: 'Mã Mẫu',
      dataIndex: 'maMau'
    },
    {
      title: 'Tên Mẫu',
      dataIndex: 'tenMau'
    }
  ]
  const dataSmall =
    duLieuTienTrinh &&
    duLieuTienTrinh.tienTrinhXuLys[3].duLieuTienTrinh.map(item => ({
      key: item.id,
      maMau: item.duLieuCode,
      tenMau: item.name
    }))

  return (
    <Menu
      mode='inline'
      defaultOpenKeys={['editList']}
      style={{ background: '#ccc' }}
    >
      <SubMenu
        key='editList'
        title={
          <>
            <Icon type='user' />
            Danh sách ký duyệt
          </>
        }
      >
        <Menu.ItemGroup
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '0 0 !important'
          }}
        >
          <SearchInput placeholder='Tìm Kiếm' />
          <Row type='flex' justify='end'>
            <Button
              type='primary'
              icon='search'
              style={{
                margin: '10px 15px 0 0',
                background: '#06d0d0',
                borderColor: '#06d0d0',
                fontSize: '10px'
              }}
            >
              Tìm kiếm
            </Button>
          </Row>
          <ListTable
            columns={columnsSmall}
            dataSource={dataSmall}
            size='small'
            onRow={record => {
              return {
                onClick: () => {
                  addNewTab(tabList, record, 'SIGNED')
                  changeActiveTab(String(record.maMau))
                  getMauPhatHanh(record.maMau)
                }
              }
            }}
          />
        </Menu.ItemGroup>
      </SubMenu>
    </Menu>
  )
}

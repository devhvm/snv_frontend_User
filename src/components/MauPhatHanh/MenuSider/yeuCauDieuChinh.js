import React from 'react'
import { Input, Row, Table, Menu, Icon, Button } from 'antd'
import styled from 'styled-components'

export default function YeuCauDieuChinhMenuSider ({
  getCoQuanChuTriList,
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
  const dataEdit =
    duLieuTienTrinh &&
    duLieuTienTrinh.tienTrinhXuLys[1].duLieuTienTrinh.map(item => ({
      key: item.id,
      maMau: item.duLieuCode,
      tenMau: item.name
    }))

  const authorizedList =
    duLieuTienTrinh &&
    duLieuTienTrinh.tienTrinhXuLys[2].duLieuTienTrinh.map(item => ({
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
            Danh sách yêu cầu điều chỉnh
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
            dataSource={dataEdit}
            size='small'
            onRow={record => {
              return {
                onClick: () => {
                  addNewTab(tabList, record, 'ACTIVE')
                  changeActiveTab(String(record.maMau))
                  getMauPhatHanh(record.maMau)
                }
              }
            }}
          />
        </Menu.ItemGroup>
      </SubMenu>
      <SubMenu
        key='authorizedList'
        title={
          <>
            <Icon type='user' />
            Danh sách uỷ quyền
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
          <SearchInput placeholder='Tìm kiếm' />
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
            dataSource={authorizedList}
            size='small'
          />
        </Menu.ItemGroup>
      </SubMenu>
    </Menu>
  )
}

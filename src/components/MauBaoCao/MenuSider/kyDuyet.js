import React from 'react'
import { Input, Row, Table, Menu, Icon, Button } from 'antd'
import styled from 'styled-components'

export default function YeuCauDieuChinhMenuSider ({
  setVisibleCreateModal,
  getCoQuanChuTri,
  getLoaiBaoCao,
  addNewTab,
  changeActiveTab,
  tabList
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
  const dataSmall = [
    {
      key: '1',
      maMau: '32',
      tenMau: 'Báo Cáo Thanh Niên'
    },
    {
      key: '2',
      maMau: '33',
      tenMau: 'Báo Cáo Thanh Niên'
    },
    {
      key: '3',
      maMau: '34',
      tenMau: 'Báo Cáo Thanh Niên'
    }
  ]

  return (
    <Menu
      mode='inline'
      defaultOpenKeys={['editList']}
      style={{ background: '#ccc' }}
    >
      <SubMenu
        key='editList'
        title={
          <React.Fragment>
            <Icon type='user' />
            Danh sách ký duyệt
          </React.Fragment>
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
              onClick={() => {
                setVisibleCreateModal(true)
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
                  addNewTab(tabList, record)
                  changeActiveTab(String(record.maMau))
                }
              }
            }}
          />
        </Menu.ItemGroup>
      </SubMenu>
    </Menu>
  )
}

import React from 'react'
import { Input, Row, Col, Table, Menu, Icon, Button } from 'antd'
import styled from 'styled-components'

export default function DangXuLiMenuSider ({
  setVisibleCreateModal,
  getCoQuanChuTriList,
  getLoaiBaoCao,
  getMauPhatHanh,
  addNewTab,
  changeActiveTab,
  tabList,
  dataTienTrinh
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
  const dataTable =
    dataTienTrinh &&
    dataTienTrinh.tienTrinhXuLys[0].duLieuTienTrinh.map(item => ({
      key: item.id,
      maMau: item.duLieuCode,
      tenMau: item.name
    }))

  return (
    <Menu
      mode='inline'
      defaultOpenKeys={['createList']}
      style={{ background: '#ccc' }}
    >
      <SubMenu
        key='createList'
        title={
          <>
            <Icon type='user' />
            {/* Danh sách tạo mới */}
            {dataTienTrinh &&
              dataTienTrinh.tienTrinhXuLys[0].tienTrinhBatDau.name}
          </>
        }
      >
        <Menu.ItemGroup
          style={{
            display: 'flex',
            flexDirection: 'column',
            height: '300px',
            padding: '0 0 !important'
          }}
        >
          <SearchInput placeholder='Tìm Kiếm' />
          <Row>
            <Col span={20} offset={4}>
              <Row>
                <Col span={11}>
                  <Button
                    type='primary'
                    icon='plus'
                    style={{
                      marginTop: '10px',
                      background: '#44b100cc',
                      borderColor: '#44b100cc',
                      // width: '90%',
                      fontSize: '10px'
                    }}
                    onClick={() => {
                      setVisibleCreateModal(true)
                      getCoQuanChuTriList()
                      getLoaiBaoCao()
                    }}
                  >
                    Tạo Mới
                  </Button>
                </Col>
                <Col span={11}>
                  <Button
                    type='primary'
                    icon='search'
                    style={{
                      marginTop: '10px',
                      background: '#06d0d0',
                      borderColor: '#06d0d0',
                      // width: '90%',
                      fontSize: '10px'
                    }}
                    onClick={() => {
                      setVisibleCreateModal(true)
                    }}
                  >
                    Tìm kiếm
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
          <ListTable
            columns={columnsSmall}
            dataSource={dataTable}
            size='small'
            onRow={record => {
              return {
                onClick: () => {
                  addNewTab(
                    tabList,
                    record,
                    dataTienTrinh.tienTrinhXuLys[0].duLieuTienTrinh[0].status
                  )
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

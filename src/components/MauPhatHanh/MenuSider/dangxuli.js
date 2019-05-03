import React from 'react'
import { Input, Row, Col, Table, Menu, Icon, Button } from 'antd'
import styled from 'styled-components'

export default function DangXuLiMenuSider ({
  setVisibleCreateModal,
  getCoQuanChuTri,
  addNewTab,
  changeActiveTab
}) {
  const SubMenu = Menu.SubMenu

  const ListTable = styled(Table)`
    margin-top: 20px;
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
      defaultOpenKeys={['createList']}
      style={{ background: '#ccc' }}
    >
      <SubMenu
        key='createList'
        title={
          <React.Fragment>
            <Icon type='user' />
            Danh sách tạo mới
          </React.Fragment>
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
                      marginTop: '20px',
                      background: '#44b100cc',
                      borderColor: '#44b100cc',
                      // width: '90%',
                      fontSize: '10px'
                    }}
                    onClick={() => {
                      setVisibleCreateModal(true)
                      getCoQuanChuTri()
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
                      marginTop: '20px',
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
            style={{}}
            columns={columnsSmall}
            dataSource={dataSmall}
            size='small'
            onRow={record => {
              return {
                onClick: () => {
                  addNewTab(record)
                  changeActiveTab(String(record.maMau))
                }
              }
            }}
          />
        </Menu.ItemGroup>
      </SubMenu>
      <SubMenu
        key='editList'
        title={
          <React.Fragment>
            <Icon type='user' />
            Danh sách yêu cầu điều chỉnh
          </React.Fragment>
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
          <Input placeholder='Mã mẫu, Tên mẫu' style={{ marginTop: '10px' }} />
          <ListTable
            style={{}}
            columns={columnsSmall}
            dataSource={dataSmall}
            size='small'
          />
        </Menu.ItemGroup>
      </SubMenu>
    </Menu>
  )
}

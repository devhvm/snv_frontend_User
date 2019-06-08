import React from 'react'
import { Input, Row, Table, Menu, Icon, Button, Form, Select } from 'antd'
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
          <>
            <Icon type='user' />
            Truy lục
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
          <Form
            style={{
              marginTop: '10px !important',
              width: '90%',
              margin: 'auto'
            }}
          >
            <Form.Item label='Mã mẫu: '>
              <Input placeholder='Mã mẫu' />
            </Form.Item>
            <Form.Item label='Tên mẫu: '>
              <Input placeholder='Tên mẫu' />
            </Form.Item>
            <Form.Item label='Cơ quan chủ trì: '>
              <Input placeholder='Cơ quan chủ trì' />
            </Form.Item>
            <Form.Item label='Trạng thái '>
              <Select defaultValue='1'>
                <Select.Option value='1'>Chờ ký duyệt</Select.Option>
                <Select.Option value='2'>Yêu cầu điều chỉnh</Select.Option>
                <Select.Option value='3'>Đã ký</Select.Option>
              </Select>
            </Form.Item>
            <Row type='flex' justify='end'>
              <Button
                type='primary'
                icon='search'
                style={{
                  margin: '0 15px 0 0',
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
          </Form>
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

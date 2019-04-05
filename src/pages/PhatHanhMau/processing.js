import React, { useState } from 'react'
import { Table, Layout, Tabs, Button, Input, Select, DatePicker, Form } from 'antd'
import styled from 'styled-components'
import moment from 'moment'
import Modal from 'antd/lib/modal'

const TabPane = Tabs.TabPane
const Option = Select.Option
const dateFormat = 'DD-MM-YYYY'

const ListTable = styled(Table)`
  margin-top: 20px;
`

const FormSearchMauPhatHanh = styled(Form)`
  display: grid;
  grid-template-columns: auto auto;
  width: 80%;
`

const ButtonSearchMauPhatHanh = styled(Button)`
  display: flex !important;
  margin: auto;
  right: 10%;
`

const InputSearchMauPhatHanh = styled(Input)`
  width: 95% !important;
`

const SelectSearchMauPhatHanh = styled(Select)`
  width: 95% !important;
`

const DatePickerSearchMauPhatHanh = styled(DatePicker)`
  width: 95% !important;
`

function MauBaoCao () {
  const data = [
    {
      key: '1',
      tieuchi: '0204 Số thanh niên là người khuyết tật',
      nhom: 'Dân tộc',
      danhmuc: 'Nhóm 1'
    },
    {
      key: '2',
      tieuchi: '0204 Số thanh niên là người khuyết tật',
      nhom: 'Dân tộc',
      danhmuc: 'Nhóm 2'
    },
    {
      key: '3',
      tieuchi: '0204 Số thanh niên là người khuyết tật',
      nhom: 'Dân tộc',
      danhmuc: 'Nhóm 3'
    },
    {
      key: '4',
      tieuchi: '0204 Số thanh niên là người khuyết tật',
      nhom: 'Dân tộc',
      danhmuc: 'Nhóm 4'
    },
    {
      key: '5',
      tieuchi: '0204 Số thanh niên là người khuyết tật',
      nhom: 'Dân tộc',
      danhmuc: 'Nhóm 5'
    },
    {
      key: '6',
      tieuchi: '0204 Số thanh niên là người khuyết tật',
      nhom: 'Dân tộc',
      danhmuc: 'Nhóm 6'
    },
    {
      key: '7',
      tieuchi: '0204 Số thanh niên là người khuyết tật',
      nhom: 'Dân tộc',
      danhmuc: 'Nhóm 7'
    },
    {
      key: '8',
      tieuchi: '0204 Số thanh niên là người khuyết tật',
      nhom: 'Dân tộc',
      danhmuc: 'Nhóm 8'
    },
    {
      key: '9',
      tieuchi: '0204 Số thanh niên là người khuyết tật',
      nhom: 'Dân tộc',
      danhmuc: 'Nhóm 9'
    },
    {
      key: '10',
      tieuchi: '0204 Số thanh niên là người khuyết tật',
      nhom: 'Dân tộc',
      danhmuc: 'Nhóm 10'
    },
    {
      key: '11',
      tieuchi: '0204 Số thanh niên là người khuyết tật',
      nhom: 'Loại tật',
      danhmuc: 'Nhóm 1'
    },
    {
      key: '12',
      tieuchi: '0204 Số thanh niên là người khuyết tật',
      nhom: 'Loại tật',
      danhmuc: 'Nhóm 2'
    },
    {
      key: '13',
      tieuchi: '0204 Số thanh niên là người khuyết tật',
      nhom: 'Loại tật',
      danhmuc: 'Nhóm 3'
    },
    {
      key: '14',
      tieuchi: '0204 Số thanh niên là người khuyết tật',
      nhom: 'Loại tật',
      danhmuc: 'Nhóm 4'
    },
    {
      key: '15',
      tieuchi: '0204 Số thanh niên là người khuyết tật',
      nhom: 'Loại tật',
      danhmuc: 'Nhóm 5'
    },
    {
      key: '16',
      tieuchi: '0204 Số thanh niên là người khuyết tật',
      nhom: 'Loại tật',
      danhmuc: 'Nhóm 6'
    },
    {
      key: '17',
      tieuchi: '0204 Số thanh niên là người khuyết tật',
      nhom: 'Mức độ',
      danhmuc: 'Nhóm 1'
    },
    {
      key: '18',
      tieuchi: '0204 Số thanh niên là người khuyết tật',
      nhom: 'Mức độ',
      danhmuc: 'Nhóm 2'
    },
    {
      key: '19',
      tieuchi: '0204 Số thanh niên là người khuyết tật',
      nhom: 'Mức độ',
      danhmuc: 'Nhóm 3'
    },
    {
      key: '20',
      tieuchi: '0204 Số thanh niên là người khuyết tật',
      nhom: 'Nguyên nhân',
      danhmuc: ''
    }
  ]

  const columns = [
    {
      title: 'Tuổi:',
      fixed: 'left',
      width: 300,
      children: [
        {
          title: 'Tiêu Chí',
          dataIndex: 'tieuchi',
          key: 'tieuchi',
          width: 120,
          render: (value, row, index) => {
            const obj = {
              children: value,
              props: {}
            }
            if (index === 0) {
              obj.props.rowSpan = 20
            }
            for (let i = 1; i <= 20; i++) {
              if (index === i) {
                obj.props.rowSpan = 0
              }
            }
            return obj
          }
        },
        {
          title: 'Nhóm',
          dataIndex: 'nhom',
          key: 'nhom',
          width: 120,
          render: (value, row, index) => {
            const obj = {
              children: value,
              props: {}
            }
            if (index === 0) {
              obj.props.rowSpan = 10
            }
            for (let i = 1; i <= 10; i++) {
              if (index === i) {
                obj.props.rowSpan = 0
              }
            }
            if (index === 10) {
              obj.props.rowSpan = 6
            }
            for (let i = 11; i <= 16; i++) {
              if (index === i) {
                obj.props.rowSpan = 0
              }
            }
            if (index === 16) {
              obj.props.rowSpan = 3
            }
            for (let i = 17; i <= 18; i++) {
              if (index === i) {
                obj.props.rowSpan = 0
              }
            }
            return obj
          }
        },
        {
          title: 'Danh Mục',
          dataIndex: 'danhmuc',
          key: 'danhmuc',
          width: 120
          // fixed: 'left',
        }
      ]
    },
    {
      title: '15',
      dataIndex: '15',
      key: '21',
      width: 120,
      children: [
        {
          title: 'Nam',
          width: 70,
          dataIndex: 'Nam_15'
        },
        {
          title: 'Nữ',
          width: 70,
          dataIndex: 'Nu_15'
        }
      ]
    },
    {
      title: '16',
      dataIndex: '15',
      key: '22',
      width: 120,
      children: [
        {
          title: 'Nam',
          width: 70
        },
        {
          title: 'Nữ',
          width: 70
        }
      ]
    },
    {
      title: '17',
      dataIndex: '15',
      key: '23',
      width: 120,
      children: [
        {
          title: 'Nam',
          width: 70
        },
        {
          title: 'Nữ',
          width: 70
        }
      ]
    },
    {
      title: '18',
      dataIndex: '15',
      key: '24',
      width: 120,
      children: [
        {
          title: 'Nam',
          width: 70
        },
        {
          title: 'Nữ',
          width: 70
        }
      ]
    },
    {
      title: '19',
      dataIndex: '15',
      key: '25',
      width: 120,
      children: [
        {
          title: 'Nam',
          width: 70
        },
        {
          title: 'Nữ',
          width: 70
        }
      ]
    },
    {
      title: '20',
      dataIndex: '15',
      key: '26',
      width: 120,
      children: [
        {
          title: 'Nam',
          width: 70
        },
        {
          title: 'Nữ',
          width: 70
        }
      ]
    },
    {
      title: '21',
      dataIndex: '15',
      key: '27',
      width: 120,
      children: [
        {
          title: 'Nam',
          width: 70
        },
        {
          title: 'Nữ',
          width: 70
        }
      ]
    },
    {
      title: '22',
      dataIndex: '15',
      key: '28',
      width: 120,
      children: [
        {
          title: 'Nam',
          width: 70
        },
        {
          title: 'Nữ',
          width: 70
        }
      ]
    },
    {
      title: '23',
      dataIndex: '15',
      key: '29',
      width: 120,
      children: [
        {
          title: 'Nam',
          width: 70
        },
        {
          title: 'Nữ',
          width: 70
        }
      ]
    }
  ]

  const columnsSmall = [{
    title: 'Mã Mẫu',
    dataIndex: 'maMau'
  }, {
    title: 'Tên Mẫu',
    dataIndex: 'tenMau'
  }]
  const dataSmall = [{
    key: '1',
    maMau: 32,
    tenMau: 'Báo Cáo Thanh Niên'
  }, {
    key: '2',
    maMau: 33,
    tenMau: 'Báo Cáo Thanh Niên'
  }, {
    key: '3',
    maMau: 34,
    tenMau: 'Báo Cáo Thanh Niên'
  }]

  const [maMauPhatHanh, setMaMauPhatHanh] = useState('')
  const [tenMauPhatHanh, setTenMauPhatHanh] = useState('')
  const [ngayPhatHanh, setNgayPhatHanh] = useState(moment().format(dateFormat))
  const [trangThai, setTrangThai] = useState('')
  const [visible, setVisible] = useState(false)

  return (
    <React.Fragment>
      <Layout>
        <Layout.Content style={{ background: '#fff' }}>
          <h3>Danh sách Phát Hành Mẫu Đang Xử Lí</h3>
          <Tabs defaultActiveKey='1'>
            <TabPane tab='Tab 1' key='1'>
              <FormSearchMauPhatHanh>
                <Form.Item label='Mã mẫu:'>
                  <InputSearchMauPhatHanh
                    placeholder='Nhập mã mẫu phát hành'
                    value={maMauPhatHanh}
                  />
                </Form.Item>
                <Form.Item label='Tên mẫu:'>
                  <InputSearchMauPhatHanh
                    placeholder='Nhập tên mẫu phát hành'
                    value={tenMauPhatHanh}
                  />
                </Form.Item>
                <Form.Item label='Ngày phát hành:'>
                  <DatePickerSearchMauPhatHanh defaultValue={moment(ngayPhatHanh, dateFormat)} placeholder='Nhập ngày phát hành' />
                </Form.Item>
                <Form.Item label='Chỉ tiêu:'>
                  <SelectSearchMauPhatHanh defaultValue='Chỉ tiêu'>
                    <Option value='Chỉ tiêu 1'>Tiêu chí 1</Option>
                    <Option value='Chỉ tiêu 2'>Tiêu chí 2</Option>
                  </SelectSearchMauPhatHanh>
                </Form.Item>
                <Form.Item label='Trạng thái:'>
                  <SelectSearchMauPhatHanh defaultValue='Đã phát hành'>
                    <Option value='Đã phát hành'>Đã phát hành</Option>
                    <Option value='Tạo mới'>Tạo mới</Option>
                    <Option value='Đã xoá'>Đã xoá</Option>
                  </SelectSearchMauPhatHanh>
                </Form.Item>
              </FormSearchMauPhatHanh>
              <div style={{ display: 'flex', width: '65%' }}>
                <ButtonSearchMauPhatHanh
                  type='primary'
                  onClick={() => setVisible(true)}
                >Xoá
                </ButtonSearchMauPhatHanh>
                <ButtonSearchMauPhatHanh type='primary'>Lưu Lại</ButtonSearchMauPhatHanh>
                <ButtonSearchMauPhatHanh type='primary'>Hoàn Thành</ButtonSearchMauPhatHanh>
              </div>
              <ListTable
                columns={columns}
                dataSource={data}
                bordered
                pagination={{ defaultPageSize: 20, pageSize: 20 }}
                scroll={{ x: 1630, y: 400 }}
                style={{ marginRight: '20px' }}
              />
            </TabPane>
            <TabPane tab='Tab 2' key='2'>Content of Tab Pane 2</TabPane>
            <TabPane tab='Tab 3' key='3'>Content of Tab Pane 3</TabPane>
          </Tabs>
        </Layout.Content>
        <Layout.Sider width={300} style={{ background: '#fff', borderLeft: '1px solid #ccc' }}>
          <Layout.Content>
            <Input placeholder='Tìm Kiếm' />
            <Button type='primary' style={{ marginLeft: '20px', marginTop: '10px' }}>Tạo Mới</Button>
            <ListTable style={{ marginLeft: '20px' }} columns={columnsSmall} dataSource={dataSmall} size='small' />
          </Layout.Content>
        </Layout.Sider>
        <Modal
          title='Basic Modal'
          visible={visible}
          onOk={() => setVisible(false)}
          onCancel={() => setVisible(false)}
        >
          <p>Mẫu Phát Hành được xoá sẽ không thể khôi phục được</p>
        </Modal>
      </Layout>
    </React.Fragment>
  )
}

export default MauBaoCao

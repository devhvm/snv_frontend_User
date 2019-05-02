import React, { useState } from 'react'
import {
  Table,
  Layout,
  Tabs,
  Button,
  Input,
  Select,
  DatePicker,
  Form,
  Row,
  Col
} from 'antd'
import styled from 'styled-components'
import moment from 'moment'
import CreateModal from '../../components/MauPhatHanh/CreateModal'
import DeleteModal from '../../components/MauPhatHanh/DeleteModal'
import CreateMenuSider from '../../components/MauPhatHanh/MenuSider/create'

const TabPane = Tabs.TabPane
const Option = Select.Option
const dateFormat = 'DD-MM-YYYY'

const FormSearchMauPhatHanh = styled(Form)`
  display: grid;
  grid-template-columns: auto auto;
  width: 80%;
`

const ButtonSearchMauPhatHanh = styled(Button)`
  margin-right: 30px;
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

export default function DangXuLi ({ data, getCoQuanChuTri }) {
  // useEffect(() => {
  //   getCoQuanChuTri()
  // }, [dataTest])

  console.log(data.coQuanChuTri)

  const dataTable = [
    {
      key: '1',
      table: {
        rows: [
          {
            tieu_chi_code: '',
            tieu_chi_name: '',
            nhom_danh_muc: [
              {
                nhom_danh_muc_code: '',
                nhom_danh_muc_name: '',
                danh_mucs: [
                  {
                    danh_muc_code: '',
                    danh_muc_name: ''
                  }
                ]
              }
            ]
          }
        ],
        columns: [
          {
            title: '',
            code: '',
            children: [
              {
                title: '',
                code: ''
              },
              {
                title: '',
                code: ''
              }
            ]
          }
        ]
      },
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

  const [maMauPhatHanh] = useState('')
  const [tenMauPhatHanh] = useState('')
  const [ngayPhatHanh] = useState(moment().format(dateFormat))
  // const [trangThai, setTrangThai] = useState('')
  const [visibleDeleteModal, setVisibleDeleteModal] = useState(false)
  const [visibleCreateModal, setVisibleCreateModal] = useState(false)
  // const [collapsed, setCollapsed] = useState(false)

  return (
    <Layout>
      <Layout.Content style={{ background: '#fff' }}>
        <Tabs defaultActiveKey='1'>
          <TabPane tab='Báo cáo thanh niên(new)' key='1'>
            <Row type='flex' justify='end'>
              <Row type='flex' justify='space-between'>
                <ButtonSearchMauPhatHanh
                  type='primary'
                  onClick={() => setVisibleDeleteModal(true)}
                >
                  Xoá
                </ButtonSearchMauPhatHanh>
                <ButtonSearchMauPhatHanh
                  type='primary'
                  style={{ marginLeft: '20px' }}
                >
                  Lưu Lại
                </ButtonSearchMauPhatHanh>
              </Row>
            </Row>
            <FormSearchMauPhatHanh>
              <Row>
                <Col span={21}>
                  <Row>
                    <Col span={12}>
                      <Form.Item label='Mã mẫu:'>
                        <InputSearchMauPhatHanh
                          placeholder='Nhập mã mẫu phát hành'
                          value={maMauPhatHanh}
                          disabled
                        />
                      </Form.Item>
                      <Form.Item label='Tên mẫu:'>
                        <InputSearchMauPhatHanh
                          placeholder='Nhập tên mẫu phát hành'
                          value={tenMauPhatHanh}
                        />
                      </Form.Item>
                      <Form.Item label='Người lập:'>
                        <InputSearchMauPhatHanh
                          placeholder='Nhập tên mẫu phát hành'
                          value={tenMauPhatHanh}
                          disabled
                        />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item label='Cơ quan chủ trì:'>
                        <InputSearchMauPhatHanh
                          placeholder='Nhập tên mẫu phát hành'
                          value={tenMauPhatHanh}
                          disabled
                        />
                      </Form.Item>
                      <Form.Item label='Ngày phát hành:'>
                        <DatePickerSearchMauPhatHanh
                          defaultValue={moment(ngayPhatHanh, dateFormat)}
                          placeholder='Nhập ngày phát hành'
                        />
                      </Form.Item>
                      <Form.Item label='Chọn phạm vi'>
                        <Input.Group compact>
                          <Select defaultValue='1'>
                            <Select.Option value='1'>Phạm vi</Select.Option>
                            <Select.Option value='2'>Except</Select.Option>
                          </Select>
                          <Input
                            style={{ width: 100, textAlign: 'center' }}
                            placeholder='Minimum'
                          />
                          <Input
                            style={{
                              width: 30,
                              borderLeft: 0,
                              pointerEvents: 'none',
                              backgroundColor: '#fff'
                            }}
                            placeholder='~'
                            disabled
                          />
                          <Input
                            style={{
                              width: 100,
                              textAlign: 'center',
                              borderLeft: 0
                            }}
                            placeholder='Maximum'
                          />
                        </Input.Group>
                      </Form.Item>
                    </Col>
                  </Row>
                </Col>
                <Col span={3}>
                  <Form.Item label='Ghi chú:'>
                    <Input.TextArea
                      placeholder='Ghi chú'
                      style={{
                        height: 70,
                        width: '300px',
                        maxWidth: 'unset'
                      }}
                    />
                  </Form.Item>
                </Col>
              </Row>
            </FormSearchMauPhatHanh>
            <Table
              columns={columns}
              dataSource={dataTable}
              bordered
              pagination={false}
              scroll={{ x: 1630, y: 400 }}
              style={{ marginRight: '20px' }}
            />
            <Row type='flex' justify='end'>
              <ButtonSearchMauPhatHanh type='primary'>
                Yêu Cầu Kí Duyệt
              </ButtonSearchMauPhatHanh>
            </Row>
          </TabPane>
          <TabPane tab='Báo cáo thanh niên(editing)' key='2'>
            <Row type='flex' justify='end'>
              <Row type='flex' justify='space-between'>
                <ButtonSearchMauPhatHanh
                  type='primary'
                  onClick={() => setVisibleDeleteModal(true)}
                >
                  Xoá
                </ButtonSearchMauPhatHanh>
                <ButtonSearchMauPhatHanh
                  type='primary'
                  style={{ marginLeft: '20px' }}
                >
                  Lưu Lại
                </ButtonSearchMauPhatHanh>
              </Row>
            </Row>
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
                <DatePickerSearchMauPhatHanh
                  defaultValue={moment(ngayPhatHanh, dateFormat)}
                  placeholder='Nhập ngày phát hành'
                />
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
            <Table
              columns={columns}
              dataSource={dataTable}
              bordered
              pagination={false}
              scroll={{ x: 1630, y: 400 }}
              style={{ marginRight: '20px' }}
            />
            <Row type='flex' justify='end'>
              <ButtonSearchMauPhatHanh type='primary'>
                Hoàn Thành
              </ButtonSearchMauPhatHanh>
            </Row>
          </TabPane>
        </Tabs>
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

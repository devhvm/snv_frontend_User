import React, { Fragment, useState } from 'react'
import { Col, DatePicker, Row, Table, Select, Form, Input, Button } from 'antd'
import moment from 'moment'
import styled from 'styled-components'
import DeleteModal from '../DeleteModal'
// import styled from 'styled-components'

const FormSearchMauPhatHanh = styled(Form)`
  display: grid;
  grid-template-columns: auto auto;
  width: 80%;
`

const InputSearchMauPhatHanh = styled(Input)`
  width: 95% !important;
`

const DatePickerSearchMauPhatHanh = styled(DatePicker)`
  width: 95% !important;
`

const ButtonTopTabItem = styled(Button)`
  margin-right: 40px;
`

const dateFormat = 'DD-MM-YYYY'

export default function TabItem ({ dataTienTrinh }) {
  const [maMauPhatHanh] = useState('')
  const [tenMauPhatHanh] = useState('')
  const [ngayPhatHanh] = useState(moment().format(dateFormat))
  const [visibleDeleteModal, setVisibleDeleteModal] = useState(false)
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

  return (
    <Fragment>
      <Row type='flex' justify='end'>
        <Row type='flex' justify='space-between'>
          <ButtonTopTabItem
            type='primary'
            onClick={() => setVisibleDeleteModal(true)}
          >
            Xoá
          </ButtonTopTabItem>
          <ButtonTopTabItem type='primary'>Lưu</ButtonTopTabItem>
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
                <Form.Item label='Ngày phát hành:'>
                  <DatePickerSearchMauPhatHanh
                    defaultValue={moment(ngayPhatHanh, dateFormat)}
                    placeholder='Nhập ngày phát hành'
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label='Người lập:'>
                  <InputSearchMauPhatHanh
                    placeholder='Nhập tên mẫu phát hành'
                    value={tenMauPhatHanh}
                    disabled
                  />
                </Form.Item>
                <Form.Item label='Cơ quan chủ trì:'>
                  <InputSearchMauPhatHanh
                    placeholder='Nhập tên mẫu phát hành'
                    value={tenMauPhatHanh}
                    disabled
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
                  height: 130,
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
        {dataTienTrinh &&
          dataTienTrinh.tienTrinhXuLys[0].tienTrinhKetThucs.map(
            (item, index) => {
              return (
                <Button
                  key={index}
                  style={{ marginTop: '10px', right: '2%' }}
                  type='primary'
                >
                  {item.name}
                </Button>
              )
            }
          )}
      </Row>
      <DeleteModal
        visible={visibleDeleteModal}
        closeModal={() => {
          setVisibleDeleteModal(false)
        }}
      />
    </Fragment>
  )
}

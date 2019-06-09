import React, { Fragment, useState } from 'react'
import { Col, Row, Table, Form, Input, Button } from 'antd'
// import moment from 'moment'
import styled from 'styled-components'
import DeleteModal from '../DeleteModal'
import EditTableModal from '../EditTableModal'
import InputItem from '../../InputItem'
import Spreadsheet from 'x-data-spreadsheet'

const FormSearchMauPhatHanh = styled(Form)`
  display: grid;
  grid-template-columns: auto auto;
  width: 80%;
  margin-top: 20px !important;
`

const ButtonTopTabItem = styled(Button)`
  margin-right: 40px;
`

// const dateFormat = 'DD-MM-YYYY'

function TabItem ({
  form,
  duLieuTienTrinh,
  mauPhatHanh,
  upDateDuLieuTienTrinh,
  deleteMauPhatHanh
}) {
  const [visibleDeleteModal, setVisibleDeleteModal] = useState(false)
  const [visibleEditModal, setVisibleEditModal] = useState(false)
  const [visibleEditTable, setVisibleEditTable] = useState(false)
  console.log('mauPhatHanh', mauPhatHanh)
  console.log('duLieuTienTrinh', duLieuTienTrinh)
  const initTieuChiRow = (index, tieuChiDetail) => {
    let count = 0
    let datas = []
    if (tieuChiDetail) {
      tieuChiDetail.noiDungs.map(item => {
        count += initNhomNoiDungDauVaoRow(
          index,
          tieuChiDetail.chiTieu,
          item,
          datas
        )
      })

      datas.map(item => {
        item.totalRowTieuChi = count
      })
    }
    return datas
  }

  const initNhomNoiDungDauVaoRow = (index, chiTieu, noiDung, datas) => {
    let count = 0
    let keyTieuChi = `${chiTieu.chiTieuCode}`
    let keyNoiDung = `${keyTieuChi}_${noiDung.noiDungCode}`

    if (noiDung) {
      noiDung.noiDungDauVaos.map(item => {
        count += initDanhMucRow(index, chiTieu, noiDung, item, datas)
      })

      datas.map(item => {
        if (item.key.indexOf(`${keyNoiDung}`)) {
          item.totalRowNoiDung = count
        }
      })
    }
    return count
  }

  const initDanhMucRow = (index, chiTieu, noiDung, nhom, datas) => {
    let count = 0
    let keyTieuChi = `${chiTieu.chiTieuCode}`
    let keyNoiDung = `${keyTieuChi}_${noiDung.noiDungCode}`
    let keyNhom = `${keyNoiDung}_${nhom.nhomDanhMucCode}`
    if (nhom) {
      nhom.danhMucs.map(item => {
        datas.push({
          key: `${keyNhom}_${item.danhMucCode}_${index}`,
          keyTieuChi: keyTieuChi,
          keyNoiDung: keyNoiDung,
          keyNhom: keyNhom,
          tieuchi: chiTieu.name,
          nhom: nhom.nhomDanhMucName,
          danhmuc: item.name
        })
        index++
        count++
      })

      datas.map(item => {
        if (item.key.indexOf(keyNhom) === 0) {
          item.totalRowNhom = count
        }
      })
    }
    return count
  }

  let dataTable = []

  const getDataTable = () => {
    if (mauPhatHanh.tieuChiDetails) {
      mauPhatHanh.tieuChiDetails.map((item, index) =>
        initTieuChiRow(index, item).map(item1 => {
          dataTable.push(item1)
        })
      )
    }
  }

  // const getDataTable = () => {
  //   if (dataMauPhatHanh.tieuChiDetails) {
  //     countTotalRowTieuChi(0, dataMauPhatHanh.tieuChiDetails[0]).map((item1) => {
  //       console.log(item1)
  //       dataTable.push(item1)
  //     })
  //   }
  // }
  //

  getDataTable()

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
              obj.props.rowSpan = row.totalRowTieuChi
            } else if (dataTable[index - 1].keyTieuChi !== row.keyTieuChi) {
              obj.props.rowSpan = row.totalRowTieuChi
            } else {
              obj.props.rowSpan = 0
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
              obj.props.rowSpan = row.totalRowNhom
            } else if (dataTable[index - 1].keyNhom !== row.keyNhom) {
              obj.props.rowSpan = row.totalRowNhom
            } else {
              obj.props.rowSpan = 0
            }
            return obj
          }
        },
        {
          title: 'Danh Mục',
          dataIndex: 'danhmuc',
          key: 'danhmuc',
          width: 120
        }
      ]
    },
    {
      title: '15',
      dataIndex: 'tuoi15',
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

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 }
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 }
    }
  }

  return (
    <Fragment>
      <Row type='flex' justify='end'>
        <Row type='flex' justify='space-between'>
          <ButtonTopTabItem
            type='primary'
            onClick={() => {
              setVisibleDeleteModal(true)
            }}
          >
            Xoá
          </ButtonTopTabItem>
          <ButtonTopTabItem type='primary'>Lưu</ButtonTopTabItem>
        </Row>
      </Row>
      <FormSearchMauPhatHanh {...formItemLayout}>
        <Row>
          <Col span={19}>
            <Row>
              <Col span={12}>
                <InputItem
                  form={form}
                  label='Mã mẫu:'
                  field='maMau'
                  rules={[
                    {
                      required: true,
                      message: 'Vui lòng không để trống thẻ này'
                    }
                  ]}
                  disabled='disabled'
                />
                <InputItem
                  form={form}
                  label='Tên mẫu:'
                  field='tenMau'
                  rules={[
                    {
                      required: true,
                      message: 'Vui lòng không để trống thẻ này'
                    }
                  ]}
                  // disabled='disabled'
                />
                <InputItem
                  form={form}
                  label='Ngày phát hành:'
                  field='ngayPhatHanh'
                  type='datepicker'
                  style={{ width: '220px' }}
                  rules={[
                    {
                      required: true,
                      message: 'Vui lòng không để trống thẻ này'
                    }
                  ]}
                  disabled='disabled'
                />
              </Col>
              <Col span={12}>
                <InputItem
                  form={form}
                  label='Người lập:'
                  field='nguoiLap'
                  rules={[
                    {
                      required: true,
                      message: 'Vui lòng không để trống thẻ này'
                    }
                  ]}
                  disabled='disabled'
                />
                <InputItem
                  form={form}
                  label='Cơ quan chủ trì:'
                  field='coQuanChuTri'
                  rules={[
                    {
                      required: true,
                      message: 'Vui lòng không để trống thẻ này'
                    }
                  ]}
                  disabled='disabled'
                />
                <Form.Item label='Chọn phạm vi'>
                  <Input.Group compact>
                    <InputItem
                      form={form}
                      placeholder='Phạm vi'
                      field='phamVi'
                      disabled='disabled'
                      style={{
                        width: 75,
                        textAlign: 'center',
                        borderRadius: 'unset'
                      }}
                    />
                    <InputItem
                      form={form}
                      placeholder='Min'
                      field='min'
                      rules={[
                        {
                          required: true,
                          message: 'Vui lòng không để trống thẻ này'
                        }
                      ]}
                      style={{
                        width: 55,
                        textAlign: 'center',
                        borderRadius: 'unset'
                      }}
                    />
                    <InputItem
                      form={form}
                      placeholder='~'
                      field='~'
                      style={{
                        width: 35,
                        borderLeft: 0,
                        pointerEvents: 'none',
                        backgroundColor: '#fff',
                        borderRadius: 'unset'
                      }}
                    />
                    <InputItem
                      form={form}
                      placeholder='Max'
                      field='max'
                      rules={[
                        {
                          required: true,
                          message: 'Vui lòng không để trống thẻ này'
                        }
                      ]}
                      style={{
                        width: 55,
                        textAlign: 'center',
                        borderLeft: 0,
                        borderRadius: 'unset'
                      }}
                    />
                  </Input.Group>
                </Form.Item>
              </Col>
            </Row>
          </Col>
          <Col span={5}>
            <InputItem
              form={form}
              label='Ghi chú'
              field='ghiChu'
              placeholder='Ghi chú'
              type='textarea'
              autosize={{ minRows: 5 }}
              style={{
                width: '300px',
                maxWidth: 'unset'
              }}
              rules={[
                { required: true, message: 'Vui lòng không để trống thẻ này' }
              ]}
            />
            {/* <div id='edit-table' /> */}
            <Button
              type='primary'
              onClick={() => {
                setVisibleEditTable(true)
                const editTable = document.getElementById('edit-table')
                if (typeof editTable !== 'undefined' && editTable != null) {
                  const s = new Spreadsheet(editTable)
                  s.loadData({
                    freeze: 'B3',
                    styles: [
                      {
                        bgcolor: '#f4f5f8',
                        textwrap: true,
                        color: '#900b09',
                        border: {
                          top: ['thin', '#0366d6'],
                          bottom: ['thin', '#0366d6'],
                          right: ['thin', '#0366d6'],
                          left: ['thin', '#0366d6']
                        }
                      }
                    ],
                    merges: ['C3:D4'],
                    rows: {
                      1: {
                        cells: {
                          0: { text: 'testingtesttestetst' },
                          2: { text: 'testing' }
                        }
                      },
                      2: {
                        cells: {
                          0: { text: 'render', style: 0 },
                          1: { text: 'Hello' },
                          2: { text: 'haha', merge: [1, 1] }
                        }
                      },
                      8: {
                        cells: {
                          8: { text: 'border test', style: 0 }
                        }
                      }
                    }
                  }).change(cdata => {
                    console.log(cdata)
                  })
                }
              }}
            >
              Edit
            </Button>
            <EditTableModal
              visible={visibleEditModal}
              closeModal={() => {
                setVisibleEditModal(false)
              }}
            />
          </Col>
        </Row>
      </FormSearchMauPhatHanh>
      {visibleEditTable ? (
        <div id='edit-table' />
      ) : (
        <Table
          columns={columns}
          dataSource={dataTable}
          bordered
          pagination={false}
          scroll={{ x: 1630, y: 400 }}
          style={{ marginRight: '20px' }}
        />
      )}
      <Row type='flex' justify='end'>
        {duLieuTienTrinh &&
          duLieuTienTrinh.tienTrinhXuLys.map(item =>
            item.duLieuTienTrinh.map(itemDuLieuTienTrinh => {
              if (
                itemDuLieuTienTrinh.duLieuCode === mauPhatHanh.mauPhatHanhCode
              ) {
                return item.tienTrinhKetThucs
                  ? item.tienTrinhKetThucs.map(ItemTienTrinhKetThucs => (
                    <>
                      <Button
                        key={`${ItemTienTrinhKetThucs.tienTrinhCode}_${
                          ItemTienTrinhKetThucs.id
                        }`}
                        style={{
                          marginTop: '10px',
                          right: '2%',
                          marginLeft: '10px'
                        }}
                        type='primary'
                        onClick={() => {
                          duLieuTienTrinh.tienTrinhXuLys[0].duLieuTienTrinh.map(
                            item => {
                              if (
                                item.duLieuCode ===
                                  mauPhatHanh.mauPhatHanhCode
                              ) {
                                upDateDuLieuTienTrinh({
                                  duLieuCode: itemDuLieuTienTrinh.duLieuCode,
                                  fromUserId: itemDuLieuTienTrinh.fromUserId,
                                  id: itemDuLieuTienTrinh.id,
                                  name: itemDuLieuTienTrinh.name,
                                  note: itemDuLieuTienTrinh.note,
                                  quyTrinhDonViId:
                                      itemDuLieuTienTrinh.quyTrinhDonViId,
                                  quyTrinhDonViName:
                                      itemDuLieuTienTrinh.quyTrinhDonViName,
                                  status: ItemTienTrinhKetThucs.status,
                                  tienTrinhCode:
                                      ItemTienTrinhKetThucs.tienTrinhCode,
                                  toUserId: ''
                                })
                              }
                            }
                          )
                        }}
                      >
                        {ItemTienTrinhKetThucs.name}
                        {console.log(
                          'ItemTienTrinhKetThucs',
                          ItemTienTrinhKetThucs
                        )}
                      </Button>
                    </>
                  ))
                  : ''
              }
            })
          )}
      </Row>
      <DeleteModal
        visible={visibleDeleteModal}
        closeModal={() => {
          setVisibleDeleteModal(false)
        }}
        deleteMauPhatHanh={deleteMauPhatHanh}
        mauPhatHanh={mauPhatHanh}
      />
    </Fragment>
  )
}

export default Form.create({ name: 'form_modal' })(TabItem)

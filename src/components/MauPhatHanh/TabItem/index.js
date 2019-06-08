import React, { useState } from 'react'
import { Row, Table, Button } from 'antd'
import DeleteModal from '../DeleteModal'
import FormItem from '../FormItem'
// import styled from 'styled-components'

export default function TabItem ({ dataTienTrinh, dataMauPhatHanh }) {
  const [visibleDeleteModal, setVisibleDeleteModal] = useState(false)
  console.log('dataMauPhatHanh', dataMauPhatHanh)
  console.log('dataMauPhatHanh.tieuChiDetails', dataMauPhatHanh.tieuChiDetails)

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
    if (dataMauPhatHanh.tieuChiDetails) {
      dataMauPhatHanh.tieuChiDetails.map((item, index) =>
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

  console.log(dataTable)

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
            // console.log('value', value)
            // console.log('row', row)
            // console.log('index', index)
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

  return (
    <>
      <FormItem setVisibleDeleteModal={setVisibleDeleteModal} />
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
    </>
  )
}

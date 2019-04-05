import React from 'react'
import { Table } from 'antd'
import styled from 'styled-components'

const ListTable = styled(Table)`
  margin-top: 20px;
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

  return (
    <React.Fragment>
      <h3>Danh sách Mẫu Báo Cáo</h3>
      <ListTable
        columns={columns}
        dataSource={data}
        bordered
        pagination={{ defaultPageSize: 20, pageSize: 20 }}
        scroll={{ x: 1630, y: 400 }}
      />
    </React.Fragment>
  )
}

export default MauBaoCao

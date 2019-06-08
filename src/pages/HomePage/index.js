import React from 'react'
import { Table } from 'antd'
// import logo from '../../../assets/img/logo.png'
import styled from 'styled-components'

const HomeTags = styled.div`
  display: flex;
  justify-content: space-between;
`

const HomeTag = styled.div`
  width: 30%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`

const HomeTagTitle = styled.div`
  color: #ffffff;
  left: 20px;
  position: absolute;
  top: 15px;
  font-size: 20px;
`

const HomeTagContent = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 30px;
  color: #ffffff;
`

const TableTitle = styled.div`
  font-size: 20px;
  margin: 15px 0px;
`

function HomePage () {
  const columns = [
    {
      title: 'STT',
      dataIndex: 'stt',
      key: 'stt',
      render: text => <a href='javascript:;'>{text}</a>
    },
    {
      title: 'CODE',
      dataIndex: 'code',
      key: 'code'
    },
    {
      title: 'NAME',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: '',
      key: 'link',
      dataIndex: 'link',
      render: link => <a href={link}>Đi đến</a>
    }
  ]

  const dataTable = [
    {
      key: '1',
      stt: '01',
      code: 'YCDC0001',
      name: 'Yêu cầu điều chỉnh 01',
      link: '/aaaa'
    },
    {
      key: '2',
      stt: '01',
      code: 'YCDC0002',
      name: 'Yêu cầu điều chỉnh 02',
      link: '/aaaa'
    },
    {
      key: '3',
      stt: '01',
      code: 'YCDC0003',
      name: 'Yêu cầu điều chỉnh 03',
      link: '/aaaa'
    }
  ]

  return (
    <>
      <HomeTags>
        <HomeTag style={{ background: '#ff7789' }}>
          <HomeTagTitle>YÊU CẦU ĐIỀU CHỈNH</HomeTagTitle>
          <HomeTagContent>2</HomeTagContent>
        </HomeTag>
        <HomeTag style={{ background: '#1dd0ee' }}>
          <HomeTagTitle>UỶ QUYỀN KÍ DUYỆT</HomeTagTitle>
          <HomeTagContent>0</HomeTagContent>
        </HomeTag>
        <HomeTag style={{ background: '#9fdb29' }}>
          <HomeTagTitle>YÊU CẦU KÍ DUYỆT</HomeTagTitle>
          <HomeTagContent>10</HomeTagContent>
        </HomeTag>
      </HomeTags>
      <TableTitle>YÊU CẦU ĐIỀU CHỈNH</TableTitle>
      <Table dataSource={dataTable} columns={columns} pagination={false} />
      <TableTitle>YÊU CẦU KÍ DUYỆT</TableTitle>
      <Table dataSource={dataTable} columns={columns} pagination={false} />
    </>
  )
}

export default HomePage

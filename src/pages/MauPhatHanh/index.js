import React, { useEffect } from 'react'
import { Button, Table, Divider, Input, Select, DatePicker, Form } from 'antd'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
// import axios from 'axios'
import { connect } from 'react-redux'
// import { getDataEditMauPhatHanh } from '../../reducers/mauphathanh'
// import moment from 'moment'

const Option = Select.Option
// const dateFormat = 'DD-MM-YYYY'

const AddButton = styled(Button)`
  width: 200px !important;
  float: right;
  margin-right: 20px;
  margin-bottom: 10px;
`

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

function MauPhatHanhListPage ({ data, getDataEditMauPhatHanh }) {
  useEffect(() => {}, [])

  // const [maMauPhatHanh, setMaMauPhatHanh] = useState('')
  // const [tenMauPhatHanh, setTenMauPhatHanh] = useState('')
  // const [ngayPhatHanh, setNgayPhatHanh] = useState(moment().format(dateFormat))
  // const [trangThai, setTrangThai] = useState('')

  const dataTable = [
    {
      key: '1',
      stt: 1,
      maMauPhatHanh: '123',
      tenMauPhatHanh: 'AAAA',
      ngayPhatHanh: '25-06-2019',
      trangThai: 'Đã phát hành'
    },
    {
      key: '2',
      stt: 2,
      maMauPhatHanh: '234',
      tenMauPhatHanh: 'BBBB',
      ngayPhatHanh: '26-02-2019',
      trangThai: 'Đã xoá'
    },
    {
      key: '3',
      stt: 3,
      maMauPhatHanh: '567',
      tenMauPhatHanh: 'CCCC',
      ngayPhatHanh: '17-01-2019',
      trangThai: 'Đã phát hành'
    },
    {
      key: '4',
      stt: 4,
      maMauPhatHanh: '891',
      tenMauPhatHanh: 'DDDD',
      ngayPhatHanh: '12-08-2019',
      trangThai: 'Đã phát hành'
    },
    {
      key: '5',
      stt: 5,
      maMauPhatHanh: '234',
      tenMauPhatHanh: 'EEEE',
      ngayPhatHanh: '16-07-2019',
      trangThai: 'Đã xoá'
    }
  ]

  const columns = [
    {
      title: 'STT',
      dataIndex: 'stt',
      key: 'stt'
      // render: text => <a href='javascript:;'>{text}</a>
    },
    {
      title: 'Mã mẫu phát hành',
      dataIndex: 'maMauPhatHanh',
      key: 'maMauPhatHanh'
    },
    {
      title: 'Tên mẫu phát hành',
      dataIndex: 'tenMauPhatHanh',
      key: 'tenMauPhatHanh'
    },
    {
      title: 'Ngày phát hành',
      dataIndex: 'ngayPhatHanh',
      key: 'ngayPhatHanh'
    },
    {
      title: 'Trạng thái',
      dataIndex: 'trangThai',
      key: 'trangThai'
    },
    {
      title: 'Thao tác',
      key: 'thaotac',
      render: record => (
        <span>
          <Link
            to={{
              pathname: '/mauphathanh/edit',
              state: record
            }}
          >
            Sửa
          </Link>
          <Divider type='vertical' />
          <a href='javascript:;'>Xoá</a>
        </span>
      )
    }
  ]

  return (
    <React.Fragment>
      <FormSearchMauPhatHanh>
        <Form.Item label='Mã mẫu:'>
          <InputSearchMauPhatHanh
            placeholder='Nhập mã mẫu phát hành'
            // value={maMauPhatHanh}
          />
        </Form.Item>
        <Form.Item label='Tên mẫu:'>
          <InputSearchMauPhatHanh
            placeholder='Nhập tên mẫu phát hành'
            // value={tenMauPhatHanh}
          />
        </Form.Item>
        <Form.Item label='Ngày phát hành:'>
          <DatePickerSearchMauPhatHanh
            // defaultValue={moment(ngayPhatHanh, dateFormat)}
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
      <ButtonSearchMauPhatHanh type='primary'>Tìm Kiếm</ButtonSearchMauPhatHanh>
      <h3>Danh sách Mẫu Phát Hành</h3>
      <Link to='/mauphathanh/add'>
        <AddButton type='primary'>Tạo mới</AddButton>
      </Link>
      <ListTable columns={columns} dataSource={dataTable} />
    </React.Fragment>
  )
}

export default connect(
  state => ({
    data: state
  }),
  {
    // getDataEditMauPhatHanh
  }
)(MauPhatHanhListPage)

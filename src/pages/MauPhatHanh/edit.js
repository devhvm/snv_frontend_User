import React, { Fragment, useState } from 'react'
import { Button, Form, Input, Select, DatePicker } from 'antd'
import styled from 'styled-components'
import moment from 'moment'

const Option = Select.Option
const dateFormat = 'DD-MM-YYYY'

const FormEditMauPhatHanh = styled(Form)`
  display: grid;
  grid-template-columns: auto auto;
  width: 80%;
`

const ButtonEditMauPhatHanh = styled(Button)`
  display: flex !important;
  margin: auto;
  right: 10%;
`

const InputEditMauPhatHanh = styled(Input)`
  width: 95% !important;
`

const SelectEditMauPhatHanh = styled(Select)`
  width: 95% !important;
`

const DatePickerEditMauPhatHanh = styled(DatePicker)`
  width: 95% !important;
`

function MauPhatHanhEditPage (data) {
  console.log('data', data.location.state)
  const [maMauPhatHanh, setMaMauPhatHanh] = useState(data.location.state.maMauPhatHanh ? data.location.state.maMauPhatHanh : '')
  const [tenMauPhatHanh, setTenMauPhatHanh] = useState(data.location.state.tenMauPhatHanh ? data.location.state.tenMauPhatHanh : '')
  const [ngayPhatHanh, setNgayPhatHanh] = useState(data.location.state.ngayPhatHanh ? data.location.state.ngayPhatHanh : '')
  const [trangThai, setTrangThai] = useState(data.location.state.trangThai ? data.location.state.trangThai : '')

  return (
    <Fragment>
      <h3>Sửa Mẫu Phát Hành</h3>
      <FormEditMauPhatHanh>
        <Form.Item label='Mã mẫu:'>
          <InputEditMauPhatHanh
            placeholder='Nhập mã mẫu phát hành'
            value={maMauPhatHanh}
          />
        </Form.Item>
        <Form.Item label='Tên mẫu:'>
          <InputEditMauPhatHanh
            placeholder='Nhập tên mẫu phát hành'
            value={tenMauPhatHanh}
          />
        </Form.Item>
        <Form.Item label='Ngày phát hành:'>
          <DatePickerEditMauPhatHanh defaultValue={moment(ngayPhatHanh, dateFormat)} placeholder='Nhập ngày phát hành' />
        </Form.Item>
        <Form.Item label='Chỉ tiêu:'>
          <SelectEditMauPhatHanh defaultValue='Chỉ tiêu'>
            <Option value='Chỉ tiêu 1'>Tiêu chí 1</Option>
            <Option value='Chỉ tiêu 2'>Tiêu chí 2</Option>
          </SelectEditMauPhatHanh>
        </Form.Item>
        <Form.Item label='Trạng thái:'>
          <SelectEditMauPhatHanh defaultValue='Đã phát hành'>
            <Option value='Đã phát hành'>Đã phát hành</Option>
            <Option value='Tạo mới'>Tạo mới</Option>
            <Option value='Đã xoá'>Đã xoá</Option>
          </SelectEditMauPhatHanh>
        </Form.Item>
      </FormEditMauPhatHanh>
      <ButtonEditMauPhatHanh type='primary'>Sửa</ButtonEditMauPhatHanh>
    </Fragment>
  )
}
export default MauPhatHanhEditPage

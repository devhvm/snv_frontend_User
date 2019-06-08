import React, { useState } from 'react'
import { Form, Input, Row, Col, DatePicker, Button } from 'antd'
import moment from '../TabItem'
import styled from 'styled-components'

const dateFormat = 'DD-MM-YYYY'

const FormSearchMauPhatHanh = styled(Form)`
  display: grid;
  grid-template-columns: auto auto;
  width: 80%;
  margin-top: 20px !important;
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

export default function FormItem ({ setVisibleDeleteModal }) {
  const [maMauPhatHanh] = useState('')
  const [tenMauPhatHanh] = useState('')
  const [ngayPhatHanh] = useState(moment().format(dateFormat))
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
    <>
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
      <FormSearchMauPhatHanh {...formItemLayout}>
        <Row>
          <Col span={19}>
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
                    <Input
                      style={{ width: 75, textAlign: 'center' }}
                      placeholder='Phạm vi'
                      disabled
                    />
                    <Input
                      style={{ width: 55, textAlign: 'center' }}
                      placeholder='Min'
                    />
                    <Input
                      style={{
                        width: 35,
                        borderLeft: 0,
                        pointerEvents: 'none',
                        backgroundColor: '#fff'
                      }}
                      placeholder='~'
                      disabled
                    />
                    <Input
                      style={{
                        width: 55,
                        textAlign: 'center',
                        borderLeft: 0
                      }}
                      placeholder='Max'
                    />
                  </Input.Group>
                </Form.Item>
              </Col>
            </Row>
          </Col>
          <Col span={5}>
            <Form.Item label='Ghi chú:'>
              <Input.TextArea
                placeholder='Ghi chú'
                style={{
                  height: 95,
                  width: '300px',
                  maxWidth: 'unset',
                  marginTop: 5
                }}
              />
            </Form.Item>
          </Col>
        </Row>
      </FormSearchMauPhatHanh>
    </>
  )
}

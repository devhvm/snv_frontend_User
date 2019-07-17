import React, { useEffect, useState } from 'react'
import { Row, Col, Button, Form, Upload, Icon } from 'antd'
// import TaoMoiDonViChuQuan from './TaoMoi'
// import ChiTietDonViChuQuan from './ChiTiet'

const { Item } = Form
const { Dragger } = Upload

function DonViChuQuan ({
  form,
  donViChuQuanList,
  donViChuQuanEditing,
  getDonViChuQuan,
  getDonViChuQuanEditing,
  editDonViChuQuan,
  addDonViChuQuan,
  deleteDonViChuQuan
}) {
  // const { Column } = Table
  const [file, setFile] = useState()
  // const [addVisible, setAddVisible] = useState(false)
  // const [editVisible, setEditVisible] = useState(false)
  useEffect(() => {
    // getDonViChuQuan()
  }, [])

  // const dataTable =
  //   donViChuQuanList &&
  //   donViChuQuanList.map((item, index) => ({
  //     key: item.id,
  //     ct: index,
  //     name: item.name,
  //     soLuongTieuChi: item.soLuongTieuChi
  //   }))

  const onChangeFile = file => {
    setFile(file)
    return false
  }

  const resetFileField = e => {
    if (Array.isArray(e)) {
      return e
    }
    return e && e.fileList
  }

  return (
    <>
      <Form>
        <Item label='Upload File'>
          {form.getFieldDecorator('file', {
            valuePropName: 'fileList',
            getValueFromEvent: resetFileField,
            rules: [
              { required: true, message: '画像ファイルを選択してください' }
            ]
          })(
            <Dragger
              beforeUpload={onChangeFile}
              listType='picture'
              multiple={false}
            >
              <p className='ant-upload-drag-icon'>
                <Icon type='inbox' />
              </p>
              <p className='ant-upload-text'>
                Click or drag file to this area to upload
              </p>
              <p className='ant-upload-hint'>Support for a single upload.</p>
            </Dragger>
          )}
        </Item>
      </Form>
      <Row>
        <Col col={4} offset={21}>
          <Button
            style={{ marginBottom: '20px' }}
            type='primary'
            onClick={() => {
              const formData = new FormData()
              formData.append('file', file)
            }}
          >
            Send
          </Button>
        </Col>
      </Row>
      {/* <PageHeader title='[Tên Mẫu Hạng Mục Báo Cáo]' /> */}
      {/* <Table dataSource={dataTable}> */}
      {/* <Column title='CT' dataIndex='ct' key='ct' /> */}
      {/* <Column title='Mã' dataIndex='code' key='code' /> */}
      {/* <Column title='Hạng Mục' dataIndex='hangMuc' key='hangMuc' /> */}
      {/* <Column title='Tên Hạng Mục' dataIndex='name' key='name' /> */}
      {/* <Column title='Số liệu' dataIndex='soLieu' key='soLieu' /> */}
      {/* <Column */}
      {/* title='' */}
      {/* key='action' */}
      {/* render={(text, record) => ( */}
      {/* <span> */}
      {/* <a */}
      {/* onClick={() => { */}
      {/* // setEditVisible(true) */}
      {/* getDonViChuQuanEditing(record.key) */}
      {/* }} */}
      {/* > */}
      {/* Cập nhật */}
      {/* </a> */}
      {/* <Divider type='vertical' /> */}
      {/* <a */}
      {/* onClick={() => { */}
      {/* deleteDonViChuQuan(record.key) */}
      {/* }} */}
      {/* > */}
      {/* Xoá */}
      {/* </a> */}
      {/* </span> */}
      {/* )} */}
      {/* /> */}
      {/* </Table> */}
      {/* <Row style={{ marginTop: '20px' }}> */}
      {/* <Col col={4} offset={18}> */}
      {/* <Button style={{ marginBottom: '20px' }} type='primary' icon='plus'> */}
      {/* Lưu */}
      {/* </Button> */}
      {/* <Button */}
      {/* style={{ marginBottom: '20px', marginLeft: '20px' }} */}
      {/* type='primary' */}
      {/* icon='plus' */}
      {/* > */}
      {/* Duyệt */}
      {/* </Button> */}
      {/* </Col> */}
      {/* </Row> */}
      {/* <TaoMoiDonViChuQuan */}
      {/* addVisible={addVisible} */}
      {/* setAddVisible={setAddVisible} */}
      {/* addDonViChuQuan={addDonViChuQuan} */}
      {/* /> */}
    </>
  )
}
export default Form.create({ name: 'form_add_modal' })(DonViChuQuan)

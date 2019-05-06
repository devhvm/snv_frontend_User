import React from 'react'
import { Modal, Form, Input, Select, Row, Col } from 'antd'

export default function CreateModal ({
  visible,
  closeModal,
  coQuanChuTri,
  mauBaoCao,
  tieuChi,
  getTieuChi
}) {
  // const dataSelect =
  //   coQuanChuTri &&
  //   coQuanChuTri.map((item, i) => (
  //     <Select.Option key={item.id} value={item.id}>
  //       {item.name}
  //     </Select.Option>
  //   ))

  return (
    <Modal
      title='Tạo mới mẫu phát hành'
      visible={visible}
      onOk={() => closeModal()}
      onCancel={() => closeModal()}
      width={800}
      cancelText='Huỷ'
      okText='Tạo'
    >
      <Form>
        <Row>
          <Col span={11}>
            <Form.Item label='Mã mẫu: '>
              <Input />
            </Form.Item>
            <Form.Item label='Tên mẫu: '>
              <Input />
            </Form.Item>
          </Col>
          <Col span={11} style={{ marginLeft: '20px' }}>
            <Form.Item label='Mẫu phát hành:'>
              <Select
              // defaultValue={coQuanChuTri ? coQuanChuTri[0].name : ''}
              // value={coQuanChuTri ? coQuanChuTri[0].name : ''}
              // onSelect={value => {
              //   getTieuChi(value)
              // }}
              >
                {/* {dataSelect} */}
              </Select>
            </Form.Item>
            <Form.Item label='Kỳ công bố:'>
              <Select
              // defaultValue={coQuanChuTri ? coQuanChuTri[0].name : ''}
              // value={coQuanChuTri ? coQuanChuTri[0].name : ''}
              // onSelect={value => {
              //   getTieuChi(value)
              // }}
              >
                {/* {dataSelect} */}
              </Select>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  )
}

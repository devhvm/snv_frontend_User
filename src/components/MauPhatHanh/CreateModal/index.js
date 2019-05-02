import React from 'react'
import { Modal, Form, Input, Select, Row, Col, Table } from 'antd'
// import styled from 'styled-components'

export default function CreateModal ({ visible, closeModal, coQuanChuTri }) {
  const columns = [
    {
      title: 'Code',
      dataIndex: 'code',
      key: 'code'
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Kì công bố',
      dataIndex: 'kicongbo',
      key: 'kicongbo'
    }
  ]

  // const dataTable = (coQuanChuTri && coQuanChuTri.map((item, i) => ({
  //   key: item.maDinhDanhCode,
  //
  // })))

  const dataSelect =
    coQuanChuTri &&
    coQuanChuTri.map((item, i) => (
      <Select.Option key={item.maDinhDanhCode} value={item.maDinhDanhCode}>
        {item.name}
      </Select.Option>
    ))

  return (
    <Modal
      title='Tạo mới mẫu phát hành'
      visible={visible}
      onOk={() => closeModal()}
      onCancel={() => closeModal()}
      width={800}
    >
      <Form>
        <Row>
          <Col span={11}>
            <Form.Item label='Mã mẫu phát hành'>
              <Input />
            </Form.Item>
            <Form.Item label='Đơn vị chủ trì'>
              <Select
                defaultValue={coQuanChuTri ? coQuanChuTri[0].name : ''}
                value={coQuanChuTri ? coQuanChuTri[0].name : ''}
                // size={size}
                // style={{ width: '32%' }}
                // onChange={this.handleCurrencyChange}
              >
                {dataSelect}
              </Select>
            </Form.Item>
            <Form.Item label='Tên mẫu phát hành'>
              <Input />
            </Form.Item>
          </Col>
          <Col span={11} style={{ marginLeft: '20px' }}>
            <Form.Item label='Đối tượng'>
              <Input />
            </Form.Item>
            <Form.Item label='Phạm vi'>
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
                  style={{ width: 100, textAlign: 'center', borderLeft: 0 }}
                  placeholder='Maximum'
                />
              </Input.Group>
            </Form.Item>
          </Col>
        </Row>
        <Form.Item label='Tiêu chí'>
          <Table
            columns={columns}
            // dataSource={dataTable}
          />
        </Form.Item>
      </Form>
    </Modal>
  )
}

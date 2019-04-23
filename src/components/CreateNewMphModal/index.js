import React from 'react'
import { Modal, Form, Input, Select } from 'antd'
// import styled from 'styled-components'

export default function CreateNewMphModal ({ visible, closeModal }) {
  return (
    <Modal
      title='Tạo mới mẫu phát hành'
      visible={visible}
      onOk={() => closeModal()}
      onCancel={() => closeModal()}
    >
      <Form>
        <Form.Item label='Code'>
          <Input />
        </Form.Item>
        <Form.Item label='Name'>
          <Input />
        </Form.Item>
        <Form.Item label='Đơn vị chủ trì'>
          <Select
            value='1'
            // size={size}
            // style={{ width: '32%' }}
            // onChange={this.handleCurrencyChange}
          >
            <Select.Option key='1' value='1'>
              Đơn vị 1
            </Select.Option>
            <Select.Option key='2' value='2'>
              Đơn vị 2
            </Select.Option>
            <Select.Option key='3' value='3'>
              Đơn vị 3
            </Select.Option>
            <Select.Option key='4' value='4'>
              Đơn vị 4
            </Select.Option>
            <Select.Option key='5' value='5'>
              Đơn vị 5
            </Select.Option>
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  )
}

import React from 'react'
import { Modal, Form, Input, Select, List, Icon } from 'antd'
// import styled from 'styled-components'

export default function CreateNewMphModal ({ visible, closeModal }) {
  const data = ['Tiêu chí 1', 'Tiêu chí 2']

  return (
    <Modal
      title='Tạo mới mẫu phát hành'
      visible={visible}
      onOk={() => closeModal()}
      onCancel={() => closeModal()}
      // style={{ width: '100%' }}
    >
      <Form>
        <div>
          <Form.Item label='Mã mẫu phát hành'>
            <Input />
          </Form.Item>
          <Form.Item label='Tên mẫu phát hành'>
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
        </div>
        <div>
          <List
            header={<div>Tiêu chí</div>}
            // footer={<div>Footer</div>}
            bordered={false}
            dataSource={data}
            renderItem={item => (
              <List.Item>
                <Icon type='check-square' />
                {item}
              </List.Item>
            )}
          />
          <Form.Item label='Đối tượng'>
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
            </Select>
          </Form.Item>
          <Form.Item>
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
        </div>
      </Form>
    </Modal>
  )
}

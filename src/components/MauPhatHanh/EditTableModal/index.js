import React from 'react'
import { Modal } from 'antd'

export default function EditTableModal ({ visible, closeModal }) {
  return (
    <Modal
      title='Basic Modal'
      visible={visible}
      onOk={() => closeModal()}
      onCancel={() => closeModal()}
    >
      {/* <div id='edit-table' /> */}
    </Modal>
  )
}

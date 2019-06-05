import React from 'react'
import { Modal } from 'antd'
// import styled from 'styled-components'

export default function EditTableModal ({ visible, closeModal }) {
  return (
    <Modal
      title='Basic Modal'
      visible={visible}
      onOk={() => closeModal()}
      onCancel={() => closeModal()}
    >
      asd
    </Modal>
  )
}

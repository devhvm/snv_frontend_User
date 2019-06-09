import React from 'react'
import { Modal } from 'antd'
// import styled from 'styled-components'

export default function DeleteModal ({
  visible,
  closeModal,
  deleteMauPhatHanh,
  mauPhatHanh
}) {
  return (
    <Modal
      title='Basic Modal'
      visible={visible}
      onOk={() => {
        deleteMauPhatHanh(mauPhatHanh.mauPhatHanhCode)
        closeModal()
      }}
      onCancel={() => closeModal()}
    >
      <p>Mẫu Phát Hành được xoá sẽ không thể khôi phục được</p>
    </Modal>
  )
}

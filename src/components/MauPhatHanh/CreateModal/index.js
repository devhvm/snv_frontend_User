import React, { useState } from 'react'
import { Modal, Form, Input, Select, Row, Col, Table } from 'antd'
// import styled from 'styled-components'

export default function CreateModal ({
  visible,
  closeModal,
  coQuanChuTriList,
  duLieuTienTrinh,
  mauBaoCao,
  tieuChi,
  getTieuChiByCoQuanChuTri,
  addMauPhatHanh
}) {
  const [maMauPhatHanh, setMaMauPhatHanh] = useState('')
  const [tenMauPhatHanh, setTenMauPhatHanh] = useState('')
  const [coQuanChuTri, setCoQuanChuTri] = useState('')
  const [phamViMin, setphamViMin] = useState(0)
  const [phamViMax, setphamViMax] = useState(0)
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

  const dataTable =
    tieuChi &&
    tieuChi.map((item, i) => ({
      key: item.id,
      code: item.id,
      name: item.chiTieu.name,
      kicongbo: item.kyCongBo.name
    }))

  const dataSelect =
    coQuanChuTriList &&
    coQuanChuTriList.map((item, i) => (
      <Select.Option key={String(item.id)} value={JSON.stringify(item)}>
        {item.name}
      </Select.Option>
    ))

  return (
    <Modal
      title='Tạo mới mẫu phát hành'
      visible={visible}
      onOk={() => {
        closeModal()
        addMauPhatHanh({
          idCoQuanChuTri: coQuanChuTri.id,
          maCoQuanChuTri: coQuanChuTri.maDinhDanhCode,
          maMauPhatHanh: maMauPhatHanh,
          max: Number(phamViMin),
          min: Number(phamViMax),
          note: '',
          quyTrinhDonViId: duLieuTienTrinh
            ? duLieuTienTrinh.quyTrinhDonViId
            : 0,
          quyTrinhDonViName: duLieuTienTrinh ? duLieuTienTrinh.name : '',
          status: duLieuTienTrinh
            ? duLieuTienTrinh.tienTrinhXuLys[0].duLieuTienTrinh[0].status
            : '',
          tenMauPhatHanh: tenMauPhatHanh,
          tienTrinhCode: duLieuTienTrinh
            ? duLieuTienTrinh.tienTrinhXuLys[0].tienTrinhBatDau.tienTrinhCode
            : ''
        })
      }}
      onCancel={() => closeModal()}
      width={800}
      cancelText='Huỷ'
      okText='Tạo'
    >
      <Form>
        <Row>
          <Col span={11}>
            <Form.Item label='Mã mẫu phát hành'>
              <Input
                onChange={e => {
                  setMaMauPhatHanh(e.target.value)
                }}
              />
            </Form.Item>
            <Form.Item label='Tên mẫu phát hành'>
              <Input
                onChange={e => {
                  setTenMauPhatHanh(e.target.value)
                }}
              />
            </Form.Item>
            <Form.Item label='Đơn vị chủ trì'>
              <Select
                defaultValue=''
                value={coQuanChuTriList ? coQuanChuTriList[0].name : ''}
                onSelect={value => {
                  getTieuChiByCoQuanChuTri(JSON.parse(value).id)
                  setCoQuanChuTri(JSON.parse(value))
                }}
              >
                {dataSelect}
              </Select>
            </Form.Item>
          </Col>
          <Col span={11} style={{ marginLeft: '20px' }}>
            <Form.Item label='Loại báo cáo'>
              <Input value={mauBaoCao} />
            </Form.Item>
            <Form.Item label='Phạm vi'>
              <Input.Group compact>
                <Select defaultValue='1'>
                  <Select.Option value='1'>Phạm vi</Select.Option>
                </Select>
                <Input
                  style={{ width: 100, textAlign: 'center' }}
                  placeholder='Minimum'
                  type='number'
                  onChange={e => {
                    setphamViMin(e.target.value)
                  }}
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
                  type='number'
                  onChange={e => {
                    setphamViMax(e.target.value)
                  }}
                />
              </Input.Group>
            </Form.Item>
          </Col>
        </Row>
        <Form.Item label='Tiêu chí'>
          <Table columns={columns} dataSource={dataTable} pagination={false} />
        </Form.Item>
      </Form>
    </Modal>
  )
}

import React, { useEffect } from 'react'
import { PageHeader, Table, Divider, Row, Col, Button } from 'antd'
// import TaoMoiDonViChuQuan from './TaoMoi'
// import ChiTietDonViChuQuan from './ChiTiet'

export default function DonViChuQuan ({
  donViChuQuanList,
  donViChuQuanEditing,
  getDonViChuQuan,
  getDonViChuQuanEditing,
  editDonViChuQuan,
  addDonViChuQuan,
  deleteDonViChuQuan
}) {
  const { Column } = Table
  // const [addVisible, setAddVisible] = useState(false)
  // const [editVisible, setEditVisible] = useState(false)
  useEffect(() => {
    // getDonViChuQuan()
  }, [])

  const dataTable =
    donViChuQuanList &&
    donViChuQuanList.map((item, index) => ({
      key: item.id,
      ct: index,
      name: item.name,
      soLuongTieuChi: item.soLuongTieuChi
    }))

  return (
    <>
      <PageHeader title='[Tên Mẫu Hạng Mục Báo Cáo]' />
      <Row>
        <Col col={4} offset={21}>
          <Button
            style={{ marginBottom: '20px' }}
            type='primary'
            icon='plus'
            // onClick={() => {
            //   setAddVisible(true)
            // }}
          >
            Tạo mới
          </Button>
        </Col>
      </Row>
      <Table dataSource={dataTable}>
        <Column title='CT' dataIndex='ct' key='ct' />
        <Column title='Mã' dataIndex='code' key='code' />
        <Column title='Hạng Mục' dataIndex='hangMuc' key='hangMuc' />
        <Column title='Tên Hạng Mục' dataIndex='name' key='name' />
        <Column title='Số liệu' dataIndex='soLieu' key='soLieu' />
        <Column
          title=''
          key='action'
          render={(text, record) => (
            <span>
              <a
                onClick={() => {
                  // setEditVisible(true)
                  getDonViChuQuanEditing(record.key)
                }}
              >
                Cập nhật
              </a>
              <Divider type='vertical' />
              <a
                onClick={() => {
                  deleteDonViChuQuan(record.key)
                }}
              >
                Xoá
              </a>
            </span>
          )}
        />
      </Table>
      <Row style={{ marginTop: '20px' }}>
        <Col col={4} offset={18}>
          <Button style={{ marginBottom: '20px' }} type='primary' icon='plus'>
            Lưu
          </Button>
          <Button
            style={{ marginBottom: '20px', marginLeft: '20px' }}
            type='primary'
            icon='plus'
          >
            Duyệt
          </Button>
        </Col>
      </Row>
      {/* <TaoMoiDonViChuQuan */}
      {/* addVisible={addVisible} */}
      {/* setAddVisible={setAddVisible} */}
      {/* addDonViChuQuan={addDonViChuQuan} */}
      {/* /> */}
    </>
  )
}

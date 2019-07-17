import React, { useEffect } from 'react'
import { Row, Col, Button, Form, Table, Divider } from 'antd'
// import TaoMoiDonViChuQuan from './TaoMoi'
// import ChiTietDonViChuQuan from './ChiTiet'

const { Column } = Table

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

  return (
    <>
      {/* <PageHeader title='[Tên Mẫu Hạng Mục Báo Cáo]' /> */}
      <Table
      // dataSource={dataTable}
      >
        <Column title='Tên' dataIndex='name' key='name' />
        <Column title='Nhóm' dataIndex='nhom' key='nhom' />
        <Column title='Danh Mục' dataIndex='danhMuc' key='danhMuc' />
        <Column title='Tuổi' dataIndex='age' key='age' />
        <Column title='Số lượng' dataIndex='soLuong' key='soLuong' />
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
export default Form.create({ name: 'form_add_modal' })(DonViChuQuan)

import React, { useEffect } from 'react'
import { Tabs } from 'antd'
import TabItem from '../TabItem'

const TabPane = Tabs.TabPane

export default function TabList ({
  tab,
  fecthTab,
  changeTabList,
  changeActiveTab
}) {
  console.log(tab)

  const tabList = tab.tabList
  const activeTab = tab.activeTab

  useEffect(() => {
    fecthTab()
  }, [])

  // const [activeTab, setActiveTab] = useState(1)

  const onEdit = (targetKey, action) => {
    if (action === 'remove') remove(targetKey)
  }

  // const add = () => {
  //   const panes = tabList
  //   const activeKey = String(Math.random())
  //   panes.push({ title: tab.tenMau, content: 'Content of new Tab', key: tab.maMau })
  //   changeActiveTab(activeKey)
  //   changeTabList(panes)
  // }

  const remove = targetKey => {
    let activeKey = activeTab
    console.log('activeKey', activeKey)
    console.log('targetKey', targetKey)
    let lastIndex
    tabList.forEach((pane, i) => {
      if (String(pane.key) === targetKey) {
        lastIndex = i - 1
      }
    })
    const panes = tabList.filter(pane => pane.key !== targetKey)
    if (panes.length && activeKey === targetKey) {
      if (lastIndex >= 0) {
        // activeKey = panes[lastIndex].key
        changeActiveTab(panes[lastIndex].key)
      } else {
        // activeKey = panes[0].key
        changeActiveTab(panes[0].key)
      }
    }
    console.log('panes', panes)
    changeTabList(panes)
    changeActiveTab(targetKey)
  }

  return (
    <React.Fragment>
      {/* <Button onClick={add}>ADD</Button> */}
      <Tabs defaultActiveKey='1' type='editable-card' onEdit={onEdit}>
        {tabList &&
          tabList.map(pane => (
            <TabPane tab={pane.title} key={pane.key}>
              <TabItem />
            </TabPane>
          ))}
      </Tabs>
      {/* <Tabs defaultActiveKey='1'> */}
      {/* <TabPane tab='Báo cáo thanh niên(new)' key='1'> */}
      {/* <Row type='flex' justify='end'> */}
      {/* <Row type='flex' justify='space-between'> */}
      {/* <ButtonSearchMauPhatHanh */}
      {/* type='primary' */}
      {/* onClick={() => setVisibleDeleteModal(true)} */}
      {/* > */}
      {/* Xoá */}
      {/* </ButtonSearchMauPhatHanh> */}
      {/* <ButtonSearchMauPhatHanh */}
      {/* type='primary' */}
      {/* style={{ marginLeft: '20px' }} */}
      {/* > */}
      {/* Lưu Lại */}
      {/* </ButtonSearchMauPhatHanh> */}
      {/* </Row> */}
      {/* </Row> */}
      {/* <FormSearchMauPhatHanh> */}
      {/* <Row> */}
      {/* <Col span={21}> */}
      {/* <Row> */}
      {/* <Col span={12}> */}
      {/* <Form.Item label='Mã mẫu:'> */}
      {/* <InputSearchMauPhatHanh */}
      {/* placeholder='Nhập mã mẫu phát hành' */}
      {/* value={maMauPhatHanh} */}
      {/* disabled */}
      {/* /> */}
      {/* </Form.Item> */}
      {/* <Form.Item label='Tên mẫu:'> */}
      {/* <InputSearchMauPhatHanh */}
      {/* placeholder='Nhập tên mẫu phát hành' */}
      {/* value={tenMauPhatHanh} */}
      {/* /> */}
      {/* </Form.Item> */}
      {/* <Form.Item label='Người lập:'> */}
      {/* <InputSearchMauPhatHanh */}
      {/* placeholder='Nhập tên mẫu phát hành' */}
      {/* value={tenMauPhatHanh} */}
      {/* disabled */}
      {/* /> */}
      {/* </Form.Item> */}
      {/* </Col> */}
      {/* <Col span={12}> */}
      {/* <Form.Item label='Cơ quan chủ trì:'> */}
      {/* <InputSearchMauPhatHanh */}
      {/* placeholder='Nhập tên mẫu phát hành' */}
      {/* value={tenMauPhatHanh} */}
      {/* disabled */}
      {/* /> */}
      {/* </Form.Item> */}
      {/* <Form.Item label='Ngày phát hành:'> */}
      {/* <DatePickerSearchMauPhatHanh */}
      {/* defaultValue={moment(ngayPhatHanh, dateFormat)} */}
      {/* placeholder='Nhập ngày phát hành' */}
      {/* /> */}
      {/* </Form.Item> */}
      {/* <Form.Item label='Chọn phạm vi'> */}
      {/* <Input.Group compact> */}
      {/* <Select defaultValue='1'> */}
      {/* <Select.Option value='1'>Phạm vi</Select.Option> */}
      {/* <Select.Option value='2'>Except</Select.Option> */}
      {/* </Select> */}
      {/* <Input */}
      {/* style={{ width: 100, textAlign: 'center' }} */}
      {/* placeholder='Minimum' */}
      {/* /> */}
      {/* <Input */}
      {/* style={{ */}
      {/* width: 30, */}
      {/* borderLeft: 0, */}
      {/* pointerEvents: 'none', */}
      {/* backgroundColor: '#fff' */}
      {/* }} */}
      {/* placeholder='~' */}
      {/* disabled */}
      {/* /> */}
      {/* <Input */}
      {/* style={{ */}
      {/* width: 100, */}
      {/* textAlign: 'center', */}
      {/* borderLeft: 0 */}
      {/* }} */}
      {/* placeholder='Maximum' */}
      {/* /> */}
      {/* </Input.Group> */}
      {/* </Form.Item> */}
      {/* </Col> */}
      {/* </Row> */}
      {/* </Col> */}
      {/* <Col span={3}> */}
      {/* <Form.Item label='Ghi chú:'> */}
      {/* <Input.TextArea */}
      {/* placeholder='Ghi chú' */}
      {/* style={{ */}
      {/* height: 70, */}
      {/* width: '300px', */}
      {/* maxWidth: 'unset' */}
      {/* }} */}
      {/* /> */}
      {/* </Form.Item> */}
      {/* </Col> */}
      {/* </Row> */}
      {/* </FormSearchMauPhatHanh> */}
      {/* <Table */}
      {/* columns={columns} */}
      {/* dataSource={dataTable} */}
      {/* bordered */}
      {/* pagination={false} */}
      {/* scroll={{ x: 1630, y: 400 }} */}
      {/* style={{ marginRight: '20px' }} */}
      {/* /> */}
      {/* <Row type='flex' justify='end'> */}
      {/* <ButtonSearchMauPhatHanh type='primary'> */}
      {/* Yêu Cầu Kí Duyệt */}
      {/* </ButtonSearchMauPhatHanh> */}
      {/* </Row> */}
      {/* </TabPane> */}
      {/* </Tabs> */}
    </React.Fragment>
  )
}

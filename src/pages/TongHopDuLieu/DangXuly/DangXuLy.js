import React, { useState } from 'react'
import { Layout, Table, Input, InputNumber, Popconfirm, Form } from 'antd'

export default function DangXuLyPage () {
  return (
    <Layout>
      <EditableFormTable />
    </Layout>
  )
}

function EditableTable ({ form }) {
  const dataTable = []
  for (let i = 0; i < 100; i++) {
    dataTable.push({
      key: i.toString(),
      name: `SLTNKT ${i}`,
      age: i,
      address: `Số lượng thanh niên khuyết tật ${i}`
    })
  }

  const [data, setData] = useState(dataTable)
  const [editingKey, setEditingKey] = useState('')
  const isEditing = record => record.key === editingKey

  let columnsUp = [
    {
      title: 'name',
      dataIndex: 'name',
      width: '25%',
      editable: true
    },
    {
      title: 'age',
      dataIndex: 'age',
      width: '15%',
      editable: true
    },
    {
      title: 'address',
      dataIndex: 'address',
      width: '40%',
      editable: true
    },
    {
      title: 'operation',
      dataIndex: 'operation',
      render: (text, record) => {
        const editable = isEditing(record)
        return editable ? (
          <span>
            <EditableContext.Consumer>
              {form => (
                <a
                  href='javascript:;'
                  onClick={() => save(form, record.key)}
                  style={{ marginRight: 8 }}
                >
                  Save
                </a>
              )}
            </EditableContext.Consumer>
            <Popconfirm
              title='Sure to cancel?'
              onConfirm={() => cancel(record.key)}
            >
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <a disabled={editingKey !== ''} onClick={() => edit(record.key)}>
            Edit
          </a>
        )
      }
    }
  ]

  const cancel = () => {
    setEditingKey('')
  }

  const save = (form, key) => {
    form.validateFields((error, row) => {
      if (error) {
        return
      }
      const newData = [...data]
      const index = newData.findIndex(item => key === item.key)
      if (index > -1) {
        const item = newData[index]
        newData.splice(index, 1, {
          ...item,
          ...row
        })
        setData(newData)
        setEditingKey('')
      } else {
        newData.push(row)
        setData(newData)
        setEditingKey('')
      }
      console.log('newData', newData)
    })
  }

  const edit = key => {
    setEditingKey(key)
  }
  const components = {
    body: {
      cell: EditableCell
    }
  }

  const columns = columnsUp.map(col => {
    if (!col.editable) {
      return col
    }
    return {
      ...col,
      onCell: record => ({
        record,
        inputType: col.dataIndex === 'age' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record)
      })
    }
  })

  return (
    <EditableContext.Provider value={form}>
      <Table
        components={components}
        bordered
        dataSource={data}
        columns={columns}
        rowClassName='editable-row'
        pagination={{
          onChange: cancel
        }}
      />
    </EditableContext.Provider>
  )
}

const EditableContext = React.createContext()

function EditableCell ({
  inputType,
  editing,
  dataIndex,
  title,
  record,
  index,
  children,
  ...restProps
}) {
  const getInput = () => {
    if (inputType === 'number') {
      return <InputNumber />
    }
    return <Input />
  }

  const renderCell = ({ getFieldDecorator }) => {
    return (
      <td {...restProps}>
        {editing ? (
          <Form.Item style={{ margin: 0 }}>
            {getFieldDecorator(dataIndex, {
              rules: [
                {
                  required: true,
                  message: `Please Input ${title}!`
                }
              ],
              initialValue: record[dataIndex]
            })(getInput())}
          </Form.Item>
        ) : (
          children
        )}
      </td>
    )
  }

  return <EditableContext.Consumer>{renderCell}</EditableContext.Consumer>
}

const EditableFormTable = Form.create()(EditableTable)

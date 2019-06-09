import React from 'react'
import { Input, InputNumber, Form, Select, DatePicker } from 'antd'

const { TextArea } = Input
const { Item } = Form

function InputItem ({
  form,
  label,
  field,
  initialValue = '',
  type = 'text',
  placeholder,
  rules,
  autosize,
  options,
  style,
  disabled
}) {
  return (
    <Item label={label}>
      {form.getFieldDecorator(field, { rules, initialValue })(
        type === 'number' ? (
          <InputNumber style={style} />
        ) : type === 'textarea' ? (
          <TextArea style={style} autosize={autosize} />
        ) : type === 'select' ? (
          <Select>{options}</Select>
        ) : type === 'datepicker' ? (
          <DatePicker style={style} />
        ) : (
          <Input placeholder={placeholder} disabled={disabled} style={style} />
        )
      )}
    </Item>
  )
}

export default InputItem

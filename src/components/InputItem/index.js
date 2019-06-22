import React from 'react'
import { Input, InputNumber, Form, Select, Checkbox, DatePicker } from 'antd'

const { TextArea, Group, Password } = Input
const { Item } = Form

function InputItem ({
  form,
  label,
  style,
  field,
  placeholder,
  initialValue = '',
  type = 'text',
  rules,
  disabled,
  autosize,
  options,
  group,
  prefix,
  checkboxLabel
}) {
  return (
    <Item label={label}>
      {form.getFieldDecorator(field, { rules, initialValue })(
        type === 'number' ? (
          <InputNumber style={style} />
        ) : type === 'textarea' ? (
          <TextArea style={style} autosize={autosize} />
        ) : type === 'password' ? (
          <Password
            prefix={prefix}
            style={style}
            type='password'
            placeholder={placeholder}
          />
        ) : type === 'select' ? (
          <Select style={style}>{options}</Select>
        ) : type === 'disabled' ? (
          <Input style={style} placeholder={placeholder} disabled />
        ) : type === 'hidden' ? (
          <Input prefix={prefix} style={style} type='hidden' />
        ) : type === 'group' ? (
          <Group compact>{group}</Group>
        ) : type === 'datepicker' ? (
          <DatePicker style={style} />
        ) : type === 'checkbox' ? (
          <Checkbox>{checkboxLabel}</Checkbox>
        ) : (
          <Input prefix={prefix} style={style} placeholder={placeholder} />
        )
      )}
    </Item>
  )
}

export default InputItem

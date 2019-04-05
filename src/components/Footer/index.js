import React from 'react'
import { Layout } from 'antd'
import styled from 'styled-components'

const LayoutFooter = styled(Layout.Footer)`
  text-align: center;
`

export default function Footer () {
  return (
    <LayoutFooter>
      Copyright © 2019 Inc. All rights reserved.
    </LayoutFooter>
  )
}

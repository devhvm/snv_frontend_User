// import { connect } from 'react-redux'
// import { compose, lifecycle } from 'recompose'
// // import { setUser, logout } from '../../../redux/modules/user'
// // import { getUser } from '../../helpers/auth'
// import Header from './Header'
//
// export default compose(
//   connect(
//     state => ({
//       // ...state.user
//     }),
//     // { setUser, logout }
//   ),
//   lifecycle({
//     componentDidMount () {
//       // this.props.setUser(getUser())
//     }
//   })
// )(Header)

import React from 'react'
import { Layout, Menu, Avatar, Icon } from 'antd'
import styled from 'styled-components'

const MenuItem = Menu.Item

const LayoutHeader = styled(Layout.Header)`
  && {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: #fff;
    padding: 0;
    box-shadow: 0 2px 8px #f0f1f2;
    z-index: 10;
  }
`

const HeaderMenu = styled(Menu)`
  && {
    line-height: 64px;
  }
`

const HeaderSubMenu = styled(Menu.SubMenu)`
  && {
    float: right;
    border-bottom: none !important;
    margin-right: 5px;
  }
`

const IconCollapsed = styled(Icon)`
  {
    margin-left: 15px
    font-size: 20px
  }
`
export default function Header (
  props
  // { name, image, logout }
) {
  return (
    <LayoutHeader>
      <IconCollapsed
        className='trigger'
        type={props.collapsed ? 'menu-unfold' : 'menu-fold'}
        onClick={props.toggleSideBar}
      />
      <HeaderMenu mode='horizontal'>
        <HeaderSubMenu
          title={
            <Avatar size='large' icon='user' />
            // <span>
            //   <Avatar src={image} /> {name}
            // </span>
          }
        >
          <MenuItem onClick={props.logoutReq}>Logout</MenuItem>
        </HeaderSubMenu>
      </HeaderMenu>
    </LayoutHeader>
  )
}

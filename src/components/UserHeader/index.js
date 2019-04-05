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
import { Layout, Menu, Avatar, Icon, Breadcrumb } from 'antd'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const { Header, Content, Footer } = Layout

// const MenuItem = Menu.Item
//
// const LayoutHeader = styled(Layout.Header)`
//   && {
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     justify-content: space-between;
//     background: #fff;
//     padding: 0;
//     box-shadow: 0 2px 8px #f0f1f2;
//     z-index: 10;
//   }
// `
//
// const HeaderMenu = styled(Menu)`
//   && {
//     line-height: 64px;
//   }
// `
//
// const HeaderSubMenu = styled(Menu.SubMenu)`
//   && {
//     float: right;
//     border-bottom: none !important;
//     margin-right: 5px;
//   }
// `
//
// const UserHeaderSubMenu = styled(Menu.SubMenu)`
//   &&{
//     color: aquamarine;
//   }
// `
export default function UserHeader () {
  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 21, width: '100%' }}>
        <div className='logo' />
        <Menu
          theme='dark'
          mode='horizontal'
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px', display: 'flex', justifyContent: 'space-between' }}
        >
          <Menu.SubMenu key='1' title='PHÁT HÀNH MẪU'>
            <Menu.Item>
              <Link to='/phathanhmau/danhsachdangxuli'>
                DANH SÁCH ĐANG XỬ LÝ
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to='/phathanhmau/danhsachyeucaudieuchinh'>
                DANH SÁCH YÊU CẦU ĐIỀU CHỈNH
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to='/phathanhmau/danhsachchokyduyet'>
                DANH SÁCH CHỜ KÝ DUYỆT
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to='/phathanhmau/search'>
                TRUY LỤC
              </Link>
            </Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu key='2' title='MẪU BÁO CÁO'>
            <Menu.Item>DANH SÁCH YÊU CẦU ĐIỀU CHỈNH</Menu.Item>
            <Menu.Item>DANH SÁCH CHỜ KÝ DUYỆT</Menu.Item>
            <Menu.Item>DANH SÁCH ĐANG XỬ LÝ</Menu.Item>
            <Menu.Item>TRUY LỤC</Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu key='3' title='BÁO CÁO'>
            <Menu.Item>DANH SÁCH MẪU BÁO CÁO</Menu.Item>
            <Menu.Item>DANH SÁCH ĐANG XỬ LÝ</Menu.Item>
            <Menu.Item>DANH SÁCH YÊU CẦU ĐIỀU CHỈNH</Menu.Item>
            <Menu.Item>DANH SÁCH CHỜ KÝ DUYỆT</Menu.Item>
            <Menu.Item>TRUY LỤC</Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu key='4' title='TỔNG HỢP DỮ LIỆU'>
            <Menu.Item>DANH SÁCH DỮ LIỆU TỔNG HỢP</Menu.Item>
            <Menu.Item>TRUY LỤC</Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu key='6' title={
            <Avatar size='large' icon='user' />
          }
          >
            <Menu.Item>change password</Menu.Item>
            <Menu.Item>logout</Menu.Item>
          </Menu.SubMenu>
        </Menu>
      </Header>
      {/* <Content style={{ padding: '0 50px', marginTop: 64 }}> */}
      {/* <Breadcrumb style={{ margin: '16px 0' }}> */}
      {/* <Breadcrumb.Item>Home</Breadcrumb.Item> */}
      {/* <Breadcrumb.Item>List</Breadcrumb.Item> */}
      {/* <Breadcrumb.Item>App</Breadcrumb.Item> */}
      {/* </Breadcrumb> */}
      {/* <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>Content</div> */}
      {/* </Content> */}
      {/* <Footer style={{ textAlign: 'center' }}> */}
      {/* Ant Design ©2018 Created by Ant UED */}
      {/* </Footer> */}
    </Layout>
  )
}

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
import { Layout, Menu, Avatar } from 'antd'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const { Header, Footer } = Layout

const AppName = styled.span`
  font-size: 18px;
  font-weight: 400;
  color: #fff;
`

export default function UserHeader () {
  const menuList = [
    {
      name: 'PHÁT HÀNH MẪU',
      child: [
        {
          screenCode: 5,
          name: 'DANH SÁCH ĐANG XỬ LÝ',
          link: '/phathanhmau/danhsachdangxuli'
        },
        {
          screenCode: 6,
          name: 'DANH SÁCH YÊU CẦU ĐIỀU CHỈNH',
          link: '/phathanhmau/danhsachyeucaudieuchinh'
        },
        {
          screenCode: 7,
          name: 'DANH SÁCH CHỜ KÝ DUYỆT',
          link: '/phathanhmau/danhsachchokyduyet'
        },
        {
          screenCode: 8,
          name: 'TRUY LỤC',
          link: '/phathanhmau/truyluc'
        }
      ]
    },
    {
      name: 'MẪU BÁO CÁO',
      child: [
        {
          screenCode: 9,
          name: 'DANH SÁCH ĐANG XỬ LÝ',
          link: '/maubaocao/danhsachdangxuli'
        },
        {
          screenCode: 10,
          name: 'DANH SÁCH YÊU CẦU ĐIỀU CHỈNH',
          link: '/maubaocao/danhsachyeucaudieuchinh'
        },
        {
          screenCode: 11,
          name: 'DANH SÁCH CHỜ KÝ DUYỆT',
          link: '/maubaocao/danhsachchokyduyet'
        },
        {
          screenCode: 12,
          name: 'TRUY LỤC',
          link: '/maubaocao/truyluc'
        }
      ]
    },
    {
      name: 'BÁO CÁO',
      child: [
        {
          screenCode: 13,
          name: 'DANH SÁCH ĐANG XỬ LÝ',
          link: '/baocao/danhsachdangxuli'
        },
        {
          screenCode: 14,
          name: 'DANH SÁCH YÊU CẦU ĐIỀU CHỈNH',
          link: '/baocao/danhsachyeucaudieuchinh'
        },
        {
          screenCode: 15,
          name: 'DANH SÁCH CHỜ KÝ DUYỆT',
          link: '/baocao/danhsachchokyduyet'
        },
        {
          screenCode: 16,
          name: 'TRUY LỤC',
          link: '/baocao/truyluc'
        }
      ]
    },
    {
      name: 'TỔNG HỢP DỮ LIỆU',
      child: [
        {
          screenCode: 17,
          name: 'DANH SÁCH DỮ LIỆU TỔNG HỢP',
          link: '/tonghopdulieu/danhsachdulieutonghop'
        },
        {
          screenCode: 18,
          name: 'TRUY LỤC',
          link: '/tonghopdulieu/truyluc'
        }
      ]
    }
  ]

  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 21, width: '100%' }}>
        <Menu
          theme='dark'
          mode='horizontal'
          defaultSelectedKeys={['2']}
          style={{
            lineHeight: '64px',
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <AppName key='23'>
            <Link to='/home'>SNV</Link>
          </AppName>
          {menuList.map((item, index) => {
            return (
              <Menu.SubMenu key={index} title={item.name}>
                {/* eslint-disable indent */}
                {item.child
                  ? item.child.map((itemChild, index) => {
                      return (
                        <Menu.Item key={itemChild.screenCode}>
                          <Link to={itemChild.link}>{itemChild.name}</Link>
                        </Menu.Item>
                      )
                    })
                  : ''}
                {/* eslint-enable indent */}
              </Menu.SubMenu>
            )
          })}
          <Menu.SubMenu key='21' title={<Avatar size='large' icon='user' />}>
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
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  )
}

import React, { useLayoutEffect } from 'react'
import { Layout, Menu, Avatar } from 'antd'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const { Header } = Layout

const AppName = styled.span`
  font-size: 18px;
  font-weight: 400;
  color: #fff;
`

export default function UserHeader ({
  menu,
  logOutReq,
  // getMenuItem,
  // getScreen,
  getMenu
}) {
  useLayoutEffect(() => {
    // getMenu()
    // getMenuItem()
    // getScreen()
  }, [])

  // const menuList = []
  //
  // console.log(menu)
  //
  // for (let i in menu.menu) {
  //   menuList.push({ name: menu.menu[i].name, child: [] })
  //   for (let j in menu.menuItem) {
  //     for (let k in menu.screen) {
  //       if (menu.menu[i].menuCode === menu.menuItem[j].menuMenuCode) {
  //         if (menu.menuItem[j].screenScreenCode === menu.screen[k].screenCode) {
  //           const _menuItem = {
  //             screenCode: menu.screen[k].screenCode,
  //             name: menu.screen[k].name,
  //             link: menu.screen[k].link
  //           }
  //           menuList[i].child.push(_menuItem)
  //         }
  //       }
  //     }
  //   }
  // }

  const menuList = [
    {
      name: 'PHÁT HÀNH MẪU',
      child: [
        {
          screenCode: 5,
          name: 'DANH SÁCH XỬ LÝ',
          link: '/phathanhmau/danhsachdangxuly'
        },
        {
          screenCode: 14,
          name: 'DANH SÁCH YÊU CẦU ĐIỀU CHỈNH',
          link: '/phathanhmau/danhsachyeucaudieuchinh'
        },
        {
          screenCode: 7,
          name: 'DANH SÁCH KÝ DUYỆT',
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
            <Menu.Item
              onClick={() => {
                localStorage.removeItem('loginStatus')
                logOutReq()
              }}
            >
              logout
            </Menu.Item>
          </Menu.SubMenu>
        </Menu>
      </Header>
    </Layout>
  )
}

import React, { useLayoutEffect } from 'react'
import { Layout, Menu, Avatar } from 'antd'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
// import { getCoQuanHanhChinh } from '../../reducers/duLieuTienTrinh'

const { Header } = Layout

const AppName = styled(Menu.Item)`
  font-size: 18px;
  font-weight: 400;
  color: #fff;
`

export default function UserHeader ({
  menu,
  logOutReq,
  getMenuItem,
  getScreen,
  getMenu,
  getCoQuanHanhChinh
}) {
  useLayoutEffect(() => {
    // getMenu()
    // getMenuItem()
    // getScreen()
    getCoQuanHanhChinh()
  }, [])

  // const menuList = []
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
      name: 'BÁO CÁO HẠNG MỤC',
      link: '/baocaohangmuc',
      screenCode: 1
    },
    {
      name: 'TỔNG HỢP',
      link: '/tonghop',
      screenCode: 2
    },
    {
      name: 'DỰ THẢO',
      link: '/duthao',
      screenCode: 3
    }
    // {
    //   name: 'PHÁT HÀNH MẪU',
    //   child: [
    //     {
    //       screenCode: 5,
    //       name: 'DANH SÁCH XỬ LÝ',
    //       link: '/mauphathanh/danhsachdangxuly'
    //     },
    //     {
    //       screenCode: 6,
    //       name: 'DANH SÁCH YÊU CẦU ĐIỀU CHỈNH',
    //       link: '/mauphathanh/danhsachyeucaudieuchinh'
    //     },
    //     {
    //       screenCode: 7,
    //       name: 'DANH SÁCH KÝ DUYỆT',
    //       link: '/mauphathanh/danhsachchokyduyet'
    //     },
    //     {
    //       screenCode: 8,
    //       name: 'TRUY LỤC',
    //       link: '/mauphathanh/truyluc'
    //     }
    //   ]
    // },
    // {
    //   name: 'TẠO MẪU BÁO CÁO',
    //   child: [
    //     {
    //       screenCode: 9,
    //       name: 'DANH SÁCH ĐANG XỬ LÝ',
    //       link: '/maubaocao/danhsachdangxuly'
    //     },
    //     {
    //       screenCode: 10,
    //       name: 'DANH SÁCH YÊU CẦU ĐIỀU CHỈNH',
    //       link: '/maubaocao/danhsachyeucaudieuchinh'
    //     },
    //     {
    //       screenCode: 11,
    //       name: 'DANH SÁCH CHỜ KÝ DUYỆT',
    //       link: '/maubaocao/danhsachchokyduyet'
    //     },
    //     {
    //       screenCode: 12,
    //       name: 'TRUY LỤC',
    //       link: '/maubaocao/truyluc'
    //     }
    //   ]
    // },
    // {
    //   name: 'LẬP BÁO CÁO',
    //   child: [
    //     {
    //       screenCode: 13,
    //       name: 'DANH SÁCH ĐANG XỬ LÝ',
    //       link: '/lapbaocao/danhsachdangxuly'
    //     },
    //     {
    //       screenCode: 14,
    //       name: 'DANH SÁCH YÊU CẦU ĐIỀU CHỈNH',
    //       link: '/lapbaocao/danhsachyeucaudieuchinh'
    //     },
    //     {
    //       screenCode: 15,
    //       name: 'DANH SÁCH CHỜ KÝ DUYỆT',
    //       link: '/lapbaocao/danhsachchokyduyet'
    //     },
    //     {
    //       screenCode: 16,
    //       name: 'TRUY LỤC',
    //       link: '/lapbaocao/truyluc'
    //     }
    //   ]
    // },
    // {
    //   name: 'XỬ LÝ BÁO CÁO',
    //   child: [
    //     {
    //       name: 'TIẾP NHẬN BÁO CÁO',
    //       child: [
    //         {
    //           name: 'PHÊ DUYỆT BÁO CÁO',
    //           link: '/tiepnhanbaocao/pheduyetbaocao',
    //           screenCode: 17
    //         },
    //         {
    //           name: 'TRUY LỤC',
    //           link: '/tiepnhanbaocao/pheduyetbaocao',
    //           screenCode: 18
    //         }
    //       ]
    //     },
    //     {
    //       name: 'TỔNG HỢP DỮ LIỆU',
    //       child: [
    //         {
    //           name: 'DANH SÁCH ĐANG XỬ LÝ',
    //           link: '/tonghopdulieu/dangsachdangxuly',
    //           screenCode: 19
    //         },
    //         {
    //           name: 'DANH SÁCH YÊU CẦU ĐIỀU CHỈNH',
    //           link: '/tonghopdulieu/danhsachyeucaudieuchinh',
    //           screenCode: 20
    //         },
    //         {
    //           name: 'DANH SÁCH CHỜ KÝ DUYỆT',
    //           link: '/tonghopdulieu/danhsachchokyduyet',
    //           screenCode: 21
    //         },
    //         {
    //           name: 'TRUY LỤC',
    //           link: '/tonghopdulieu/truyluc',
    //           screenCode: 22
    //         }
    //       ]
    //     }
    //   ]
    // }
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
            <Link to='/'>SNV</Link>
          </AppName>
          {/* {menuList.map((item, index) => ( */}
          {/* <Menu.SubMenu key={index} title={item.name}> */}
          {/* {item.child */}
          {/* ? item.child.map(itemChild => */}
          {/* itemChild.child ? ( */}
          {/* <Menu.SubMenu */}
          {/* title={itemChild.name} */}
          {/* style={{ width: '200px' }} */}
          {/* > */}
          {/* {itemChild.child.map(itemChild2 => ( */}
          {/* <Menu.Item key={itemChild2.screenCode}> */}
          {/* <Link to={itemChild2.link}>{itemChild2.name}</Link> */}
          {/* </Menu.Item> */}
          {/* ))} */}
          {/* </Menu.SubMenu> */}
          {/* ) : ( */}
          {/* <Menu.Item key={itemChild.screenCode}> */}
          {/* <Link to={itemChild.link}>{itemChild.name}</Link> */}
          {/* </Menu.Item> */}
          {/* ) */}
          {/* ) */}
          {/*: ''} */}
          {/* </Menu.SubMenu> */}
          {/* ))} */}
          {menuList.map(item => (
            <Menu.Item key={item.screenCode}>
              <Link to={item.link}>{item.name}</Link>
            </Menu.Item>
          ))}
          <Menu.SubMenu
            key='24'
            title={
              <span
                style={{
                  position: 'absolute',
                  left: '15px',
                  fontWeight: 900
                }}
              >
                Nguyễn Văn A
              </span>
            }
          />
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

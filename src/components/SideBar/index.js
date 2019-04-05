import React from 'react'
import { Layout, Menu, Icon } from 'antd'
import logo from '../../assets/img/logo.png'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const App = styled.div`
  text-align: center;
  padding: 18px 12px 14px 0px;
  background: #002140;
`
const Logo = styled.img`
  height: 30px;
  margin-right: 6px;
`
const AppName = styled.span`
  font-size: 18px;
  font-weight: 400;
  color: #fff;
`

export default function Sidebar (props) {
  return (
    <Layout.Sider
      theme='dark'
      trigger={null}
      collapsible
      collapsed={props.collapsed}
    >
      <App className='logo'>
        <Logo src={logo} alt='logo' />
        <AppName>SNV</AppName>
      </App>
      <Menu mode='inline' theme='dark'>
        <Menu.SubMenu
          key='danhmucgoc'
          title={
            <span>
              <Icon type='dollar' />
              <span>Thiết lập danh mục gốc</span>
            </span>
          }
        >
          <Menu.Item key='0'>
            <Link to='/maubaocao'>
              <Icon type='line-chart' />
              <span>Mẫu Báo Cáo</span>
            </Link>
          </Menu.Item>
          <Menu.Item key='16'>
            <Link to='/mauphathanh'>
              <Icon type='line-chart' />
              <span>Mẫu Phát Hành</span>
            </Link>
          </Menu.Item>
          <Menu.SubMenu
            key='loaibaocao'
            title={
              <span>
                <Icon type='dollar' />
                Tạo loại báo cáo
              </span>
            }
          >
            <Menu.Item key='7'>
              <Link to='/nhaplieu'>
                <Icon type='user' />
                <span>Nhập liệu</span>
              </Link>
            </Menu.Item>
            <Menu.Item key='8'>
              <Link to='/tongket'>
                <Icon type='user' />
                <span>Tổng kết</span>
              </Link>
            </Menu.Item>
          </Menu.SubMenu>
        </Menu.SubMenu>
        <Menu.Item key='9'>
          <Link to='/danhsachtieuchi'>
            <Icon type='user' />
            <span>Danh sách tiêu chí</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Layout.Sider>
  )
}

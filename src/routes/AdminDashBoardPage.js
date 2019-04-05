import React, { useState } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Layout } from 'antd'
import Header from '../components/Header'
import Sidebar from '../components/SideBar'
import Footer from '../components/Footer'
import styled from 'styled-components'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import MauBaoCao from '../pages/MauBaoCao'
import MauPhatHanhList from '../pages/MauPhatHanh'
import MauPhatHanhEdit from '../pages/MauPhatHanh/edit'
import MauPhatHanhAdd from '../pages/MauPhatHanh/add'

const RootLayout = styled(Layout)`
  && {
    min-height: 100vh;
`
const LayoutContent = styled(Layout.Content)`
  && {
    margin: 16px 16px 0;
  }
`
const ContentWrapper = styled.div`
  && {
    padding: 24px;
    background: #fff;
    min-height: 520px;
  }
`

function AdminDashBoardPage () {
  const [login, setLogin] = useState(true)
  const [collapsed, setCollapsed] = useState(false)

  const loginReq = () => {
    setLogin(true)
  }

  const logoutReq = () => {
    setLogin(false)
  }

  const ExContext = React.createContext(login)

  const toggleSideBar = () => {
    setCollapsed(!collapsed)
  }

  return (
    <div className='App'>
      {login ? (
        <RootLayout>
          <Sidebar collapsed={collapsed} />
          <Layout>
            <Header
              toggleSideBar={toggleSideBar}
              collapsed={collapsed}
              logoutReq={logoutReq}
            />
            <LayoutContent>
              <ContentWrapper>
                <Switch>
                  <Route exact path='/home' component={HomePage} />
                  <Route
                    exact
                    path='/mauphathanh'
                    component={MauPhatHanhList}
                  />
                  <Route
                    exact
                    path='/mauphathanh/edit'
                    render={props => <MauPhatHanhEdit {...props} />}
                  />
                  <Route
                    exact
                    path='/mauphathanh/add'
                    render={props => <MauPhatHanhAdd {...props} />}
                  />
                  <Route exact path='/maubaocao' component={MauBaoCao} />
                  <Redirect exact from='/' to='/home' component={HomePage} />
                </Switch>
              </ContentWrapper>
            </LayoutContent>
            <Footer />
          </Layout>
        </RootLayout>
      ) : (
        <LoginPage ExContext={ExContext} loginReq={loginReq} />
      )}
    </div>
  )
}

export default AdminDashBoardPage

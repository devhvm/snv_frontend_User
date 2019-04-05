import React, { useState } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Layout } from 'antd'
import UserHeader from '../components/UserHeader'
import Footer from '../components/Footer'
import styled from 'styled-components'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import MauBaoCao from '../pages/MauBaoCao'
// import MauPhatHanhList from '../pages/MauPhatHanh'
import MauPhatHanhEdit from '../pages/MauPhatHanh/edit'
import MauPhatHanhAdd from '../pages/MauPhatHanh/add'
import MauPhatHanhProcessing from '../pages/PhatHanhMau/processing'
import MauPhatHanhEditing from '../pages/PhatHanhMau/editing'
import MauPhatHanhWaitForApproval from '../pages/PhatHanhMau/waitForApproval'
import MauPhatHanhSearch from '../pages/PhatHanhMau/search'
import MauBaoCaoProcessing from '../pages/MauBaoCao/processing'
import MauBaoCaoEditing from '../pages/MauBaoCao/editing'
import MauBaoCaoWaitForApproval from '../pages/MauBaoCao/waitForApproval'
import MauBaoCaoSearch from '../pages/MauBaoCao/search'

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

function DashboardPage () {
  const [login, setLogin] = useState(true)

  const loginReq = () => {
    setLogin(true)
  }

  const logoutReq = () => {
    setLogin(false)
  }

  const ExContext = React.createContext(login)

  return (
    <div className='App'>
      {login ? (
        <RootLayout>
          <Layout>
            <UserHeader
              logoutReq={logoutReq}
            />
            <LayoutContent>
              <ContentWrapper style={{ marginTop: '60px' }}>
                <Switch>
                  <Route exact path='/home' component={HomePage} />
                  <Route
                    exact
                    path='/phathanhmau/danhsachdangxuli'
                    component={MauPhatHanhProcessing}
                  />
                  <Route
                    exact
                    path='/phathanhmau/danhsachyeucaudieuchinh'
                    component={MauPhatHanhEditing}
                  />
                  <Route
                    exact
                    path='/phathanhmau/danhsachchokyduyet'
                    component={MauPhatHanhWaitForApproval}
                  />
                  <Route
                    exact
                    path='/phathanhmau/search'
                    component={MauPhatHanhSearch}
                  />
                  <Route
                    exact
                    path='/phathanhmau/danhsachdangxuli'
                    component={MauBaoCaoProcessing}
                  />
                  <Route
                    exact
                    path='/phathanhmau/danhsachyeucaudieuchinh'
                    component={MauBaoCaoEditing}
                  />
                  <Route
                    exact
                    path='/phathanhmau/danhsachchokyduyet'
                    component={MauBaoCaoWaitForApproval}
                  />
                  <Route
                    exact
                    path='/phathanhmau/search'
                    component={MauBaoCaoSearch}
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

export default DashboardPage

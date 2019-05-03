import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Layout } from 'antd'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styled from 'styled-components'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import MauBaoCao from '../pages/MauBaoCao'
import MauPhatHanhDangXuLi from '../pages/MauPhatHanh/DangXuLiPage'
import MauPhatHanhYeuCauDieuChinh from '../pages/MauPhatHanh/YeuCauDieuChinhPage'
// import MauPhatHanhWaitForApproval from '../pages/MauPhatHanh/waitForApproval'
// import MauPhatHanhSearch from '../pages/MauPhatHanh/search'
import MauBaoCaoProcessing from '../pages/MauBaoCao/processing'
import MauBaoCaoEditing from '../pages/MauBaoCao/editing'
import MauBaoCaoWaitForApproval from '../pages/MauBaoCao/waitForApproval'
import MauBaoCaoSearch from '../pages/MauBaoCao/search'
import { connect } from 'react-redux'
import { loginReq } from '../reducers/login'

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
    padding: 15px;
    background: #fff;
    min-height: 520px;
  }
`

function DashboardPage () {
  // const [login, setLogin] = useState(false)
  // console.log('loginStatus', loginStatus)

  // const ExContext = React.createContext(login)
  let loginStatus = localStorage.getItem('loginStatus')

  return (
    <div className='App'>
      {loginStatus ? (
        <RootLayout>
          <Layout>
            <Header />
            <LayoutContent>
              <ContentWrapper style={{ marginTop: '60px' }}>
                <Switch>
                  <Route exact path='/home' component={HomePage} />
                  <Route
                    exact
                    path='/phathanhmau/danhsachdangxuly'
                    component={MauPhatHanhDangXuLi}
                  />
                  <Route
                    exact
                    path='/phathanhmau/danhsachyeucaudieuchinh'
                    component={MauPhatHanhYeuCauDieuChinh}
                  />
                  {/* <Route */}
                  {/* exact */}
                  {/* path='/phathanhmau/danhsachchokyduyet' */}
                  {/* component={MauPhatHanhWaitForApproval} */}
                  {/* /> */}
                  {/* <Route */}
                  {/* exact */}
                  {/* path='/phathanhmau/search' */}
                  {/* component={MauPhatHanhSearch} */}
                  {/* /> */}
                  <Route
                    exact
                    path='/maubaocao/danhsachdangxuli'
                    component={MauBaoCaoProcessing}
                  />
                  <Route
                    exact
                    path='/maubaocao/danhsachyeucaudieuchinh'
                    component={MauBaoCaoEditing}
                  />
                  <Route
                    exact
                    path='/baocao/danhsachchokyduyet'
                    component={MauBaoCaoWaitForApproval}
                  />
                  <Route
                    exact
                    path='/maubaocao/truyluc'
                    component={MauBaoCaoSearch}
                  />
                  {/* <Route */}
                  {/* exact */}
                  {/* path='/mauphathanh/edit' */}
                  {/* render={props => <MauPhatHanhEdit {...props} />} */}
                  {/* /> */}
                  {/* <Route */}
                  {/* exact */}
                  {/* path='/mauphathanh/add' */}
                  {/* render={props => <MauPhatHanhAdd {...props} />} */}
                  {/* /> */}
                  <Route exact path='/maubaocao' component={MauBaoCao} />
                  <Redirect exact from='/' to='/' component={HomePage} />
                </Switch>
              </ContentWrapper>
            </LayoutContent>
            <Footer />
          </Layout>
        </RootLayout>
      ) : (
        <LoginPage
        // ExContext={ExContext}
        // loginShow={loginShow}
        />
      )}
    </div>
  )
}

export default connect(
  state => ({
    ...state.login
  }),
  {
    loginReq
  }
)(DashboardPage)

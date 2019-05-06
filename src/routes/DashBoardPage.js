import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Layout } from 'antd'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styled from 'styled-components'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import MauPhatHanhDangXuLi from '../pages/MauPhatHanh/DangXuLyPage'
import MauPhatHanhYeuCauDieuChinh from '../pages/MauPhatHanh/YeuCauDieuChinhPage'
import MauPhatHanhKyDuyet from '../pages/MauPhatHanh/KyDuyetPage'
import MauPhatHanhTruyLuc from '../pages/MauPhatHanh/TruyLucPage'
import MauBaoCaoDangXuLy from '../pages/MauBaoCao/DangXuLyPage'
import MauBaoCaoYeuCauDieuChinh from '../pages/MauBaoCao/YeuCauDieuChinhPage'
import MauBaoCaoKyDuyet from '../pages/MauBaoCao/KyDuyetPage'
import MauBaoCaoTruyLuc from '../pages/MauBaoCao/TruyLucPage'
import LapBaoCaoDangXuLy from '../pages/LapBaoCao/DangXuLyPage'
import LapBaoCaoYeuCauDieuChinh from '../pages/LapBaoCao/YeuCauDieuChinhPage'
import LapBaoCaoKyDuyet from '../pages/LapBaoCao/KyDuyetPage'
import LapBaoCaoTruyLuc from '../pages/LapBaoCao/TruyLucPage'
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
                    path='/mauphathanh/danhsachdangxuly'
                    component={MauPhatHanhDangXuLi}
                  />
                  <Route
                    exact
                    path='/mauphathanh/danhsachyeucaudieuchinh'
                    component={MauPhatHanhYeuCauDieuChinh}
                  />
                  <Route
                    exact
                    path='/mauphathanh/danhsachchokyduyet'
                    component={MauPhatHanhKyDuyet}
                  />
                  <Route
                    exact
                    path='/mauphathanh/truyluc'
                    component={MauPhatHanhTruyLuc}
                  />
                  <Route
                    exact
                    path='/lapbaocao/danhsachdangxuly'
                    component={MauBaoCaoDangXuLy}
                  />
                  <Route
                    exact
                    path='/lapbaocao/danhsachyeucaudieuchinh'
                    component={MauBaoCaoYeuCauDieuChinh}
                  />
                  <Route
                    exact
                    path='/lapbaocao/danhsachchokyduyet'
                    component={MauBaoCaoKyDuyet}
                  />
                  <Route
                    exact
                    path='/lapbaocao/truyluc'
                    component={MauBaoCaoTruyLuc}
                  />
                  <Route
                    exact
                    path='/maubaocao/danhsachdangxuly'
                    component={LapBaoCaoDangXuLy}
                  />
                  <Route
                    exact
                    path='/maubaocao/danhsachyeucaudieuchinh'
                    component={LapBaoCaoYeuCauDieuChinh}
                  />
                  <Route
                    exact
                    path='/maubaocao/danhsachchokyduyet'
                    component={LapBaoCaoKyDuyet}
                  />
                  <Route
                    exact
                    path='/maubaocao/truyluc'
                    component={LapBaoCaoTruyLuc}
                  />
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

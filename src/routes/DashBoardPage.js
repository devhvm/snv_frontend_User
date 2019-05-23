import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Layout } from 'antd'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styled from 'styled-components'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import MauPhatHanhDangXuLy from '../pages/MauPhatHanh/DangXuLyPage'
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

  const routes = [
    { path: '/', exact: true, component: HomePage },
    {
      path: '/mauphathanh/danhsachdangxuly',
      exact: true,
      component: MauPhatHanhDangXuLy
    },
    {
      path: '/mauphathanh/danhsachyeucaudieuchinh',
      exact: true,
      component: MauPhatHanhYeuCauDieuChinh
    },
    {
      path: '/mauphathanh/danhsachchokyduyet',
      exact: true,
      component: MauPhatHanhKyDuyet
    },
    {
      path: '/mauphathanh/truyluc',
      exact: true,
      component: MauPhatHanhTruyLuc
    },
    {
      path: '/maubaocao/danhsachdangxuly',
      exact: true,
      component: MauBaoCaoDangXuLy
    },
    {
      path: '/maubaocao/danhsachyeucaudieuchinh',
      exact: true,
      component: MauBaoCaoYeuCauDieuChinh
    },
    {
      path: '/maubaocao/danhsachchokyduyet',
      exact: true,
      component: MauBaoCaoKyDuyet
    },
    { path: '/maubaocao/truyluc', exact: true, component: MauBaoCaoTruyLuc },
    {
      path: '/lapbaocao/danhsachdangxuly',
      exact: true,
      component: LapBaoCaoDangXuLy
    },
    {
      path: '/lapbaocao/danhsachyeucaudieuchinh',
      exact: true,
      component: LapBaoCaoYeuCauDieuChinh
    },
    {
      path: '/lapbaocao/danhsachchokyduyet',
      exact: true,
      component: LapBaoCaoKyDuyet
    },
    { path: '/lapbaocao/truyluc', exact: true, component: LapBaoCaoTruyLuc }
  ]

  return (
    <div className='App'>
      {loginStatus ? (
        <RootLayout>
          <Layout>
            <Header />
            <LayoutContent>
              <ContentWrapper style={{ marginTop: '60px' }}>
                <Switch>
                  {routes.map((route, index) => (
                    <Route
                      key={index}
                      path={route.path}
                      exact={route.exact}
                      component={route.component}
                    />
                  ))}
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

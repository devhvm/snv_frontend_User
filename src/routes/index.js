import React from 'react'
import { Switch } from 'react-router-dom'
import UserDashBoardPage from './DashBoardPage'

const routes = (
  <div className='App'>
    <Switch>
      {/* <Route path='/login' component={LoginPage} /> */}
      <UserDashBoardPage />
    </Switch>
  </div>
)

export default routes

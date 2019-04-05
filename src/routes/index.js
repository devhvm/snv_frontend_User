import React from 'react'
import { Switch } from 'react-router-dom'
import AdminDashBoardPage from './AdminDashBoardPage'
import UserDashBoardPage from './UserDashBoardPage'

const routes = (
  <div className='App'>
    <Switch>
      {/* <Route path='/login' component={LoginPage} /> */}
      <UserDashBoardPage />
    </Switch>
  </div>
)

export default routes

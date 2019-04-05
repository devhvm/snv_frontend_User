import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import routes from './routes'
import store, { history } from './reducers/store'
import 'antd/dist/antd.css'

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>{routes}</ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)

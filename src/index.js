import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { HashRouter, Switch, Route } from 'react-router-dom'
import './semantic/dist/semantic.min.css'
import './index.css'
import reducer from './reducers'
import Routes from './components/routing/Routes'
import TopMenu from './components/topMenu/TopMenu'
import registerServiceWorker from './registerServiceWorker'

import Dashboard from './components/dashboard/Dashboard'
import Reports from './components/reports/Reports'
import Login from './components/login/Login'
import LandingPage from './components/landing/LandingPage'
import ProtectedRoute from './components/routing/ProtectedRoute'
import NotFound from './components/404/NotFound'

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/login" component={Login} />
          <ProtectedRoute path="/reports" component={Reports} />
          <ProtectedRoute path="/dashboard" component={Dashboard} />
          <Route component={NotFound} />
      </Switch>
    </HashRouter>
  </Provider>,
  document.getElementById('root'))

registerServiceWorker()

import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import ProtectedRoute from './ProtectedRoute'
import Dashboard from '../dashboard/Dashboard'
import Reports from '../reports/Reports'
import Login from '../users/login/Login'
import CreateAccount from '../users/createAccount/CreateAccount'
import VerifyAccount from '../users/verifyAccount/VerifyAccount'
import LandingPage from '../landing/LandingPage'
import NotFound from '../404/NotFound'

// ToDo: static component?
export class Routes extends Component {
  render() {

    return (
      <BrowserRouter>
        <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/create-account" component={CreateAccount} />
            <Route exact path="/create-account/verify" component={VerifyAccount} />
            <ProtectedRoute exact path="/reports" component={Reports} />
            <ProtectedRoute exact path="/dashboard" component={Dashboard} />
            <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default connect(
  state => { return {

      }
    },
  dispatch => { return {

      }
    },
)(Routes)

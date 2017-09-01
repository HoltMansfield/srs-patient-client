import React, { Component } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import ProtectedRoute from './ProtectedRoute'
import Dashboard from '../dashboard/Dashboard'
import Reports from '../reports/Reports'
import Login from '../login/Login'
import LandingPage from '../landing/LandingPage'
import NotFound from '../404/NotFound'
import * as actions from '../../actions'


export class Routes extends Component {
  render() {
    const { loggedInUser } = this.props

    return (
      <HashRouter>
        <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/login" component={Login} />
            <ProtectedRoute path="/reports" component={Reports} />
            <ProtectedRoute path="/dashboard" component={Dashboard} />
            <Route component={NotFound} />
        </Switch>
      </HashRouter>
    )
  }
}

export default connect(
  state => { return {
        loggedInUser: state.loggedInUser
      }
    },
  dispatch => { return {

      }
    },
)(Routes)

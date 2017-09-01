import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import ProtectedRoute from './ProtectedRoute'
import Dashboard from '../dashboard/Dashboard'
import Reports from '../reports/Reports'
import Login from '../login/Login'
import * as actions from '../../actions'


export class Routes extends Component {
  render() {
    const { loggedInUser } = this.props

    return (
      <div>
        <Route path="/" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/reports" component={Reports} />
        // <ProtectedRoute path="/reports" component={Reports} />
      </div>
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

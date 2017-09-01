import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Dashboard from '../dashboard/Dashboard'

export class Routes extends Component {
  render() {
    return (
      <Route exact path="/" component={Dashboard} />
    )
  }
}

export default Routes

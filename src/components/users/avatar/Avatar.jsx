import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../actions'
import createRestrictedComponent from '../../HOC/users/restrictedContent/RestrictedContent'

export class Avatar extends Component {
  render() {
    return (
      <div>AVATAR</div>
    )
  }
}

const connectedComponent = connect(
  state => { return {

      }
    },
  dispatch => { return {

      }
    },
)(Avatar)

export default createRestrictedComponent(connectedComponent)

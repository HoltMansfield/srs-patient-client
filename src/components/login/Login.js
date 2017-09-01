import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actions from '../../actions'

export class Login extends Component {
  render() {
    return (
      <div>Loginly</div>
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
)(Login)

import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actions from '../../../actions'

export class CreateUser extends Component {
  render() {
    return (
      <div>Creaty</div>
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
)(CreateUser)

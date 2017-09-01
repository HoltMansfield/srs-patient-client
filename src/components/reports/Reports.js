import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actions from '../../actions'

export class Reports extends Component {
  render() {
    return (
      <div>Reporty</div>
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
)(Reports)

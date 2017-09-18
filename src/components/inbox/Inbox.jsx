import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'

export class Inbox extends Component {
  render() {
    return (
      <div>Inbox</div>
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
)(Inbox)

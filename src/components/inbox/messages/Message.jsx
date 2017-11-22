import React, { Component } from 'react'
import { connect } from 'react-redux'
//import { Segment, Icon, Grid } from 'semantic-ui-react'
import * as actions from '../../../actions'

export class Message extends Component {
  render() {
    return (
      <div>
message
      </div>
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
)(Message)

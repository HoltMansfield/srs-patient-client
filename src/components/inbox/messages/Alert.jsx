import React, { Component } from 'react'
import { connect } from 'react-redux'
//import { Grid, Segment, Icon, Header, Divider } from 'semantic-ui-react'
import * as actions from '../../../actions'
import './Message.css'

export class Alert extends Component {
  render() {
    return (
      <div>
alert
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
)(Alert)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Segment } from 'semantic-ui-react'
import * as actions from '../../../actions'

export class Messages extends Component {
  hasMessages() {
    return this.props.alerts.length > 0 || this.props.messages > 0
  }
  getMessageData() {
      let data = [];

      if(this.hasMessages()) {
        data = [...this.props.alerts, ...this.props.messages]
      }

      return data;
  }

  getMessages() {
    const inbox = this.getMessageData()

    return inbox.map(message => {
      <Segment>Middle</Segment>
    })
  }

  getContent() {
    if(this.hasMessages()) {
      return (
        <Segment.Group>
          {this.getMessages()}
        </Segment.Group>
      )
    }
    else {
      return (
        <div>No Messages</div>
      )
    }
  }

  render() {
    return (
      this.getContent()
    )
  }
}

export default connect(
  state => { return {
        alerts: state.alerts,
        messages: state.messages
      }
    },
  dispatch => { return {

      }
    },
)(Messages)

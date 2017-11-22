import React, { Component } from 'react'
import { connect } from 'react-redux'
//import { Segment } from 'semantic-ui-react'
import * as actions from '../../../actions'
import Message from './Message'
import Alert from './Alert'


export class Messages extends Component {
  hasMessages() {
    return this.props.alerts.length > 0 || this.props.messages > 0
  }

  getMessageData() {
      let data = [];

      if(this.hasMessages()) {
        const alerts = this.props.alerts.map(alert => ({ ...alert, type: 'alert' }))
        const messages = this.props.messages.map(message => ({ ...message, type: 'message' }))
        data = [...alerts, ...messages]
      }

      return data;
  }

  getMessages() {
    const inbox = this.getMessageData()

    return inbox.map(message => {
      if(message.type === 'alert') {
        return <Alert key={alert._id} alert={message} />
      }

      return <Message key={message._id} message={message} />
    })
  }

  getContent() {
    if(this.hasMessages()) {
      return (
<div>
messages
</div>
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

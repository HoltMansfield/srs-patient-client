import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Menu, Segment, Label, Input } from 'semantic-ui-react'
import * as actions from '../../actions'
import InboxSideMenu from './inbox-side-menu/InboxSideMenu'

export class Inbox extends Component {
  state = { messageViewMode: 'alerts', searchTerms: '' }

  componentWillMount() {
    const { getAlerts, getMessages, setAlerts, setMessages, loggedInUser } = this.props
    const query = { userId: loggedInUser._id }

    getAlerts(query)
      .then(data => {
        setAlerts(data)
      })

    getMessages(query)
      .then(data => {
        setMessages(data)
      })
  }

  setMessageViewMode(messageViewMode) {
    this.setState({ messageViewMode })
  }

  setSearchTerms(searchTerms) {
    this.setState({ searchTerms })
  }

  render() {
    return (
      <div className='padded-page'>
        <InboxSideMenu setMessageViewMode={this.setMessageViewMode.bind(this)}
                       setSearchTerms={this.setSearchTerms.bind(this)} />
      </div>
    )
  }
}

export default connect(
  state => { return {
        loggedInUser: state.loggedInUser
      }
    },
  dispatch => { return {
        getAlerts: query => dispatch(actions.httpPost('alerts/query', query)),
        getMessages: query => dispatch(actions.httpPost('messages/query', query)),
        setMessages: messages => dispatch(actions.messages.set(messages)),
        setAlerts: alerts => dispatch(actions.alerts.set(alerts))
      }
    },
)(Inbox)

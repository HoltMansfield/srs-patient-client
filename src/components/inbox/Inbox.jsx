import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Menu, Segment, Label, Input } from 'semantic-ui-react'
import * as actions from '../../actions'
import InboxSideMenu from './inbox-side-menu/InboxSideMenu'

export class Inbox extends Component {
  componentWillMount() {
    const { getAlerts, getMessages, loggedInUser } = this.props
    const query = { userId: loggedInUser._id }

    getAlerts(query)
      .then(data => {
        console.log(data)
      })

    getMessages(query)
      .then(data => {
        console.log(data)
      })
  }

  render() {
    return (
      <div className='padded-page'>
        <InboxSideMenu />
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
        getMessages: query => dispatch(actions.httpPost('messages/query', query))
      }
    },
)(Inbox)

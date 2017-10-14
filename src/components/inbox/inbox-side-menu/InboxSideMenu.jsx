import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Menu, Label, Input } from 'semantic-ui-react'
import * as actions from '../../../actions'

export class InboxSideMenu extends Component {
  state = { activeItem: 'alerts' }

  constructor(props) {
    super(props)

    this.searchTermsChange = this.searchTermsChange.bind(this)
  }

  menuItemSelected(activeItem) {
    this.setState({
      activeItem
    })
    this.props.setMessageViewMode(activeItem)
  }

  searchTermsChange(e) {
    const searchTerms = e.target.value
    this.props.setSearchTerms(searchTerms)
  }

  render() {
    const { activeItem } = this.state

    return (
      <div style={{ width: '100%' }}>
        <Menu vertical>
          <Menu.Item name='inbox'
                     title='Show all message types'
                     active={activeItem === 'inbox'}
                     onClick={() => this.menuItemSelected('inbox')}>
            <Label color='teal'>{this.props.alerts.length + this.props.messages.length}</Label>
            Inbox
          </Menu.Item>

          <Menu.Item name='alerts'
                     title='Show alerts only'
                     active={activeItem === 'alerts'}
                     onClick={() => this.menuItemSelected('alerts')}>
            <Label>{this.props.alerts.length}</Label>
            Alerts
          </Menu.Item>

          <Menu.Item name='messages'
                     title='Show messages only'
                     active={activeItem === 'messages'}
                     onClick={() => this.menuItemSelected('messages')}>
            <Label>{this.props.messages.length}</Label>
            Messages
          </Menu.Item>

          <Menu.Item>
            <Input icon='search' placeholder='Search inbox...' onChange={this.searchTermsChange} />
          </Menu.Item>
        </Menu>
      </div>
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
)(InboxSideMenu)

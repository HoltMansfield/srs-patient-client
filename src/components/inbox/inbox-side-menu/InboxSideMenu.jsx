import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Menu, Label, Input } from 'semantic-ui-react'
import * as actions from '../../../actions'

export class InboxSideMenu extends Component {
  state = { activeItem: 'alerts' }
  render() {
    const { activeItem } = this.state

    return (
      <Menu vertical>
        <Menu.Item name='inbox' active={activeItem === 'inbox'} onClick={this.handleItemClick}>
          <Label color='teal'>1</Label>
          Inbox
        </Menu.Item>

        <Menu.Item name='alerts' active={activeItem === 'alerts'} onClick={this.handleItemClick}>
          <Label>51</Label>
          Alerts
        </Menu.Item>

        <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick}>
          <Label>1</Label>
          Messages
        </Menu.Item>
        <Menu.Item>
          <Input icon='search' placeholder='Search inbox...' />
        </Menu.Item>
      </Menu>
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
)(InboxSideMenu)

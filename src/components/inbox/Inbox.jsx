import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Menu, Segment, Label, Input } from 'semantic-ui-react'
import * as actions from '../../actions'

export class Inbox extends Component {
  state = { activeItem: 'alerts' }


  render() {
    const { activeItem } = this.state

    return (
      <div className='padded-page'>
        <Menu vertical>
          <Menu.Item name='inbox' active={activeItem === 'inbox'} onClick={this.handleItemClick}>
            <Label color='teal'>1</Label>
            Inbox
          </Menu.Item>

          <Menu.Item name='alerts' active={activeItem === 'alerts'} onClick={this.handleItemClick}>
            <Label>51</Label>
            Spam
          </Menu.Item>

          <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick}>
            <Label>1</Label>
            Updates
          </Menu.Item>
          <Menu.Item>
            <Input icon='search' placeholder='Search inbox...' />
          </Menu.Item>
        </Menu>
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
)(Inbox)

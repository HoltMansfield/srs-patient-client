import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import logo from '../../style/images/stanford.jpeg'
import { Dropdown, Icon, Input, Menu, Segment } from 'semantic-ui-react'

import * as actions from '../../actions'

export class TopMenu extends Component {
  constructor(props) {
    super(props)
    this.navigate = this.navigate.bind(this)
  }
  navigate(url) {
    this.props.history.push(url)
  }

  render() {
    return (
      <Menu attached='top'>
        <Menu.Menu>
          <Dropdown item icon='content' simple>
            <Dropdown.Menu>
              <Dropdown.Item><Link to="/inbox">Inbox</Link></Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
        <img src={logo} height='70' />
        <Menu.Menu position='right'>
          <Dropdown item icon='wrench' simple>
            <Dropdown.Menu className='left'>
              <Dropdown.Item>Open</Dropdown.Item>
              <Dropdown.Item>Save...</Dropdown.Item>
              <Dropdown.Item>Edit Permissions</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Header>Export</Dropdown.Header>
              <Dropdown.Item>Share</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
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
)(TopMenu)

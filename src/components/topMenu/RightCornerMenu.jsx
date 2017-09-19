import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Dropdown, Icon, Menu } from 'semantic-ui-react'
import createRestrictedComponent from '../HOC/users/restrictedContent/RestrictedContent'


export class RightCornerMenu extends Component {
  render() {
    return (
      <Menu.Menu position='right'>
        <Dropdown item icon='user' simple>
          <Dropdown.Menu className='left'>
            <Dropdown.Item>Log Out</Dropdown.Item>
            <Dropdown.Item>Edit Profile</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Menu>
    )
  }
}

export default createRestrictedComponent(RightCornerMenu)

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Dropdown, Icon, Menu } from 'semantic-ui-react'
import createRestrictedComponent from '../HOC/users/restrictedContent/RestrictedContent'


export class NavigationMenu extends Component {
  render() {
    return (
      <Menu.Menu>
        <Dropdown item className="icon" icon='content' simple>
          <Dropdown.Menu>
            <Dropdown.Item><Link to="/inbox">Inbox</Link></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Menu>
    )
  }
}

export default createRestrictedComponent(NavigationMenu)

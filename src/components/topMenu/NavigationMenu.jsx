import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import { Dropdown, Icon, Menu } from 'semantic-ui-react'
import createRestrictedComponent from '../HOC/users/restrictedContent/RestrictedContent'


export class NavigationMenu extends Component {
  render() {
    return (
<div>
nav menu
</div>
    )
  }
}

export default createRestrictedComponent(NavigationMenu)

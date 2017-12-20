import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import logo from '../../style/images/stanford.jpeg'
//import { Dropdown, Icon, Input, Menu, Segment } from 'semantic-ui-react'
import { Layout, Menu, Icon } from 'antd'
import * as actions from '../../actions'
// import Avatar from '../users/avatar/Avatar'
// import NavigationMenu from './NavigationMenu'
// import RightCornerMenu from './RightCornerMenu'


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
      <div>Top menu</div>
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

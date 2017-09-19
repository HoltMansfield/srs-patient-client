import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { Dropdown, Icon, Menu } from 'semantic-ui-react'
import createRestrictedComponent from '../HOC/users/restrictedContent/RestrictedContent'
import * as actions from '../../actions'

export class RightCornerMenu extends Component {
  constructor(props) {
    super(props)
    this.logOut = this.logOut.bind(this)
  }

  logOut() {
    this.props.setLoggedInUser(null)
    this.props.httpClearToken()
    this.props.history.push('/')
  }

  render() {
    return (
      <Menu.Menu position='right'>
        <Dropdown item icon='user' simple>
          <Dropdown.Menu className='left'>
            <Dropdown.Item onClick={this.logOut}>Log Out</Dropdown.Item>
            <Dropdown.Item>Edit Profile</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Menu>
    )
  }
}

const connectedComponent = connect(
  state => { return {

      }
    },
  dispatch => { return {
        setLoggedInUser: user => dispatch(actions.setLoggedInUser(user)),
        httpClearToken: () => dispatch(actions.httpClearToken())
      }
    },
)(RightCornerMenu)

export default withRouter(createRestrictedComponent(connectedComponent))

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
//import { Dropdown, Icon, Menu } from 'semantic-ui-react'
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
<div>
  // <Menu.Menu position='right'>
  //   <Dropdown item className='icon' icon='wrench' simple>
  //     <Dropdown.Menu className='left'>
  //       <Dropdown.Item onClick={this.logOut}>
  //         <div>Log Out</div>
  //         <div className='fine-print margin-top-10'>{this.props.user.email}</div>
  //       </Dropdown.Item>
  //       <Dropdown.Item>Edit Profile</Dropdown.Item>
  //     </Dropdown.Menu>
  //   </Dropdown>
  // </Menu.Menu>
</div>
    )
  }
}

const connectedComponent = connect(
  state => { return {
        user: state.loggedInUser
      }
    },
  dispatch => { return {
        setLoggedInUser: user => dispatch(actions.setLoggedInUser(user)),
        httpClearToken: () => dispatch(actions.httpClearToken())
      }
    },
)(RightCornerMenu)

export default withRouter(createRestrictedComponent(connectedComponent))

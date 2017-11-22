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
right corner menumeπ
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

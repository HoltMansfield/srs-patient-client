import React, { Component } from 'react'
import { connect } from 'react-redux'
//import { Menu, Label, Input } from 'semantic-ui-react'
import * as actions from '../../../actions'

export class InboxSideMenu extends Component {
  state = { activeItem: 'alerts' }

  constructor(props) {
    super(props)

    this.searchTermsChange = this.searchTermsChange.bind(this)
  }

  menuItemSelected(activeItem) {
    this.setState({
      activeItem
    })
    this.props.setMessageViewMode(activeItem)
  }

  searchTermsChange(e) {
    const searchTerms = e.target.value
    this.props.setSearchTerms(searchTerms)
  }

  render() {
    const { activeItem } = this.state

    return (
      <div style={{ width: '100%' }}>
side menu
      </div>
    )
  }
}

export default connect(
  state => { return {
        alerts: state.alerts,
        messages: state.messages
      }
    },
  dispatch => { return {

      }
    },
)(InboxSideMenu)

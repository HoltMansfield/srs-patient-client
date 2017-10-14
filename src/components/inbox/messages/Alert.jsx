import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Segment, Icon, Header, Divider } from 'semantic-ui-react'
import * as actions from '../../../actions'
import './Message.css'

export class Alert extends Component {
  render() {
    return (
      <Segment color='red'>
        <span className='v-align-large-icon'><Icon name='mail outline' size='large' /></span>
        <span>|&nbsp;</span>
        <span className='title'>{this.props.alert.title}&nbsp;</span>
        <span>|&nbsp;</span>
        <span>{this.props.alert.body}</span>
      </Segment>
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
)(Alert)

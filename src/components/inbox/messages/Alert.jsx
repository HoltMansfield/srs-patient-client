import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Segment, Icon, Header, Divider } from 'semantic-ui-react'
import * as actions from '../../../actions'

export class Alert extends Component {
  render() {
    return (
      <Segment color='red'>
        <Grid>
          <Grid.Row divided='horizontally' columns={12}>
            <Grid.Column width={1}>
              <Icon name='mail outline' size='large' />
            </Grid.Column>
            <Grid.Column width={11}>
              <span className='title'>{this.props.alert.title}&nbsp;</span>
              <span>|&nbsp;</span>
              <span>{this.props.alert.body}</span>
            </Grid.Column>
          </Grid.Row>
        </Grid>
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

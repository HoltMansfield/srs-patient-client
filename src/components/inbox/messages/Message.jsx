import React, { Component } from 'react'
import { connect } from 'react-redux'
//import { Segment, Icon, Grid } from 'semantic-ui-react'
import * as actions from '../../../actions'

export class Message extends Component {
  render() {
    return (
      <div>
        // <Segment>
        //   <Grid>
        //     <Grid.Row>
        //       <Grid.Column width={1}>
        //         <Icon name='mail outline' size='large' />
        //       </Grid.Column>
        //     </Grid.Row>
        //     <Grid.Row>
        //       <Grid.Column width={15}>
        //         {this.props.message.title}
        //       </Grid.Column>
        //     </Grid.Row>
        //   </Grid>
        // </Segment>
      </div>
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
)(Message)

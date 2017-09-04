import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Segment, Grid, Form, Button } from 'semantic-ui-react'

import * as actions from '../../../actions'

export class CreateAccount extends Component {
  render() {
    const { save } = this.props.save

    return (
      <Grid padded>
        <Grid.Row columns={3}>
          <Grid.Column></Grid.Column>
          <Grid.Column>
            <Segment raised>
              <Form onSubmit={save}>
              <Form.Field>
                <label>E-Mail</label>
                <input placeholder='email' ref='email' />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input placeholder='password' ref='password' />
              </Form.Field>
              <Button type='submit' onClick={save}>Create Account</Button>
            </Form>
            </Segment>
          </Grid.Column>
          <Grid.Column></Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default connect(
  state => { return {

      }
    },
  dispatch => { return {
        save: newUser => dispatch(actions.httpPost('participants', newUser))
      }
    },
)(CreateAccount)

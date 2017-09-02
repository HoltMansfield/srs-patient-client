import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { Segment, Grid, Form, Button } from 'semantic-ui-react'

import * as actions from '../../../actions'

export class Login extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit() {
    const newUser = {
      email: ReactDOM.findDOMNode(this.refs.email).value,
      password: ReactDOM.findDOMNode(this.refs.password).value
    }

    console.log(newUser)
  }

  render() {
    return (
      <Grid padded>
        <Grid.Row columns={3}>
          <Grid.Column></Grid.Column>
          <Grid.Column>
            <Segment raised>
              <Form>
              <Form.Field>
                <label>E-Mail</label>
                <input placeholder='email' ref='email' />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input placeholder='password' ref='password' />
              </Form.Field>
              <Button type='submit' onClick={this.handleSubmit}>Login</Button>
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

      }
    },
)(Login)

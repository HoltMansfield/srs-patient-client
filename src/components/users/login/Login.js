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
    const { history, setLoggedInUser, httpSetToken } = this.props
    const loginAttempt = {
      email: ReactDOM.findDOMNode(this.refs.email).value,
      password: ReactDOM.findDOMNode(this.refs.password).value
    }

    this.props.login(loginAttempt)
      .then(data => {
        setLoggedInUser(data.user)
        httpSetToken(data.jwt)
        localStorage.setItem('jwt', data.jwt)
        history.push('/inbox')
      })
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
                <input placeholder='password' ref='password' type="password" />
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
        login: loginAttempt => dispatch(actions.httpPost('participants/authenticate', loginAttempt)),
        httpSetToken: token => dispatch(actions.httpSetToken(token)),
        setLoggedInUser: user => dispatch(actions.setLoggedInUser(user))
      }
    },
)(Login)

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { Segment, Grid, Form, Button } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'
import Validation from 'react-validation';
import * as actions from '../../../actions'


export class CreateAccount extends Component {
  constructor(props) {
    super(props)
    this.save = this.save.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      email: '',
      password: ''
    }
  }

  save() {
    const newUser = {
      email: this.state.email,
      password: this.state.password
    }

    this.props.saveUser(newUser)
      .then(data => console.log(data))
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  shouldEnableSubmit() {
    return !(this.state && this.state.email && this.state.password)
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
                // <Validation.components.Input value='really' ref='email' name='email' onChange={this.handleChange} validations={['required', 'email']}/>
                <Validation.components.Input value='email@email.com' name='email' validations={['required', 'email']}/>
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input placeholder='password' ref='password' name='password' onChange={this.handleChange} />
              </Form.Field>
              <Button disabled={this.shouldEnableSubmit()} type='submit' onClick={this.save}>Create Account</Button>
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
        saveUser: newUser => dispatch(actions.httpPost('participants', newUser))
      }
    },
)(CreateAccount)

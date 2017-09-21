import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { Segment, Grid, Form, Button } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'
import { Formik } from 'formik';
import Yup from 'yup';
import { notify } from 'react-notify-toast'
import * as actions from '../../../actions'


const formikConfig = {
  validationSchema: Yup.object().shape({
    email: Yup.string().email().required('E-mail is required'),
    password: Yup.string().required('Password is required')
  }),
  validateOnChange: true
}

export class CreateAccount extends Component {
  constructor(props) {
    super(props)
    this.save = this.save.bind(this)
  }

  captureNewUser(user) {
    const { setLoggedInUser } = this.props

    setLoggedInUser(user)
    notify.show(`Logged in as ${user.email}`, 'success', 1500)
  }

  captureJWT(jwt) {
    const { httpSetToken } = this.props

    httpSetToken(jwt)
    localStorage.setItem('jwt', jwt)
  }

  createVerificationCode(user) {
    const { createVerificationCode } = this.props
    const newCode = { userId: user._id, code: '123' }

    //ToDo: test throwing from here
    //Todo: bounce past verfication step if create code fails?
    return createVerificationCode(newCode)
  }

  createAlert(user) {
    const { createAlert } = this.props
    const newAlert = { userId: user._id, title: 'Welcome', body: 'Riker to the ipsum' }

    return createAlert(newAlert)
  }

  save() {
    const { history, setLoggedInUser } = this.props
    const newUser = {
      email: this.props.values.email,
      password: this.props.values.password
    }

    return this.props.saveUser(newUser)
      .then(data => {
        this.captureNewUser(data.user)
        this.captureJWT(data.jwt)

        this.createVerificationCode(data.user)
          .then(() => {
            this.createAlert(data.user)
              .then(() => {
                history.push('/create-account/verify');
              })
          })

      })
      .catch(() => {
        //ToDo: fix http error handling
      })
  }

  shouldEnableSubmit() {
    return !(this.props.values['email'] && this.props.values['password'])
  }

  render() {
    const {
      values,
      touched,
      errors,
      dirty,
      isSubmitting,
      handleChange,
      handleBlur,
      handleSubmit,
      handleReset,
    } = this.props

    return (
      <Grid padded>
        <Grid.Row columns={3}>
          <Grid.Column></Grid.Column>
          <Grid.Column>
            <Segment raised>
              <Form onSubmit={this.save}>
              <Form.Field>
                <label>E-Mail</label>
                  <input id="email"
                    placeholder="email"
                    type="text"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.email &&
                    touched.email &&
                    <div>
                      {errors.email}
                    </div>}
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                  <input id="password"
                    placeholder="password"
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.password &&
                    touched.password &&
                    <div>
                      {errors.password}
                    </div>}
              </Form.Field>
              <Button disabled={this.shouldEnableSubmit()} type='submit'>Create Account</Button>
            </Form>
            </Segment>
          </Grid.Column>
          <Grid.Column></Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

const connectedComponent = connect(
  state => { return {

      }
    },
  dispatch => { return {
        saveUser: newUser => dispatch(actions.httpPost('participants', newUser)),
        httpSetToken: token => dispatch(actions.httpSetToken(token)),
        createVerificationCode: newCode => dispatch(actions.httpPost('verificationCodes', newCode)),
        createAlert: newAlert => dispatch(actions.httpPost('alerts', newAlert)),
        setLoggedInUser: user => dispatch(actions.setLoggedInUser(user))
      }
    },
)(CreateAccount)

export default Formik(formikConfig)(connectedComponent);

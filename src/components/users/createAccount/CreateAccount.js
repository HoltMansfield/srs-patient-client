import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { Segment, Grid, Form, Button } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'
import { Formik } from 'formik';
import Yup from 'yup';
import * as actions from '../../../actions'


const formikConfig = {
  // We now map React props to form values. These will be injected as [`values`] into
  // our form. (Note: in the real world, you would destructure props, but for clarity this is
  // not shown)
  mapPropsToValues: props => ({
    email: '',
    twitter: 'props.user.social.twitter',
    facebook: 'props.user.social.facebook'
  }),
  // We can optionally define our a validation schema with Yup. It's like Joi, but for
  // the browser. Errors from Yup will be injected as `errors` into the form.
  validationSchema: Yup.object().shape({
    email: Yup.string().email().required('Bruh, email is required'),
    twitter: Yup.string(),
    facebook: Yup.string()
  }),
  // Formik lets you colocate your submission handler with your form.
  // In addition to your from `values`, you have
  // access to all props and some stateful helpers.
  handleSubmit: (values, { props, setErrors, setSubmitting }) => {
    // do stuff with your payload
    // e.preventDefault(), setSubmitting, setError(undefined) are
    // called before handleSubmit is. So you don't have to do repeat this.
    // handleSubmit will only be executed if form values pass validation (if you specify it).
    console.log('handleSubmit')
  },
  validateOnChange: true
}

export class CreateAccount extends Component {
  constructor(props) {
    super(props)
    this.save = this.save.bind(this)
    //this.handleChange = this.handleChange.bind(this)
    // this.state = {
    //   email: '',
    //   password: ''
    // }
  }

  save() {
    const newUser = {
      email: this.state.email,
      password: this.state.password
    }

    this.props.saveUser(newUser)
      .then(data => console.log(data))
  }

  // handleChange(e) {
  //   this.setState({ [e.target.name]: e.target.value })
  // }

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
              <Form>
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

const connectedComponent = connect(
  state => { return {

      }
    },
  dispatch => { return {
        saveUser: newUser => dispatch(actions.httpPost('participants', newUser))
      }
    },
)(CreateAccount)

export default Formik(formikConfig)(connectedComponent);

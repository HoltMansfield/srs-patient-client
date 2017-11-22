import React, { Component } from 'react'
import { connect } from 'react-redux'
//import { Segment, Grid, Form, Button } from 'semantic-ui-react'
import { Formik } from 'formik';
import Yup from 'yup';
import * as actions from '../../../actions'


const formikConfig = {
  validationSchema: Yup.object().shape({
    code: Yup.number()
             .typeError('code must be a three digit number')
             .min(100)
             .max(999)
             .required('Verification code is required')
  }),
  validateOnChange: true
}

export class VerifyAccount extends Component {
  constructor(props) {
    super(props)
    this.state = {
      code: null
    }
    this.verify = this.verify.bind(this)
  }

  componentWillMount() {
    const setState = this.setState.bind(this)
    if(!this.props.loggedInUser) {
      return;
    }

    const query = { userId: this.props.loggedInUser._id }

    this.props.getVerificationCode(query)
      .then(queryResult => {
        setState({
          code: queryResult[0].code
        })
      })
  }

  verify() {
    if(this.props.values['code'] === this.state.code) {
      this.props.history.push('/inbox')
    }
  }

  shouldEnableSubmit() {
    return !(this.props.values['code'])
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
<div>
verfiy account
</div>
    )
  }
}

const connectedComponent = connect(
  state => { return {
        loggedInUser: state.loggedInUser
      }
    },
  dispatch => { return {
        getVerificationCode: query => dispatch(actions.httpPost('verificationCodes/query', query))
      }
    },
)(VerifyAccount)

export default Formik(formikConfig)(connectedComponent);

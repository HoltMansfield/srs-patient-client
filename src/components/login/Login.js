import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Segement } from 'semanti-ui-react'

import * as actions from '../../actions'

export class Login extends Component {
  render() {
    return (
      <Segment raised>
        Pellentesque habitant morbi tristique senectus.
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
)(Login)

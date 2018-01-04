import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Button } from 'antd'
import * as actions from '../../../actions'
import logo from '../../../style/images/stanford.jpeg'

export class HeaderContent extends Component {
  render() {
    return (
      <Row>
        <Col xs={12}>
          <img src={logo} height='70' style={{marginTop: '-8px'}}/>
        </Col>
      </Row>
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
)(HeaderContent)

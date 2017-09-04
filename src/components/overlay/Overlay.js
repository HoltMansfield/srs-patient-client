import React, { Component } from 'react'
import { connect } from 'react-redux'


export class Overlay extends Component {
  render() {
    const { showOverlay } = this.props

    if(showOverlay) {
      return (
        <div className="loading style-2"><div className="loading-wheel"></div></div>
      )
    }

    return null
  }
}

export default connect(
  state => { return {
        showOverlay: state.showOverlay
      }
    },
  dispatch => { return {

      }
    },
)(Overlay)

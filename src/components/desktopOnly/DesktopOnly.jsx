import React, { Component } from 'react'
import './desktopOnly.css'



export class DesktopOnly extends Component {
  render() {
    return (
      <div className="showOnDesktopOnly">
        {this.props.children}
      </div>
    )
  }
}

export default DesktopOnly

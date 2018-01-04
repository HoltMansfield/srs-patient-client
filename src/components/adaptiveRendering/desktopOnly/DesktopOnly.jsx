import React, { Component } from 'react'


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

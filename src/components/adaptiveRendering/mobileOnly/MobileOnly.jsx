import React, { Component } from 'react'


export class MobileOnly extends Component {
  render() {
    return (
      <div className="showOnDesktopOnly">
        {this.props.children}
      </div>
    )
  }
}

export default MobileOnly

import React, { Component } from 'react'
import Notifications from 'react-notify-toast'

import Routes from '../../components/routing/Routes'
import Overlay from '../../components/overlay/Overlay'

export class App extends Component {
  render() {
    return (
      <div>
        <Notifications />
        <Routes />
        <Overlay />
      </div>
    )
  }
}

export default App

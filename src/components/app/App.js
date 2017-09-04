import React, { Component } from 'react'
import Notifications from 'react-notify-toast'
import './react-validation-setup'

import Routes from '../../components/routing/Routes'
import TopMenu from '../../components/topMenu/TopMenu'
import Overlay from '../../components/overlay/Overlay'

export class App extends Component {
  render() {
    return (
      <div>
        <TopMenu />
        <Notifications />
        <Routes />
        <Overlay />
      </div>
    )
  }
}

export default App

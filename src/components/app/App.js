import React, { Component } from 'react'
import Notifications from 'react-notify-toast'
import { Swipeable, defineSwipe } from 'react-touch'
import Routes from '../../components/routing/Routes'
import Overlay from '../../components/overlay/Overlay'

export class App extends Component {
  swipeRight() {
    console.log('not rocket appliances')
  }
  
  render() {
    const swipe = defineSwipe({swipeDistance: 5});

    return (
      <div>
        <Notifications />
          <Swipeable config={swipe} onSwipeRight={this.swipeRight}>
            <Routes />
          </Swipeable>

        <Overlay />
      </div>
    )
  }
}

export default App

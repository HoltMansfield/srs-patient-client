import React, { Component } from 'react'
import { Swipeable, defineSwipe } from 'react-touch'
import { Link } from 'react-router-dom'
import { DatePicker } from 'antd'



export class LandingPage extends Component {
  swipeRight() {
    console.log('not rocket appliances')
  }

  render() {
    const swipe = defineSwipe({swipeDistance: 5});

    return (
      <div className='padded-page'>
      Landing page
      <Swipeable config={swipe} onSwipeRight={this.swipeRight}>
        <div>MAMA</div>
      </Swipeable>
      <DatePicker />
      </div>
    )
  }
}

export default LandingPage

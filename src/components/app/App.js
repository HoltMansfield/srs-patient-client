import React, { Component } from 'react'
import './App.css'
import TopMenu from '../topMenu/TopMenu'

class App extends Component {
  constructor(props) {
    super(props)
    this.activeItem = ''
  }

  render() {
    return (
      <div>
        <TopMenu />
      </div>
    );
  }
}

export default App;

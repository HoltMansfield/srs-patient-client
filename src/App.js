import React, { Component } from 'react'
import { Rating } from 'semantic-ui-react'
import './App.css'
import logo from './style/images/stanford.jpeg'

class App extends Component {
  render() {
    return (
      <div>
        <div className="ui fixed menu">
          <a><img src={logo} height="80" /></a>
          <a className="item"></a>
          <a className="item">Editorials</a>
          <a className="item">Reviews</a>
          <a className="item">Upcoming Events</a>
        </div>
        <div style={{ height: '1900px' }}>mama</div>
      </div>
    );
  }
}

export default App;

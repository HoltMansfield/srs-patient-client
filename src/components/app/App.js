import React, { Component } from 'react'
import { Rating } from 'semantic-ui-react'
import { Dropdown, Icon, Input, Menu, Header, Image, Sidebar, Segment } from 'semantic-ui-react'
import './App.css'
import logo from '../../style/images/stanford.jpeg'

class App extends Component {
  state = { visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  constructor(props) {
    super(props)
    this.activeItem = ''
  }

  render() {
    const { visible } = this.state

    return (
      <div>
        <Menu attached='top'>
          <Menu.Item
            icon="content"
            onClick={this.toggleVisibility}>
          </Menu.Item>
          <img src={logo} height="70" />
        </Menu>
        <Sidebar as={Menu} animation='overlay' width='thin' visible={visible} icon='labeled' onMouseLeave={this.toggleVisibility} vertical inverted>
          <Menu.Item name='home'>
            <Icon name='home' onClick={this.toggleVisibility} />
            Home
          </Menu.Item>
          <Menu.Item name='gamepad'>
            <Icon name='gamepad' />
            Games
          </Menu.Item>
          <Menu.Item name='camera'>
            <Icon name='camera' />
            Channels
          </Menu.Item>
        </Sidebar>
      </div>
    );
  }
}

export default App;

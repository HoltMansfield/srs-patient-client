import React, { Component } from 'react'
import { Rating } from 'semantic-ui-react'
import { Dropdown, Icon, Input, Menu, Segment } from 'semantic-ui-react'
import './App.css'
import logo from '../../style/images/stanford.jpeg'

class App extends Component {
  constructor(props) {
    super(props)
    this.activeItem = ''
  }

  render() {
    return (
      <div>
        <Menu attached='top'>
          <Menu.Menu>
            <Dropdown item icon='content' simple>
              <Dropdown.Menu>
                <Dropdown.Item>Open</Dropdown.Item>
                <Dropdown.Item>Save...</Dropdown.Item>
                <Dropdown.Item>Edit Permissions</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Header>Export</Dropdown.Header>
                <Dropdown.Item>Share</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
          <img src={logo} height="70" />
          <Menu.Menu position='right'>
            <Dropdown item icon='wrench' simple>
              <Dropdown.Menu className='left'>
                <Dropdown.Item>Open</Dropdown.Item>
                <Dropdown.Item>Save...</Dropdown.Item>
                <Dropdown.Item>Edit Permissions</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Header>Export</Dropdown.Header>
                <Dropdown.Item>Share</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

export default App;

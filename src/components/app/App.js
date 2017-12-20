import React, { Component } from 'react'
import Notifications from 'react-notify-toast'
import { Layout, Menu, Icon } from 'antd'
import Routes from '../../components/routing/Routes'
import Overlay from '../../components/overlay/Overlay'

export class App extends Component {
  render() {
    const { Header, Content, Footer } = Layout;

    return (
      <div>
        <Notifications />
          <Layout>
            <Layout>
              <Header style={{ background: '#fff', padding: 0 }} />
              <Content style={{ margin: '24px 16px 0' }}>
                <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                  <Routes />
                </div>
              </Content>
              <Footer style={{ textAlign: 'center' }}>
                Ant Design ©2016 Created by Ant UED
              </Footer>
            </Layout>
          </Layout>
        <Overlay />
      </div>
    )
  }
}

export default App

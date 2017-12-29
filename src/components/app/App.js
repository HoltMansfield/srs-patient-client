import React, { Component } from 'react'
import Notifications from 'react-notify-toast'
import { Layout, Menu, Icon } from 'antd'
import Sidebar from 'react-sidebar';
import Routes from '../../components/routing/Routes'
import Overlay from '../../components/overlay/Overlay'
import SideMenu from './sideMenu/SideMenu'

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebarOpen: false
    }

    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({sidebarOpen: open});
  }

  render() {
    const { Header, Content, Footer } = Layout
    const sidebarContent = <SideMenu />
    const sideStyles = {
      overlay: {
        zIndex: 1,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0,
        visibility: 'hidden',
        transition: 'opacity .3s ease-out, visibility .3s ease-out',
        backgroundColor: 'rgba(0,0,0,.3)',
      }
    }

    return (
      <div>
        <Sidebar sidebar={sidebarContent} style={sideStyles}
         open={this.state.sidebarOpen}
         onSetOpen={this.onSetSidebarOpen}>
         <Notifications />
           <Layout style={{ minHeight: '100vh' }}>
             
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
       </Sidebar>
      </div>
    )
  }
}

export default App

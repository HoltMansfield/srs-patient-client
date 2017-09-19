import React, { Component } from 'react'
import { connect } from 'react-redux'


export default function createRestrictedComponent(WrappedComponent, selectData) {
  class wrapper extends React.Component {
    render() {
      if(this.props.loggedInUser) {
        return <WrappedComponent {...this.props} />;
      }

      return null
    }
  };

  const connectedComponent = connect(
      state => { return {
            loggedInUser: state.loggedInUser
          }
        }
    )(wrapper)

  return connectedComponent
}

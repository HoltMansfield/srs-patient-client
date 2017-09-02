import React, { Component } from 'react'
import { Grid, Icon, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export class LandingPage extends Component {
  render() {
    return (
      <div className="padded-page">
        <Grid textAlign='center' divided='vertically'>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Link to="/create-account" title="Click here to create an account">
                <div><Icon circular name='user' size='massive' color='grey' /></div>
                <div className="margin-top-10"><Button>Create new account</Button></div>
              </Link>
            </Grid.Column>
            <Grid.Column>
              <Link to="/login" title="Click here to login">
                <div><Icon circular name='add user' size='massive' color='grey' /></div>
                <div className="margin-top-10"><Button>Login</Button></div>
              </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default LandingPage

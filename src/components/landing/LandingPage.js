import React, { Component } from 'react'
import { Grid, Icon, Button, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'



export class LandingPage extends Component {
  render() {
    return (
      <div className='padded-page'>
        <Grid textAlign='center' divided='vertically'>
          <Grid.Row columns={4}>
            <Grid.Column></Grid.Column>
            <Grid.Column>
              <Link to='/create-account' title='Click here to create an account'>
                <Segment attached='top' padded='very'>
                  <Icon circular name='add user' size='big' color='grey' />
                </Segment>
                <Button
                  attached='bottom'
                  content='Create new account'
                />
              </Link>
            </Grid.Column>
            <Grid.Column>
              <Link to='/login' title='Click here to login'>
                <Segment attached='top' padded='very'>
                  <Icon circular name='user' size='big' color='grey' />
                </Segment>
                <Button
                  attached='bottom'
                  content='Login'
                />
              </Link>
            </Grid.Column>
            <Grid.Column></Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default LandingPage

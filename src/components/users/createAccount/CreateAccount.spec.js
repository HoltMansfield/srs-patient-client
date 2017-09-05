import React from 'react'
import { shallow, mount } from 'enzyme'
import ReactDOM from 'react-dom'
import { Grid, Button } from 'semantic-ui-react'

import { CreateAccount } from './CreateAccount'

describe('CreateAccount component',  () => {
  const syntheticEvent = { preventDefault: () => undefined }

  it('renders', () => {
    const props = {
      values: {
        email: '',
        password: ''
      },
      handleBlur: jest.fn(),
      handleChange: jest.fn(),
      errors: {
        email: false
      },
      touched: {
        email: false
      }
    }
    const wrapper = mount(<CreateAccount { ...props } />)
    const grids = wrapper.find(Grid)

    expect(grids.length).toEqual(1)
  });

  it('renders nothing when user is logged in', () => {
    const saveUser = jest.fn(() => Promise.resolve(true))
    const props = {
      values: {
        email: '',
        password: ''
      },
      handleBlur: jest.fn(),
      handleChange: jest.fn(),
      errors: {
        email: false
      },
      touched: {
        email: false
      },
      saveUser
    }
    const wrapper = mount(<CreateAccount { ...props } />)

    wrapper.find('form').simulate('submit', syntheticEvent)

    expect(saveUser.mock.calls.length).toBe(1)
  });
})

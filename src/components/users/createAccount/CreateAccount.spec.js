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
      history: { push: jest.fn() },
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

  it('calls api when form is submitted', async () => {
    const saveUser = jest.fn(() => Promise.resolve(true))
    const historyPush = jest.fn()
    const props = {
      values: {
        email: '',
        password: ''
      },
      handleBlur: jest.fn(),
      handleChange: jest.fn(),
      history: { push: historyPush },
      errors: {
        email: false
      },
      touched: {
        email: false
      },
      saveUser
    }
    const wrapper = mount(<CreateAccount { ...props } />)

    await wrapper.find('form').simulate('submit', syntheticEvent)

    expect(saveUser.mock.calls.length).toBe(1)
    expect(historyPush.mock.calls.length).toBe(1)
  });
})

import React from 'react'
import { shallow, mount } from 'enzyme'
import ReactDOM from 'react-dom'
//import { Grid, Button } from 'semantic-ui-react'

import { CreateAccount } from './CreateAccount'


const getLocalStorageMock = () => {
  const mock = {
    setItem: jest.fn()
  }

  global.localStorage = mock

  return mock
}

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

  it('calls save when form is submitted', async () => {
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
    const saveMock = jest.fn()
    wrapper.instance().save = saveMock
    wrapper.update()

    await wrapper.find('form').simulate('submit', syntheticEvent)

    expect(saveMock.mock.calls.length).toBe(1)
  });

  it('save method peforms various functions', async () => {
    const saveUser = jest.fn(() => Promise.resolve({ user: { email: '' }, jwt: {} }))
    const httpSetToken = jest.fn()
    const createVerificationCode = jest.fn(() => Promise.resolve({ user: {}, jwt: {} }))
    const createAlert = jest.fn(() => Promise.resolve({ }))
    const historyPush = jest.fn()
    const setLoggedInUser = jest.fn()
    const localStorageMock = getLocalStorageMock()
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
      saveUser,
      httpSetToken,
      createVerificationCode,
      createAlert,
      setLoggedInUser
    }
    const wrapper = mount(<CreateAccount { ...props } />)

    return wrapper.instance().save()
      .then(() => {
        expect(saveUser.mock.calls.length).toBe(1)
        expect(setLoggedInUser.mock.calls.length).toBe(1)
        expect(localStorageMock.setItem.mock.calls.length).toBe(1)
        expect(httpSetToken.mock.calls.length).toBe(1)
        expect(createVerificationCode.mock.calls.length).toBe(1)
        expect(historyPush.mock.calls.length).toBe(1)
      })
  });
})

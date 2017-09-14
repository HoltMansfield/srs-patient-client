import React from 'react'
import { shallow, mount } from 'enzyme'
import ReactDOM from 'react-dom'
import { Grid, Button } from 'semantic-ui-react'

import { CreateAccount } from './CreateAccount'

// class LocalStorageMock {
//   constructor() {
//     this.store = {};
//   }
//
//   clear() {
//     this.store = {};
//   }
//
//   getItem(key) {
//     return this.store[key] || null;
//   }
//
//   setItem(key, value) {
//     this.store[key] = value.toString();
//   }
//
//   removeItem(key) {
//     delete this.store[key];
//   }
// };
//
// global.localStorage = new LocalStorageMock;

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

  it('calls api when form is submitted', async () => {
    const saveUser = jest.fn(() => Promise.resolve({ user: {}, jwt: {} }))
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
      setLoggedInUser
    }
    const wrapper = mount(<CreateAccount { ...props } />)

    await wrapper.find('form').simulate('submit', syntheticEvent)

    expect(saveUser.mock.calls.length).toBe(1)
    expect(setLoggedInUser.mock.calls.length).toBe(1)
    expect(historyPush.mock.calls.length).toBe(1)
    expect(localStorageMock.setItem.mock.calls.length).toBe(1)
  });
})

import * as actions from '../'

describe('messages actions', () => {
  it('setMessages should create SET_MESSAGES action', () => {
    const expected = {};

    expect(actions.messages.set(expected)).toEqual({
      type: 'SET_MESSAGES',
      messages: expected
    })
  })
})

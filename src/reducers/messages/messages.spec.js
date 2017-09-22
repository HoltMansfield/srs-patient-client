import messages from './messages'


describe('messages reducer', () => {
  const initialState = null

  it('should handle initial state', () => {
    expect(messages(initialState, {})).toEqual(initialState)
  })
})

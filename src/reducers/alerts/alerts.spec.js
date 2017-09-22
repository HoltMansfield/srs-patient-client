import alert from './alerts'


describe('alerts reducer', () => {
  const initialState = null

  it('should handle initial state', () => {
    expect(alert(initialState, {})).toEqual(initialState)
  })
})

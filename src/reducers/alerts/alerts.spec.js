import alert from './alerts'


describe('alerts reducer', () => {
  const initialState = []

  it('should handle initial state', () => {
    expect(alert(initialState, {})).toEqual(initialState)
  })
})

const initialState = null

const alerts = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ALERTS':
      return action.alerts
    default:
      return state
  }
}

export default alerts

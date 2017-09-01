const initialState = { first: 'John', last: 'Blaze' }

const loggedInUser = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.user
    default:
      return state
  }
}

export default loggedInUser

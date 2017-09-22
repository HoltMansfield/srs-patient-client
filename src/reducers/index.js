import { combineReducers } from 'redux'
import alerts from './alerts/alerts'
import loggedInUser from './loggedInUser/loggedInUser'
import messages from './messages/messages'
import showOverlay from './showOverlay/showOverlay'


const rootReducer = combineReducers({
  alerts,
  loggedInUser,
  messages,
  showOverlay
})

export default rootReducer

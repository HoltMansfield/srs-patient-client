import { combineReducers } from 'redux'
import alerts from './alerts/alerts'
import messages from './messages/messages'
import loggedInUser from './loggedInUser/loggedInUser'
import showOverlay from './showOverlay/showOverlay'


const rootReducer = combineReducers({
  alerts,
  loggedInUser,
  messages,
  showOverlay
})

export default rootReducer

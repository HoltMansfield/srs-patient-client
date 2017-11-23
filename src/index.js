import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import 'antd/dist/antd.css'
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
import './style/index.css'
import reducer from './reducers'
import App from './components/app/App'
import registerServiceWorker from './registerServiceWorker'
import * as actions from './actions'


const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

const jwt = localStorage.getItem('jwt')

if(jwt) {
  const json = JSON.parse(window.atob(jwt.split('.')[1]))
  store.dispatch(actions.setLoggedInUser(json._doc))
}

ReactDOM.render(
  <LocaleProvider locale={enUS}>
    <Provider store={store}>
      <App />
    </Provider>
  </LocaleProvider>,
  document.getElementById('root'))

registerServiceWorker()

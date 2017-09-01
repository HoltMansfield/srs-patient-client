import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { HashRouter, Route } from 'react-router-dom'
import './semantic/dist/semantic.min.css'
import './index.css'
import reducer from './reducers'
import App from './components/app/App'
import registerServiceWorker from './registerServiceWorker'

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <div>
        <Route exact path="/" component={App} />
      </div>
    </HashRouter>
  </Provider>,
  document.getElementById('root'))

registerServiceWorker()

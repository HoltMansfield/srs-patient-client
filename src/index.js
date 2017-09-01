import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import './semantic/dist/semantic.min.css'
import './index.css'
import reducer from './reducers'
import Routes from './components/routing/Routes'
import TopMenu from './components/topMenu/TopMenu'
import registerServiceWorker from './registerServiceWorker'


const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

ReactDOM.render(
  <Provider store={store}>
    <div>
      <TopMenu />
      <Routes />
    </div>
  </Provider>,
  document.getElementById('root'))

registerServiceWorker()

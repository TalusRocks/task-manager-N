import React from 'react'
import ReactDOM from 'react-dom'
import './styles/css/index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import store from './store'
import { Provider } from 'react-redux'
import { fetchDbTasks } from './actions'

store.dispatch(fetchDbTasks())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()

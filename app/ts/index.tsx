import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from '~components/App'
import store from '~store/createStore'
import 'bootstrap/dist/css/bootstrap.min.css'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)

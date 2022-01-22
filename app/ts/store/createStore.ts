import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import { createLogger } from 'redux-logger'
import getRootReducer from '~reducers'

function configureStore(preloadedState?: any) {
  const logger = createLogger()
  const enhancers = [applyMiddleware(logger)]
  const composedEnhancers = composeWithDevTools(...enhancers)

  return createStore(getRootReducer(), preloadedState, composedEnhancers)
}

const store = configureStore()

export default store

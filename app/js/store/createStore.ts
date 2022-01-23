/* eslint-env browser */
/* eslint-disable @typescript-eslint/no-var-requires */
import { createHashHistory, History } from 'history'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'
import { applyMiddleware, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import getRootReducer from '~reducers'
// import rootSaga from '~saga'

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['router']
}

const configureStore = (history: History) => {
  const middlewares = []
  const enhancers = []
  const sagaMiddleware = createSagaMiddleware()
  const persistedReducer = persistReducer(persistConfig, getRootReducer(history))

  middlewares.push(sagaMiddleware, routerMiddleware(history))
  const logger = createLogger()
  middlewares.push(logger)

  enhancers.push(applyMiddleware(...middlewares))

  const composedEnhancers = composeWithDevTools(...enhancers)

  const store = createStore(persistedReducer, composedEnhancers)

  sagaMiddleware.run(function*() {
    // yield rootSaga()
  })

  return store
}

export const history = createHashHistory()
export const store = configureStore(history)
export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>

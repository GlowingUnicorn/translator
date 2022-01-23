import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { History } from 'history'
import searches, { SEARCHES_STATE_PATH } from '~reducers/searches'
import settings, { SETTINGS_STATE_PATH } from '~reducers/settings'

// exported for testing
export const mainReducers = {
  [SETTINGS_STATE_PATH]: settings,
  [SEARCHES_STATE_PATH]: searches
}

const getRootReducer = (history: History) => {
  return combineReducers({
    ...mainReducers,
    router: connectRouter(history)
  })
}

export default getRootReducer

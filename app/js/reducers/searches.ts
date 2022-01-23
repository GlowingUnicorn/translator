import { createReducer } from 'deox'
import { SearchesState } from '~types/searches'

export const initialState: SearchesState = {
  current: {
    content: '',
    source: '',
    target: ''
  },
  history: []
}

export default createReducer(initialState, () => [])

export const SEARCHES_STATE_PATH = 'searches'

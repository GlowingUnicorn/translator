import { createReducer } from 'deox'
import produce from 'immer'
import { SearchesState } from '~types/searches'
import { setSearchTerm } from '~actions/searches'

export const initialState: SearchesState = {
  current: {
    searchTerm: '',
    source: '',
    target: ''
  },
  history: []
}

export default createReducer(initialState, handle => [
  handle(setSearchTerm, (state, { payload }) => {
    return produce(state, draft => {
      draft.current.searchTerm = payload.searchTerm
      draft.current.source = payload.lang
      draft.current.target = payload.lang === 'bg' ? 'en' : 'bg'
    })
  })
])

export const SEARCHES_STATE_PATH = 'searches'

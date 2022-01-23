import { Action, createAction } from 'deox'
import { Search } from '~types/searches'

export const SEARCH_TO_API = 'SEARCH_TO_API'
export const SET_SEARCH_TERM = 'SET_SEARCH_TERM'

export const searchToApi = createAction(SEARCH_TO_API, resolve => (payload: Search): Action<
  typeof SEARCH_TO_API,
  Search
> => resolve(payload))

type setSearchTermPayload = {
  searchTerm: string
  lang: string
}

export const setSearchTerm = createAction(
  SET_SEARCH_TERM,
  resolve => (
    payload: setSearchTermPayload
  ): Action<typeof SET_SEARCH_TERM, setSearchTermPayload> => resolve(payload)
)

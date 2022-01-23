import { Action, createAction } from 'deox'
import { Search } from '~types/searches'

export const SEARCH_TO_API = 'SEARCH_TO_API'

export const searchToApi = createAction(SEARCH_TO_API, resolve => (payload: Search): Action<
  typeof SEARCH_TO_API,
  Search
> => resolve(payload))

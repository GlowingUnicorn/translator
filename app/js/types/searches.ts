export type Search = {
  searchTerm: string
  source: string
  target: string
}

export type SearchHistoryItem = {
  date: string
  search: Search
}

export type SearchesState = {
  current: Search
  history: SearchHistoryItem[]
}

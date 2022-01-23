import { createAction } from 'deox'

const SET_DARK_MODE = 'SET_DARK_MODE'

export const setDarkMode = createAction(SET_DARK_MODE, resolve => (payload: boolean) =>
  resolve(payload)
)

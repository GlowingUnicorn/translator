import { createReducer } from 'deox'
import produce from 'immer'
import { SettingsState } from '~types/settings'
import { setDarkMode } from '~actions/settings'
import { RootState } from '~store/createStore'

const initialState: SettingsState = {
  theme: {
    darkMode: false
  }
}

export default createReducer(initialState, handle => [
  handle(setDarkMode, (state, { payload }) => {
    return produce(state, draft => {
      draft.theme.darkMode = payload
    })
  })
])

export const SETTINGS_STATE_PATH = 'settings'
export const isDarkModeSelector = (state: RootState) => state.settings.theme.darkMode

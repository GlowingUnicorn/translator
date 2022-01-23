import React, { useMemo } from 'react'
import { hot } from 'react-hot-loader/root'
import '../../style/app.scss'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import { useSelector } from 'react-redux'
import AppMenu from '~components/app-header/AppMenu'
import { isDarkModeSelector } from '~reducers/settings'

const App = () => {
  const isDarkMode = useSelector(isDarkModeSelector)
  const darkTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: isDarkMode ? 'dark' : 'light'
        }
      }),
    [isDarkMode]
  )

  return (
    <CssBaseline>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline>
          <AppMenu />
        </CssBaseline>
      </ThemeProvider>
    </CssBaseline>
  )
}

export default hot(App)

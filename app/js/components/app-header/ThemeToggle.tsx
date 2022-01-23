import React from 'react'
import { IconButton } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import { isDarkModeSelector } from '~reducers/settings'
import { setDarkMode } from '~actions/settings'

const ThemeToggle = () => {
  const dispatch = useDispatch()
  const isDarkMode = useSelector(isDarkModeSelector)

  const toggleColorMode = () => {
    dispatch(setDarkMode(!isDarkMode))
  }

  return (
    <IconButton sx={{ ml: 1 }} onClick={toggleColorMode}>
      {isDarkMode ? <DarkModeIcon /> : <LightModeIcon />}
    </IconButton>
  )
}

export default ThemeToggle

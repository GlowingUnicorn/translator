import Toolbar from '@mui/material/Toolbar'
import { IconButton } from '@mui/material'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import ThemeToggle from '~components/app-header/ThemeToggle'
import AppBarStyled from '~components/app-header/styled/AppBarStyled'

const AppHeader = ({
  isOpen,
  handleDrawerOpen
}: {
  isOpen: boolean
  handleDrawerOpen: () => void
}) => {
  return (
    <AppBarStyled position="fixed" isOpen={isOpen}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{ mr: 2, ...(isOpen && { display: 'none' }) }}
        >
          <MenuIcon />
        </IconButton>
        <Typography lang="bg_BG" variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          Преводач
        </Typography>
        <ThemeToggle />
      </Toolbar>
    </AppBarStyled>
  )
}

export default AppHeader

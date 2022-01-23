import * as React from 'react'
import Box from '@mui/material/Box'
import { Route, Switch } from 'react-router'
import DrawerHeaderStyled from './styled/DrawerHeaderStyled'
import MainContentStyled from './styled/MainContentStyled'
import SideMenu from '~components/app-header/SideMenu'
import AppHeader from '~components/app-header/AppHeader'
import TranslatePage from '~components/pages/translate/TranslatePage'
import { urls } from '~constants/common'
import Settings from '~components/pages/settings/Settings'
export const drawerWidth = 240

const AppMenu = () => {
  const [isOpen, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <AppHeader isOpen={isOpen} handleDrawerOpen={handleDrawerOpen} />
      <SideMenu isOpen={isOpen} handleDrawerClose={handleDrawerClose} />
      <MainContentStyled isOpen={isOpen}>
        <DrawerHeaderStyled />
        <Switch>
          <Route path={urls.settings}>
            <Settings />
          </Route>
          <Route path={urls.home}>
            <TranslatePage />
          </Route>
        </Switch>
      </MainContentStyled>
    </Box>
  )
}

export default AppMenu

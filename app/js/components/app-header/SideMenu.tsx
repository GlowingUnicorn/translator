import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import * as React from 'react'
import { useTheme } from '@mui/material/styles'
import AppMenuListItem from '~components/app-header/AppMenuListItem'
import DrawerHeaderStyled from '~components/app-header/styled/DrawerHeaderStyled'
import { drawerWidth } from '~components/app-header/AppMenu'
import { sideMenuItems } from '~constants/common'

export type SideMenuItem = {
  url: string
  label: string
  icon: JSX.Element
}

const SideMenu = ({
  isOpen,
  handleDrawerClose
}: {
  isOpen: boolean
  handleDrawerClose: () => void
}) => {
  const theme = useTheme()

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box'
        }
      }}
      variant="persistent"
      anchor="left"
      open={isOpen}
    >
      <DrawerHeaderStyled>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </DrawerHeaderStyled>
      <Divider />
      <List>
        {sideMenuItems.map(sideMenuItem => (
          <AppMenuListItem key={sideMenuItem.label} sideMenuItem={sideMenuItem} />
        ))}
      </List>
    </Drawer>
  )
}

export default SideMenu

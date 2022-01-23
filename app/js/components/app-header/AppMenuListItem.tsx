import React from 'react'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { ListItemButton } from '@mui/material'
import { useHistory } from 'react-router'
import { SideMenuItem } from '~components/app-header/SideMenu'

const AppMenuListItem = ({ sideMenuItem }: { sideMenuItem: SideMenuItem }) => {
  const history = useHistory()

  const handleClick = () => {
    history.push(sideMenuItem.url)
  }

  return (
    <ListItem>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>{sideMenuItem.icon}</ListItemIcon>
        <ListItemText primary={sideMenuItem.label} />
      </ListItemButton>
    </ListItem>
  )
}

export default AppMenuListItem

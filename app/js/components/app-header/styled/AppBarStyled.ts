import { styled } from '@mui/material/styles'
import MuiAppBar from '@mui/material/AppBar'
import { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar/AppBar'
import { drawerWidth } from '~components/app-header/AppMenu'

interface AppBarProps extends MuiAppBarProps {
  isOpen?: boolean
}

const AppBarStyled = styled(MuiAppBar, {
  shouldForwardProp: prop => prop !== 'isOpen'
})<AppBarProps>(({ theme, isOpen }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(isOpen && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}))

export default AppBarStyled

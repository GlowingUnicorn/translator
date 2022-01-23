import { styled } from '@mui/material/styles'
import { drawerWidth } from '~components/app-header/AppMenu'

const MainContentStyled = styled('main', { shouldForwardProp: prop => prop !== 'isOpen' })<{
  isOpen?: boolean
}>(({ theme, isOpen }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(isOpen && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  })
}))

export default MainContentStyled

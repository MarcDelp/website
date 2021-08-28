import React, { useContext } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import Toolbar from '@material-ui/core/Toolbar'
import HomeIcon from '@material-ui/icons/Home'
import { makeStyles } from '@material-ui/core/styles'

import DesktopNavigation from './DesktopNavigation'
import MobileNavigation from './MobileNavigation'
import DisplayContext from '../DisplayHandler/context'
import Settings from '../Settings/Settings'

const useStyles = makeStyles((theme) => ({
  navbarContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%'
  },
  homeButton: {
    marginLeft: theme.spacing(2)
  }
}))

export default function Navbar () {
  const display = useContext(DisplayContext)
  const classes = useStyles()

  return (
    <AppBar position='sticky'>
      <Toolbar>
        <div className={ classes.navbarContainer }>
          <IconButton
            className={ classes.homeButton }
            component={ RouterLink }
            to='/'
          >
            <HomeIcon/>
          </IconButton>

          {
            display === 'mobile'
              ? <MobileNavigation/>
              : <DesktopNavigation/>
          }

          <Settings/>
        </div>
      </Toolbar>
    </AppBar>
  )
}

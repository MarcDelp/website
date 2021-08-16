import React from 'react'
import { NavLink } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Toolbar from '@material-ui/core/Toolbar'
import HomeIcon from '@material-ui/icons/Home'
import { makeStyles } from '@material-ui/core/styles'

import Settings from './Settings/Settings'

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
  const classes = useStyles()

  return (
    <AppBar position='sticky'>
      <Toolbar>
        <div className={ classes.navbarContainer }>
          <NavLink to='/'>
            <IconButton className={classes.homeButton}>
              <HomeIcon/>
            </IconButton>
          </NavLink>

          <div>
            <NavLink to='/cv'>
              <Button disableRipple>
                Parcours
              </Button>
            </NavLink>

            <NavLink to='/privacy'>
              <Button disableRipple>
                Vie privée
              </Button>
            </NavLink>
          </div>

          <Settings/>
        </div>
      </Toolbar>
    </AppBar>
  )
}

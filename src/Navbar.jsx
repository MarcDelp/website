import React from 'react'
import { NavLink } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import Toolbar from '@material-ui/core/Toolbar'
import HomeIcon from '@material-ui/icons/Home'

import Settings from './Settings/Settings'

export default function Navbar () {
  return (
    <AppBar position='sticky'>
      <Toolbar>
        <NavLink to='/'>
          <IconButton>
            <HomeIcon/>
          </IconButton>
        </NavLink>
        <NavLink to='/cv'>Parcours</NavLink>
        <NavLink to='/privacy'>Vie privée</NavLink>
        <Settings/>
      </Toolbar>
    </AppBar>
  )
}

import React, { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import MenuIcon from '@material-ui/icons/Menu'

export default function MobileNavigation () {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <IconButton onClick={ handleClick }>
        <MenuIcon/>
      </IconButton>
      <Menu
        anchorEl={ anchorEl }
        open={ Boolean(anchorEl) }
        onClose={ handleClose }
      >
        <MenuItem
          onClick={ handleClose }
          component={ RouterLink }
          to='/cv'
        >
          Parcours
        </MenuItem>
        <MenuItem
          onClick={ handleClose }
          component={ RouterLink }
          to='/privacy'
        >
          Vie privée
        </MenuItem>
        <MenuItem
          onClick={ handleClose }
          component={ RouterLink }
          to='/roadmap'
        >
          Roadmap
        </MenuItem>
      </Menu>
      </>
  )
}

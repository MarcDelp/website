import React, { useState } from 'react'
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import MoreIcon from '@material-ui/icons/MoreVert'

import StyleSelector from './StyleSelector'

export default function Settings () {
  const [open, setOpen] = useState(false)

  return (
    <>
      <IconButton
        onClick={ () => setOpen(true) }
      >
        <MoreIcon/>
      </IconButton>
      <Drawer
        anchor='right'
        open={ open }
        onClose={ () => setOpen(false) }
      >
        <StyleSelector/>
      </Drawer>
    </>
  )
}

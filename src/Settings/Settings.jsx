import React, { Suspense, lazy, useState } from 'react'
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import MoreIcon from '@material-ui/icons/MoreVert'
import { makeStyles } from '@material-ui/core/styles'

import FullPageLoader from '../core/FullPageLoader'

const StyleSelector = lazy(() => import('./StyleSelector'))

const useStyles = makeStyles((theme) => ({
  settingButton: {
    marginRight: theme.spacing(2)
  },
  settingContainer: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(1)
  }
}))

export default function Settings () {
  const [open, setOpen] = useState(false)
  const classes = useStyles()

  return (
    <>
      <IconButton
        className={ classes.settingButton }
        onClick={ () => setOpen(true) }
      >
        <MoreIcon/>
      </IconButton>
      <Drawer
        anchor='right'
        open={ open }
        onClose={ () => setOpen(false) }
      >
        <Suspense fallback={ <FullPageLoader/> }>
          <div className={ classes.settingContainer }>
            <StyleSelector/>
          </div>
        </Suspense>
      </Drawer>
    </>
  )
}

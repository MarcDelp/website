import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import Button from '@material-ui/core/Button'

export default function DesktopNavigation () {
  return (
    <div>
      <Button
        disableRipple
        component={ RouterLink }
        to='/cv'
      >
        Parcours
      </Button>

      <Button
        disableRipple
        component={ RouterLink }
        to='/privacy'
      >
        Vie privée
      </Button>

      <Button
        disableRipple
        component={ RouterLink }
        to='/roadmap'
      >
        Roadmap
      </Button>
    </div>
  )
}

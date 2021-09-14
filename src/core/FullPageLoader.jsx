import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  innerContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: '10px'
  },
  outerContainer: {
    margin: 'auto',
    textAlign: 'center'
  },
  progress: {
    marginBottom: '10px'
  }
}))

export default function FullPageLoader () {
  const classes = useStyles()

  return (
    <div className={ classes.outerContainer }>
      <div className={ classes.innerContainer }>
        <CircularProgress
          className={ classes.progress }
          color='secondary'
        />
        <span>Chargement...</span>
      </div>
    </div>
  )
}

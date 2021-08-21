import React from 'react'
import Link from '@material-ui/core/Link'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
    width: '100%'
  },
  link: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    display: 'flex'
  }
}))

export default function Footer () {
  const classes = useStyles()

  return (
    <div className={ classes.footerContainer }>
      <Link
        className={ classes.link }
        href='https://github.com/MarcDelp/website#readme'
        target="_blank"
        rel="noreferrer"
      >
        <GitHubIcon fontSize='large'/>
      </Link>
      <Link
        className={ classes.link }
        href='https://www.linkedin.com/in/marc-delpech-0997b412a'
        target="_blank"
        rel="noreferrer"
      >
        <LinkedInIcon fontSize='large'/>
      </Link>
    </div>
  )
}

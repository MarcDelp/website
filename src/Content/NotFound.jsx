import React from 'react'
import Link from '@material-ui/core/Link'

export default function NotFound () {
  return (
    <div>
      <h1>404</h1>
      <p>Il semblerait que nous ne soyons pas en mesure d&apos;afficher cette page... Existe-t&apos;elle réellement ?</p>
      <p><Link href='/'><strong>Retourner à l&apos;accueil</strong></Link></p>
    </div>
  )
}

import React from 'react'
import Link from '@material-ui/core/Link'

export default function NotFound() {
  return (
    <div>
      <h1>Roadmap</h1>

      <p>Je n&apos;ai pas encore réalisé tout ce que je souhaite faire sur ce site. Voici les éléments que je souhaite apporter dans le futur :</p>
      <ul>
        <li>Mise en place de code splitting</li>
        <li>Ajout de test des composants React</li>
        <li>Ajout d&apos;un back-end Node.js</li>
        <li>Passage du back-end en HTTP2 avec la librairie spdy</li>
        <li>Potentielle refonte front-end/back-end pour faire un site en javascript universel</li>
        <li>Ajout d&apos;un background animé, basé sur WebGL et configurable dans les paramètres du site, dans la même veine que ce <Link
          href="https://codepen.io/MarcDelpech/pen/powvQzM"
          target="_blank"
          rel="noreferrer"
        ><strong>CodePen</strong></Link></li>
        <ul>
          <li>Remarque : je ne suis pas à l&apos;origine de ce CodePen</li>
        </ul>
      </ul>
    </div>
  )
}

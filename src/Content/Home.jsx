import React from 'react'
import Link from '@material-ui/core/Link'

export default function Home () {
  const getRandomUrl = () => {
    const chars = 'abcdefghijklmnopqrstuvwxyz'
    const length = Math.ceil(Math.random() * 6) + 4 // number of chars in the url
    let url = ''

    for (let i = 0; i < length; i++) {
      const upperCase = Math.random() >= 0.5
      const char = chars[Math.round(Math.random() * 25)]
      url += upperCase ? char.toUpperCase() : char
    }

    return url
  }

  return (
    <div>
      <h1>Bienvenue !</h1>

      <p>Bienvenue sur mon site personnel.</p>
      <p>Ici vous trouverez des informations sur mon cursus, sur des sujets qui me tiennent à coeur et sur d&apos;autres éléments que j&apos;aurais envie de partager.</p>

      <h1>Ce site est encore en cours de construction.</h1>

      <h2>Pourquoi un site personnel ?</h2>
      <p>La raison pour laquelle j&apos;ai créé ce site est double :</p>
      <ul>
        <li>Il me permet de renouer avec React et son écosystème, que je n&apos;avais plus pratiqué depuis un moment ;</li>
        <li>Il me sert de vitrine pour des personnes qui souhaiteraient voir ce que je suis capable de produire.</li>
      </ul>
      <p>De plus, par la suite, il pourrait me permettre de conduire rapidement des expérimentations sur des technologies que je souhaiterais découvrir.</p>

      <h2>Sur ce site</h2>
      <p>
        Le code source de ce site est open source et disponible sur <Link
          href='https://github.com/MarcDelp/website#readme'
          target="_blank"
          rel="noreferrer"
        ><strong>GitHub</strong></Link>.
      </p>
      <p>
        Le site est développé intégralement sur des technologies JavaScript. Pour le moment, dans cette première version, seul le front-end a été réalisé.
        La partie back-end est laissée à la main de l&apos;hébergeur (ici les pages perso Orange) qui se contente de servir le contenu front-end que j&apos;ai créé.
        Les librairies utilisées sont les suivantes :
      </p>
      <ul>
        <li>React et d&apos;autres librairies de son écosystème (notamment React Router, Material-UI)</li>
        <li>Webpack et webpack-dev-server</li>
        <li>Babel</li>
        <li>Eslint</li>
      </ul>
      <p>L&apos;objectif étant de garder le minimum de dépendances utiles, mais sans chercher à réinventer ce qui existe déjà pour autant.</p>
      <p>
        Un des inconvénients de ne pas gérer la partie serveur est qu&apos;il n&apos;est par conséquent pas possible d&apos;accéder au site par une autre route que celle de base.
        Toute URL qui devrait rediriger soit vers une route existante (accessible via la navigation du site) soit inexistante (qui devrait donc rediriger vers une page 404) conduit
        à une erreur 404 gérée par l&apos;hébergeur.
        <br/>
        Par conséquent, voici un <Link href={ getRandomUrl() }><strong>lien</strong></Link> généré aléatoirement permettant d&apos;afficher la page 404 du site.
      </p>

      <h2>Navigateurs supportés</h2>
      <p>
        Pour terminer cette présentation, notons que les navigateurs testés dans le cadre du développement de ce site sont Brave et Firefox. Comme Brave est basé sur Chromium, les
        autres navigateurs de ce type (Chrome, Edge version Chromium, ...) devraient aussi bien fonctionner. En revanche, il n&apos;y a pas de support pour Internet Explorer.
      </p>

      <h2>Bonne visite !</h2>
    </div>
  )
}

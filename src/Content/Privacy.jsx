import React from 'react'
import Link from '@material-ui/core/Link'

export default function Privacy () {
  return (
    <div>
      <h1>Vie privée</h1>

      <p>
        Le sujet de la vie privée sur internet m&apos;est important. Les positions de super-puissances qu&apos;occupent les GAFA dans le paysage d&apos;internet mettent à mal la
        vie privée de la majorité des personnes, sans que celles-ci s&apos;en rendent compte dans la majeure partie des cas.
      </p>
      <p>
        Collecte permanente de données, accords implicites dès lors qu&apos;on navigue sur un site ou utilise un service, publicité ciblée... sont autant d&apos;intrusions dans
        la vie privée des gens. Mais le problème ne s&apos;arrête pas aux frontières d&apos;internet. Avec la démocratisation des smartphones dans un environnement où seuls existent
        deux systèmes d&apos;exploitation grand public pour mobile (Android &amp; iOS, proposés par Google &amp; Apple respectivement) peu contrôlés sur les récoltes de données, les
        applications mobiles ont aussi trouvé un terrain fertile pour collecter les informations de leur choix directement à la source. Ces applications peuvent ainsi agir à une
        échelle plus grande encore que les sites sur internet, car elles accèdent directement aux données du téléphone. Vous avez peut-être déjà vécu l&apos;expérience de recevoir
        par SMS un code pour valider une authentification et de ne pas avoir à recopier le code car celui-ci a été automatiquement lu par l&apos;application sur laquelle vous
        cherchiez à vous connecter.
      </p>

      <h2>Quelles alternatives ?</h2>
      <h3>Sur internet</h3>
      <p>
        Une multitude de choix existent pour réduire les intrusions dans la vie privée sur internet. Pour ma part, j&apos;ai choisi de remplacer mon navigateur ainsi que mon moteur
        de recherche.
      </p>
      <p>
        En ce qui concerne le navigateur, je me suis orienté vers <Link
          href='https://brave.com/fr/'
          target='_blank'
          rel='noreferre'
        ><strong>Brave</strong></Link>. Construit sur Chromium, la même base que Google Chrome, Brave propose une interface très ressemblante à celui-ci et s&apos;assure une
        compatibilité avec les applications du Chrome Web Store. Ses avantages viennent notamment de son bloqueur de publicités intégré, des redirections automatiques en HTTPS et de
        ses &quot;boucliers&quot; qui permettent de paramétrer ce que le navigateur doit autoriser ou bloquer, comme par exemple les cookies ou même les scripts JavaScript.
      </p>
      <p>
        Pour ce qui est du moteur de recherche, j&apos;ai préféré <Link
          href='https://www.qwant.com/'
          target='_blank'
          rel='noreferrer'
        ><strong>Qwant</strong></Link> à Google. Je reconnais volontier que les résultats retournés par le premier sont un peu moins pertinents que ceux du second. Néanmoins, ils
        me suffisent la majorité du temps. Les rares fois où je fais encore appel à Google sont dans des cas orientés développement informatique sur des points technologiques
        précis, quand la recherche est trop précise pour Qwant.
      </p>

      <h3>Sur smartphones</h3>
      <p>
        En ce qui concerne les mobiles, il est vrai que les nouvelles versions d&apos;Android et d&apos;iOS se veulent, en apparence, plus respectueuses de la vie privée ou
        <em> a minima</em> mieux paramétrables sur ces points, je préfère pour ma part me tourner vers un écosystème pensé entièrement dans ce sens-là. J&apos;utilise donc un
        téléphone basé sur le système d&apos;exploitation <Link
          href='https://e.foundation/'
          target='_blank'
          rel='noreferrer'
        ><strong>/e/OS</strong></Link>.
      </p>
      <p>
        Outre un système d&apos;exploitation qui se veut protecteur de la vie privée, avec une notation sur le respect de la vie privée des applications qui sont installables,
        l&apos;écosystème se compose aussi d&apos;une adresse mail et d&apos;un cloud (basés sur la solution <Link
          href='https://nextcloud.com/'
          target='_blank'
          rel='noreferrer'
        ><strong>NextCloud</strong></Link>), qui remplacent efficacement les produits similaires proposés par Google.
      </p>
    </div>
  )
}

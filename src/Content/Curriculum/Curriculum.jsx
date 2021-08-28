import React from 'react'
import Timeline from '@material-ui/lab/Timeline'

import TimelineEntry from './TimelineEntry'

export default function Curriculum () {
  const workEntries = [{
    company: 'Euro Information',
    description: [
      'Développement d’une application web basée sur Node.js et Vue.js pour gérer l’entraînement et l’amélioration continue d’assistants virtuels et d’analyseurs de documents',
      'Leader technique de l’application : définition des priorités techniques de l’application',
      'Scrum Master pour mon équipe'
    ],
    time: 'Depuis janvier 2020',
    title: 'Ingénieur développement Node.js'
  }, {
    company: 'Sopra Steria',
    description: [
      'Réalisation de projets principalement web ayant trait au traitement du langage naturel. Utilisation d’un ensemble de librairies basées sur le Machine Learning, Deep Learning, OCR, etc',
      'Mise en place d’un classificateur pour assistant virtuel multi - domaine',
      'Encadrement de projets étudiants en tant que référent industriel',
      'Présentations à divers clients'
    ],
    time: 'Septembre 2017 - Décembre 2019',
    title: 'Ingénieur développement en Intelligence Artificielle'
  }, {
    company: 'Sopra Steria',
    description: [
      'Réalisation d\'un panorama des solutions actuelles pour le traitement du langage naturel, évaluation de ces solutions',
      'Travail sur des projets de réalisation d’assistants virtuels basés sur la technologie IBM Watson',
      'Réalisation d\'un POC sur le traitement automatique de mails entrants'
    ],
    time: 'Avril - Août 2017',
    title: 'Stage ingénieur Études et Développement Watson'
  }, {
    company: 'Loria - Laboratoire lorrain de recherche en informatique et ses applications',
    description: [
      'Embarquement d\'un serveur de signaling au sein d\'une application Chrome',
      'Réalisation d\'une extension Chrome pour interagir avec cette application',
      'Adaptation côté serveur de l\'API de transport pour réseau pair à pair Netflux et ajout de fonctionnalités à cette API'
    ],
    time: 'Juin - Août 2016',
    title: 'Stage technicien'
  }]

  const studyEntries = [{
    company: 'TELECOM Nancy',
    description: ['Approfondissement Ingénierie du Logiciel'],
    time: '2014 - 2017',
    title: 'École d’ingénieurs en informatique'
  }, {
    company: 'Lycée C. Guérin',
    description: [
      'Première année en MPSI (Mathématiques, Physique, Sciences de l’Ingénieur)',
      'Deuxième année en classe étoilée de MP (Mathématiques, Physique)'
    ],
    time: '2012 - 2014',
    title: 'Classe Préparatoire aux Grandes Écoles'
  }, {
    company: 'Lycée R.-J. Valin',
    description: ['Option Mathématiques'],
    time: '2012',
    title: 'Baccalauréat Scientifique'
  }]

  return (
    <div>
      <h1>Parcours</h1>

      <Timeline>
        {
          workEntries.map((entry, idx) => (
            <TimelineEntry
              key={ idx }
              addConnector={ idx !== workEntries.length - 1 }
              entry={ entry }
              isLastEntry={ idx === 0 }
            />
          ))
        }
      </Timeline>

      <h1>Études</h1>

      <Timeline>
        {
          studyEntries.map((entry, idx) => (
            <TimelineEntry
              key={ idx }
              addConnector={idx !== studyEntries.length - 1 }
              entry={ entry }
              isLastEntry={ false }
            />
          ))
        }
      </Timeline>
    </div>
  )
}

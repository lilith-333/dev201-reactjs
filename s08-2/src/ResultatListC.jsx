import React, { Component } from 'react'

export default class ResultatListC extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div>
        <h2>Composant Resultat </h2>
        <ul>
            {
                this.props.resultats.map((l,i )=> <li key={i}>{l.nom}</li>)
            }
        </ul>
    </div>
    )
  }
}

/* import React from 'react'

export default function ResultatList(props) {
  return (
    <div>
        <h2>Composant Resultat </h2>
        <ul>
            {
                props.resultats.map((l,i )=> <li key={i}>{l.nom}</li>)
            }
        </ul>
    </div>
  )
}
 */
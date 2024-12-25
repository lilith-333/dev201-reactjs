import React from 'react'

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

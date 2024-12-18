export default function Presentation2(props){
    return (
        <div>
            <h2>hi {props.stagiaire.nom} {props.stagiaire.prenom}</h2>
            <hr/>
            {
                props.showDiplome ?
                <ul>
                {
                    props.diplomes.map( (d,i) => <li key={i}>{d}</li>)
                }
                </ul>
                : 
                <div>pas de diplomes</div>
            }
        </div>
    )
}

import React from "react"

/* export default function Presentation2({stagiaire}){
    return (
        <div>
            <h2>hi {stagiaire.nom} {stagiaire.prenom}</h2>
            <hr/>
        </div>
    )
} */




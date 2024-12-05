import React from 'react'

function Info({formateur}){
    

    let {nom, filiere, ville, centre} = formateur;

    /* return <div>{prop.test} {prop.groupe}</div> */
    /* return <div>{prop.formateur.nom} <br/> {prop.formateur.filiere} <br/> {prop.formateur.ville} {prop.formateur.centre} </div> */
    
    return <div>{nom} <br/> {filiere} <br/> {ville} {centre} </div>
}

export default Info
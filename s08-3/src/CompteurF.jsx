import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

export default function CompteurF() {
    const [compteur, setCompteur] = useState(0);

    const [compteur2, setCompteur2] = useState(0);

    //render
    /* useEffect(function(){
        console.log("hi1");
    }); */

    //componentDidMount
    /* useEffect(function(){
        console.log("h2");
    },[]); */
  
    /* useEffect(function(){
        console.log("hi3");
    },[compteur2]); */

    useEffect(function(){
        console.log("hi4");
    },[compteur,compteur2]);


    return (
        <div style={{ background: "orange", padding: "10px", margin: "10px" }}>
            <h4>Composant compteur</h4>
            <div>
                <p>compteur : {compteur}</p>
                <button onClick={() => setCompteur(compteur+1)}>Incrementer</button>
                <button onClick={() => setCompteur(compteur-1)}>Decrementer</button>
            </div>
            <div>
                <p>compteur2 : {compteur2}</p>
                <button onClick={() => setCompteur2(compteur2+5)}>Incrementer by 5</button>
                <button onClick={() => setCompteur2(compteur2-5)}>Decrementer by 5</button>
            </div>
        </div>
    )
}


/* 
    componentDidMount() {
        console.log("componentDidMount");
    }

    componentDidUpdate(){
        console.log("componentDidUpdate");
    }

    componentWillUnmount(){
        console.log("componentWillUnmount");
    }
 */
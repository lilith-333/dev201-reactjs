import React, { useState } from 'react'

export default function ChercherBar(props) {
    const [term, setTerm] = useState("");

    /* const handleSubmit = (e) => {
        e.preventDefault();
        console.log('hi');
    } */

    function handleSubmit(e){
        e.preventDefault();
        props.onChercheSubmit(term);
    }

  return (
    <div style={{background:"orange", padding:"20px"}}>
        <h2>Composnat ChercherBar</h2>
        <form onSubmit={handleSubmit}>
            <label>Entrer le mot cle de recherche :</label> <br />
            <input type="text" value={term} onChange={e => setTerm(e.target.value)}/> <br />
            <button type='submit'>Chercher</button>
        </form>
    </div>
  )
}

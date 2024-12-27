import React, { useState } from 'react'

export default function Form() {

    const [nom,setNom] = useState("");
    const [prenom,setPrenom] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        alert(`salut nom  : ${nom} prenom : ${prenom}`)
    }

    return (
        <div>
            <h1>Inscription</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nom</label>
                    <input type="text" value={nom} onChange={e=>setNom(e.target.value)}/>
                </div>
                <div>
                    <label>Prenom</label>
                    <input type="text" value={prenom} onChange={e=>setPrenom(e.target.value)}/>
                </div>
                <button type='submit'>submit</button>
            </form>
        </div>
    )
}

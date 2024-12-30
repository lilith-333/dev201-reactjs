import { useState } from 'react'
import './App.css'

function App() {
  const [login, setLogin] = useState("")
  const [pwd, setPwd] = useState("")
  const [dateNaissance, setDateNaissance] = useState("")
  const [ville, setVille] = useState("")
  const [genre, setGenre] = useState("")
  const [loisirs, setLoisirs] = useState([])
  const [hideForm, setHideForm] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setHideForm(true)
  }

  const checkedL = e => {
    if(!loisirs.includes(e.target.value)){
      setLoisirs([...loisirs,e.target.value])
    }else{
      setLoisirs([...loisirs.filter(l => l != e.target.value)])
    }
  }

  return (
    <>
      <h1>Inscription</h1>
      {
        !hideForm ?
          <form onSubmit={handleSubmit}>
            <div>
              <label>Identifiant</label>
              <input type="text" value={login} onChange={e => setLogin(e.target.value)} />
            </div>
            <div>
              <label>Mot de passe</label>
              <input type="password" value={pwd} onChange={e => setPwd(e.target.value)} />
            </div>
            <div>
              <label>Date de naissance</label>
              <input type="date" value={dateNaissance} onChange={e => setDateNaissance(e.target.value)} />
            </div>
            <div>
              <select onChange={e=>setVille(e.target.value)}>
                <option value="casa">Casablanca</option>
                <option >Rabat</option>
              </select>
            </div>
            <div>
              <label>Genre</label>
              <input type="radio" name='genre' value="homme" onChange={e=>setGenre(e.target.value)} /> <label>Homme</label>
              <input type="radio" name='genre' value="femme" onChange={e=>setGenre(e.target.value)} /> <label>Femme</label>
            </div>
            <div>
              <label>Loisirs</label>
              <input type="checkbox" value="Sport" onChange={e=>checkedL(e)} /> <label>Sport</label>
              <input type="checkbox" value="Lecture" onChange={e=>checkedL(e)} /> <label>Lecture</label>
              <input type="checkbox" value="Music" onChange={e=>checkedL(e)} /> <label>Music</label>
            </div>
            <button type='submit'>S'inscrire</button>
          </form>
          :
          <div>
            <button onClick={()=>setHideForm(false)}>Se deconnecter</button>
            <ul>
              <li>Je suis {genre == "homme" ? "Mr." : "Mme." } {login}</li>
              {/* <li>Password : *{pwd}*</li> */}
              <li>né le {dateNaissance} </li>
              <li>à {ville}</li>
              <li>mes loisirs sont : {loisirs.join(" - ")}</li>
            </ul>
          </div>

      }
    </>
  )
}

export default App

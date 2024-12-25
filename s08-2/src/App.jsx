import { useState } from 'react'
import './App.css'
import ChercherBar from './ChercherBar'
import ResultatList from './ResultatList'

const list = [
  { nom: "banane", type: "fruit" },
  { nom: "orange", type: "fruit" },
  { nom: "pomme", type: "fruit" },
  { nom: "raisins", type: "fruit" },
  { nom: "kiwi", type: "fruit" },
  { nom: "tomate", type: "legume" },
  { nom: "carotte", type: "legume" },
  { nom: "pomme de terre", type: "legume" },
  { nom: "navet", type: "legume" },
  { nom: "poivron", type: "legume" }
]

function App() {

  const [type,setType] = useState("");
  const [resultats, setResultats] = useState([]);


  function onChercheSubmitApp(term) {
    setType(term)
    setResultats(list.filter(r => r.type == term))
  }

  return (
    <>
      <h1>Composant App</h1>
      <ChercherBar onChercheSubmit={onChercheSubmitApp}/>
      <p>Le type : {type}</p>
      <ResultatList resultats={resultats}/>
    </>
  )
}

export default App

import './App.css'
import Compteur from './Compteur'
import Message from './Message'
import MessageFun from './MessageFun'
import Presentation from './Presentation'
import Presentation2 from './Presentation2'

function App() {
  
  const stagiaire1 = {nom:"adil",prenom:"doe"}
  let diplomes=["Bac","Licence","Master"]


  return (
    <>
      <h1>HI DEV201 </h1>
      {/* <Presentation nom="john" prenom="doe"/>
      <Presentation nom="jane" prenom="doe"/>
      <Presentation nom="james" prenom="doe"/>
      <Presentation2 stagiaire={stagiaire1} diplomes={diplomes} showDiplome="true"/>
      <Presentation nom="bob" prenom="doe">
        <button>Like</button>
      </Presentation> */}
      {/* <Compteur/> */}
      <MessageFun/>
    </>
  )
}

export default App

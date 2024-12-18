import React from 'react';
import './App.css'

/* function Livres({livres, groupe}){
  
  let style1 = "red";

  return (
    <div>
      <h2>Liste des livres : {groupe}</h2>
      <ul className={style1} id="list1">
        {
          //livres.map(l => <li key={l.id}>{l.titre}</li>)
          livres.map((l,i) => <li key={i}>{l.titre}</li>)
        }
      </ul>
    </div> 
  )
} 
*/

class Livres extends React.Component{

  constructor(props) {
    super(props)
  }

  render(){
    return (
      <div>
        <h2>Liste des livres : {this.props.groupe}</h2>
        <ul className="red" id="list1">
          {
            //livres.map(l => <li key={l.id}>{l.titre}</li>)
            this.props.livres.map((l,i) => <li key={i}>{l.titre}</li>)
          }
        </ul>
      </div> 
    )
  }

}

function App() {

  let livres=[
    {id :10,titre : "POO",auteur :"RAMI",prix :300},
    {id :11,titre : "JS ES6",auteur :"FAMI",prix :230},
    {id :12,titre : "Algorithme",auteur :"KARIMI",prix :330},
    {id :13,titre : "HTML & CSS",auteur :"RAMI",prix :340},
    {id :14,titre : "React",auteur :"RAMI",prix :340}
  ]

  //let style1 = isMember ? "green" : "red";


  let style2 = {color:"white",backgroundColor:"green"};

  return (
    <>
      
      

      <h1>HI DEV201</h1>
      <div className="card">
        {/* <ul className={style1}>
          <li style={style2}>HTML</li>
          <li>CSS</li>
          <li>JS</li>
          <li>BS5</li>
        </ul> */}
      

        <Livres livres={livres} groupe="201"/>

      </div>
      <p className="read-the-docs">
        EFM M201 16/12/2024 
      </p>
    </>
  )
}

export default App

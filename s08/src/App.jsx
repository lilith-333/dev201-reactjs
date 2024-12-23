import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      nom : "",
      prenom: "",
      info : ""
    }
  }

  handleSubmit(e){
    e.preventDefault();
    this.setState({
      info : `Hi : ${this.state.nom} - ${this.state.prenom}`
    })
  }

  render() {
    return (
      <>
        <form onSubmit={e => this.handleSubmit(e)}>
          <div>
            <label>Nom:</label>
            <input type="text" value={this.state.nom} onChange={e => this.setState({nom : e.target.value})}/>
            {this.state.nom.length<5 && <p style={{color:"red"}}>Attention</p>}
          </div>
          <div>
            <label>Prenom</label>
            <input type="text" value={this.state.prenom} onChange={e => this.setState({prenom : e.target.value})}/>
          </div>

          <button type='submit'>Send</button>
        </form>
        <p>{this.state.info}</p>
      </>
    )
  }
}


/* 
Version 2
import { useState } from 'react';
import './App.css'

function App() {
  const [nom,setNom] = useState("")
  const [prenom,setPrenom] = useState("")
  const [info,setInfo] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    if(nom.length>5 && prenom.length>5){
      setInfo(`Hi : ${nom} - ${prenom}`)
      setNom("")
      setPrenom("")
    }
  }

  return (
    <>
      <form onSubmit={e => handleSubmit(e)}>
        <div>
          <label>Nom:</label>
          <input type="text" value={nom} onChange={e => setNom(e.target.value)}/>
          {nom.length<5 && <p style={{color:"red"}}>Attention</p>}
        </div>
        <div>
          <label>Prenom</label>
          <input type="text" value={prenom} onChange={e => setPrenom(e.target.value)}/>
        </div>

        <button type='submit'>Send</button>
      </form>
      <p>{info}</p>
      
    </>
  )
}

export default App */


/* 
// Version 1
import { useState } from 'react';
import './App.css'

function App() {
  const [nom,setNom] = useState("")
  const [prenom,setPrenom] = useState("")
  const [info,setInfo] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    if(nom.length>5 && prenom.length>5){
      setInfo(`Hi : ${nom} - ${prenom}`)
      setNom("")
      setPrenom("")
    }

  }

  function changeNom(e){
    setNom(e.target.value)
  }

  function changePrenom(e){
    setPrenom(e.target.value)
  }

  return (
    <>
      <form onSubmit={e => handleSubmit(e)}>
        <div>
          <label>Nom:</label>
          <input type="text" value={nom} onChange={changeNom}/>
          {nom.length<5 && <p style={{color:"red"}}>Attention</p>}
        </div>
        <div>
          <label>Prenom</label>
          <input type="text" value={prenom} onChange={changePrenom}/>
        </div>

        <button type='submit'>Send</button>
      </form>
      <p>{info}</p>
      
    </>
  )
}

export default App */


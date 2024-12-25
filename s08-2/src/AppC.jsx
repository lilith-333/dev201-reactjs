import React, { Component } from 'react'
import ChercherBarC from './ChercherBarC'
import ResultatListC from './ResultatListC'

export default class AppC extends Component {
  constructor(props) {
    super(props)

    this.list = [
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
  
    this.state = {
      type : "",
      resultats : []
    }
  }

  onChercheSubmitApp(term) {
    this.setState({
      type : term,
      resultats : this.list.filter(r => r.type == term)
    })
  }

  render() {
    return (
      <>
      <h1>Composant App</h1>
      <ChercherBarC onChercheSubmit={(term) => this.onChercheSubmitApp(term)}/>
      <p>Le type : {this.state.type}</p>
      <ResultatListC resultats={this.state.resultats}/>
    </>
    )
  }
}
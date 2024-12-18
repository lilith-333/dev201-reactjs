import React, { Component } from 'react'

export default class Message extends Component {
    constructor(props) {
      super(props)

      this.state={
        msg:"Bienvenue Visiteur",
        msgBtn:"Inscription"
      }

      //this.inscription = this.inscription.bind(this);

    }

    inscription(){
        console.log("hi");
        this.setState({
            msg:"Votre inscription est effectuée",
            msgBtn:"Merci"
        })
    }

  render() {
    return (
      <div>
        <h2>{this.state.msg}</h2>
        {/* <button onClick={this.inscription}>{this.state.msgBtn}</button> */}
        <button onClick={()=>this.inscription()}>{this.state.msgBtn}</button>
      </div>
    )
  }
}

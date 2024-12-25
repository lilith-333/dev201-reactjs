import React, { Component } from 'react'
import Compteur from './Compteur'

export default class AppCompteur extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        isMonter : true
      }
    }
  render() {
    return (
      <>
        <div style={{background:"lightgray",padding:"20px"}}>
            <button disabled={this.state.isMonter} 
                    onClick={() => this.setState({isMonter : true})}>
                Monter
            </button>

            <button disabled={!this.state.isMonter} 
                    onClick={() => this.setState({isMonter : false})}>
                Demonter
            </button>

            {this.state.isMonter && <Compteur /> }
        </div>
      </>
    )
  }
}

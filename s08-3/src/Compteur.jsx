import React, { Component } from 'react'

export default class Compteur extends Component {
    constructor(props) {
        console.log("constructeur");

        super(props)

        this.state = {
            compteur: 0
        }
    }

    componentDidMount() {
        console.log("componentDidMount");
    }

    componentDidUpdate(){
        console.log("componentDidUpdate");
    }

    componentWillUnmount(){
        console.log("componentWillUnmount");
    }

    render() {
        console.log("render");

        return (
            <div style={{ background: "orange", padding: "10px", margin: "10px" }}>
                <h4>Composant compteur</h4>
                <p>compteur : {this.state.compteur}</p>
                <button onClick={() => this.setState({ compteur: this.state.compteur + 1 })}>Incrementer</button>
                <button onClick={() => this.setState({ compteur: this.state.compteur - 1 })}>Decrementer</button>
            </div>
        )
    }


}

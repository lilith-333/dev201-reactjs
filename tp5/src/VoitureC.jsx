import React, { Component } from "react";
export default class VoitureC extends Component {
    constructor() {
        super()
        this.myVoiture = { matricule: '19873X9', marque: 'Toyota', chevaux: 8 }
    }
    render(){
        return(
            <div>
                <h1 style={{ color: 'green' }}>Information voiture</h1>
                <h4>voiture matricule:<span style={{color:"red"}}>{this.myVoiture.matricule}</span></h4>
                <h5>marque:{this.myVoiture.marque} nombre de chevaux:{this.myVoiture.chevaux}</h5>
            </div>
        )
    }
}
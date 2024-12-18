export default function Presentation(props){


    //console.log(props.nom);
    
    //read only : props.nom = "nadir";

    return (
        <div>
            <h2>hi {props.nom} {props.prenom}</h2>
            <hr/>
            {props.children}
        </div>
    )
}

import React from "react"

/* export default function Presentation({nom,prenom}){
    return (
        <div>
            <h2>hi {nom} {prenom}</h2>
            <hr/>
        </div>
    )
} */

/* class Presentation extends React.Component{
    constructor(props) {
        super(props)
    }

    render(){
        return (
            <div>
                <h2>hi {this.props.nom} {this.props.prenom}</h2>
                <hr/>
            </div>
        )
    }
}

export default Presentation */


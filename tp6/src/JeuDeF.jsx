import React, { useState } from 'react'

export default function JeuDeF(props) {

    const [face,setFace] = useState(null);
    const [compteur,setCompteur] = useState(0);
    const [fin,setFin] = useState(false)

    const styleImage = { width: "60px", height: "60px" };

    function getImage() {
        return `images/face${face}.PNG`
    }

    function jouer() {
        const valeur = Math.floor(Math.random() * 6) + 1; 
        
        if(valeur == props.cache){
            setFace(valeur); setCompteur(compteur + 1); setFin(true);
        }else{
            setFace(valeur); setCompteur(compteur + 1);
        }
    }
       
    function initialiser(){
       setFace(null); setCompteur(0); setFin(false);  
    }

  return (
    <div>
        <div>
                <img src="images/init.PNG" />
                <h1>Jeu de Dé {props.cache}</h1>

                <h2>face : {face}</h2>

                
                {face && <img src={getImage()} style={styleImage} />}

                <h2>nombre d'essais : {compteur}</h2>

                {
                    fin 
                    ?
                        <div>
                            <p>Bravo vous avez trouvez la face cachée </p>
                            <button onClick={() => initialiser()}>Initialiser</button>
                        </div>
                    : 
                        <button onClick={() => jouer()}>jouer</button>
                }
            </div>
    </div>
  )
}


/* import React, { Component } from 'react'

export default class JeuDe extends Component {
    constructor(props) {
        super(props)

        this.state = {
            face : null,
            compteur : 0,
            fin : false
        }
    }

    jouer() {
        const valeur = Math.floor(Math.random() * 6) + 1; 
        
        if(valeur == this.props.cache){
            this.setState({compteur : this.state.compteur +1, face : valeur, fin:true})
        }else{
            this.setState({compteur : this.state.compteur +1, face : valeur})
        }
    }
       
    initialiser(){
       this.setState({ face:null, compteur: 0, fin: false });   
    }
     
    getImage(){
        return `images/face${this.state.face}.PNG`
    }

    render() {
        const styleImage = { width: "60px", height: "60px" };

        return (
            <div>
                <img src="images/init.PNG" />
                <h1>Jeu de Dé {this.props.cache}</h1>

                <h2>face : {this.state.face}</h2>

                
                {this.state.face && <img src={this.getImage()} style={styleImage} />}

                <h2>nombre d'essais : {this.state.compteur}</h2>

                {
                    this.state.fin 
                    ?
                        <div>
                            <p>Bravo vous avez trouvez la face cachée </p>
                            <button onClick={() => this.initialiser()}>Initialiser</button>
                        </div>
                    : 
                        <button onClick={() => this.jouer()}>jouer</button>

                }

            </div>
        )
    }
} */

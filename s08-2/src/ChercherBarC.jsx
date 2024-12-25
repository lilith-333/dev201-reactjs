import React, { Component } from 'react'

export default class ChercherBarC extends Component {
    constructor(props) {
        super(props)

        this.state = {
            term: ""
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onChercheSubmit(this.state.term);
    }

    render() {
        return (
            <div style={{ background: "orange", padding: "20px" }}>
                <h2>Composnat ChercherBar</h2>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <label>Entrer le mot cle de recherche :</label> <br />
                    <input type="text" value={this.state.term} 
                        onChange={e => this.setState({term : e.target.value})} /> <br />
                    <button type='submit'>Chercher</button>
                </form>
            </div>
        )
    }
}

/* import React, { useState } from 'react'

export default function ChercherBar(props) {
    const [term, setTerm] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        props.onChercheSubmit(term);
    }

  return (
    <div style={{background:"orange", padding:"20px"}}>
        <h2>Composnat ChercherBar</h2>
        <form onSubmit={handleSubmit}>
            <label>Entrer le mot cle de recherche :</label> <br />
            <input type="text" value={term} onChange={e => setTerm(e.target.value)}/> <br />
            <button type='submit'>Chercher</button>
        </form>
    </div>
  )
}
 */
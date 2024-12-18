import React, { Component } from 'react'

export default class ProductC extends Component {
    constructor(props) {
      super(props)
    }
  render() {
    return (
        <>
            <div className="col">
                <div className="card shadow-sm">
                    <img className="bd-placeholder-img card-img-top"
                        src={`pictures/${this.props.produit.thumbnail}`} alt="" />
                    <div className="card-body">
                        <p className="card-title">{this.props.produit.title}</p>
                        <p className="card-text">{this.props.produit.price}</p>
                        <div className="d-flex justify-content-between alignitems-center">
                            <div className="btn-group">
                                <button type="button" className="btn btn-sm btn-outline-secondary">Ajouter au panier</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
  }
}

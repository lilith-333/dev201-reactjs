import React, { Component } from 'react'
import ProductC from './ProductC'

export default class ProductsC extends Component {

    constructor(props) {
      super(props)
    }

  render() {
    return (
       <>
            <div className='row'>
                {
                    this.props.produits.map(p => <ProductC key={p.id} produit={p}/>)
                } 
            </div>
        </>
    )
  }
}

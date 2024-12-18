import React from 'react'
import Product from './Product';

export default function Products({produits}) {
  return (
    <>
        <div className='row'>
        {
            produits.map(p => <Product key={p.id} produit={p}/>)
        } 
        </div>
    </>
  )
}

/* import React from 'react'
import Product from './Product';

export default function Products({produits}) {
  return (
    <>
        <div className='row'>
        {
            produits.map(p => <Product key={p.id} title={p.title} price={p.price} thumbnail={p.thumbnail}/>)
        } 
        </div>
    </>
  )
} */

/* import React from 'react'
import Product from './Product';

export default function Products(props) {
  return (
    <>
        <div className='row'>
        {
            props.produits.map(p => <Product key={p.id} title={p.title} price={p.price} thumbnail={p.thumbnail}/>)
        } 
        </div>
    </>
  )
} */

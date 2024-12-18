import React from 'react'


export default function Product({produit}) {
    return (
        <>
            <div className="col">
                <div className="card shadow-sm">
                    <img className="bd-placeholder-img card-img-top"
                        src={`pictures/${produit.thumbnail}`} alt="" />
                    <div className="card-body">
                        <p className="card-title">{produit.title}</p>
                        <p className="card-text">{produit.price}</p>
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

/* import React from 'react'


export default function Product({thumbnail,title,price}) {
    return (
        <>
            <div className="col">
                <div className="card shadow-sm">
                    <img className="bd-placeholder-img card-img-top"
                        src={`pictures/${thumbnail}`} alt="" />
                    <div className="card-body">
                        <p className="card-title">{title}</p>
                        <p className="card-text">{price}</p>
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
} */

/* import React from 'react'


export default function Product(props) {
    return (
        <>
            <div className="col">
                <div className="card shadow-sm">
                    <img className="bd-placeholder-img card-img-top"
                        src={`pictures/${props.thumbnail}`} alt="" />
                    <div className="card-body">
                        <p className="card-title">{props.title}</p>
                        <p className="card-text">{props.price}</p>
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
} */


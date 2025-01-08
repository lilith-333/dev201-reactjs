import React from 'react'

export default function ListArticles({articles}) {
    
  return (
    <div>
        <h2>Liste des articles : {articles.length}</h2>
        <div>
            {
                articles.map(a => 
                    <div key={a.id} style={{border:"1px solid black",marginBottom:"10px"}}>
                        <h4>{a.id} - {a.title}</h4>
                        <p>{a.body}</p>
                        <div>
                            <button>Edit</button>
                            <button>Delete</button>
                            <button>Details</button>
                        </div>
                    </div>)
            }
        </div>
    </div>
  )
}

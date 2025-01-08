import React, { useState } from 'react'
import AddArticle from './AddArticle'
import ListArticles from './ListArticles'

const data = [
    { id: 1, title: "post 1", body: "Quisque cursus, metus vitae pharetra" },
    { id: 2, title: "post 2", body: "Quisque cursus, metus vitae pharetra" },
]

export default function Articles() {
    const [articles,setArticles] = useState(data)

    const saveArticle = (title,body) => {

        //console.log(title,body);

        /* const id = articles.length + 1;
        const newArticle = {id, title, body}
        setArticles([...articles, newArticle]); */

        const id = articles.length + 1;
        setArticles([...articles,{id, title, body}])
    }

  return (
    <div>
        <AddArticle addArticle={saveArticle}/>
        <hr />
        <ListArticles articles={articles}/>
    </div>
  )
}

import React, { useState } from 'react'

export default function AddArticle(props) {

    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addArticle(title,body);
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title" value={title} onChange={e=>setTitle(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="body">Body</label>
                <input type="text" name="body" id="body" value={body} onChange={e=>setBody(e.target.value)}/>
            </div>
            <div>
                <button type='submit'>Add</button>
            </div>
        </form>
    </div>
  )
}

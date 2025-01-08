import React, { useState } from 'react'

export default function ListArticles({ articles, editArticle }) {

    const [isEditing, setIsEditing] = useState(null)

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const startEditing = article => {
        setIsEditing(article.id);
        setTitle(article.title);
        setBody(article.body);

    }

    const handleEditSubmit = e => {
        e.preventDefault()
        editArticle(isEditing, title, body);
        setIsEditing(null);
        setTitle("");
        setBody("");
    }

    return (
        <div>
            <h2>Liste des articles : {articles.length}</h2>
            <div>
                {
                    articles.map(a =>
                        <div key={a.id} style={{ border: "1px solid black", marginBottom: "10px" }}>
                            {isEditing === a.id ? (
                                <form onSubmit={handleEditSubmit}>
                                    <input
                                        type="text"
                                        value={title}
                                        onChange={e => setTitle(e.target.value)}
                                        placeholder="Title"
                                    />
                                    <input
                                        type="text"
                                        value={body}
                                        onChange={e => setBody(e.target.value)}
                                        placeholder="Body"
                                    />
                                    <br />
                                    <button type="submit">Save</button>
                                    <button type="button" onClick={() => setIsEditing(null)}>Cancel</button>
                                </form>
                            ) : (
                                <>
                                    <h4>{a.id} - {a.title}</h4>
                                    <p>{a.body}</p>
                                    <div>
                                        <button onClick={() => startEditing(a)}>Edit</button>
                                        <button>Delete</button>
                                        <button>Details</button>
                                    </div>
                                </>
                            )
                            }
                        </div>)
                }
            </div>
        </div>
    )
}

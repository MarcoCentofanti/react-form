import { useState } from "react"

export default function ArticleList() {
  const [articles, SetArticles] = useState(["Guerra e pace", "Il Processo", "Il barone rampante", "Moby Dick", ])
  const [newArticle, SetNewArticle] = useState(``)

  const addArtilce = (e) => {
    e.preventDefault()
    SetArticles([...articles, newArticle])
    SetNewArticle("")

  }

  return (
    <>
      <ul>
        {articles.map((singlearticle, index) => (
          <li key={index}>{singlearticle}</li>
        ))}
      </ul>
      <form onSubmit={addArtilce}>
        <input 
          type="text"
          value={newArticle}
          onChange={(e) => SetNewArticle(e.target.value)}/>
          <button
            type="submit">
              Aggiungi Articolo
            </button>
          
      </form>
    </>
    )
  }

import { useState } from "react"

export default function ArticleList() {
  const [articles, SetArticles] = useState(["Guerra e pace", "Il Processo", "Il barone rampante", "Moby Dick", ])
  const [newArticle, SetNewArticle] = useState(``)

  const addArtilce = (e) => {
    e.preventDefault()
    SetArticles([...articles, newArticle])
    SetNewArticle("")
  }

  const removeArticle = (index) => {
    const trimmedArticleList = articles.filter((element, i) => {
      return index !== i
    })
    SetArticles(trimmedArticleList)
  }

  return (
    <>
      <ul>
        {articles.map((singlearticle, index) => (
          <li 
          key={index}>
            {singlearticle}
            <button 
              onClick={() => removeArticle(index)}>
                X
            </button>
          </li>
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

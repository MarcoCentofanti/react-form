import { useState } from "react"

export default function ArticleList() {
  const [articles, SetArticles] = useState(["Guerra e pace", "Il Processo", "Il barone rampante", "Moby Dick", ])
  const [newArticle, SetNewArticle] = useState(``)
  const [modifiedArticle, SetModifiedArticle] = useState("")
  const [isModalOpen, SetIsModalOpen] = useState([false, false, false, false,])

  const addArticle = (e) => {
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

  const modalVisibility = (index) => {
    const modifyModal = isModalOpen.map((element, i) => {
      return(
        i === index? !element : element 
      )
    })
    SetIsModalOpen(modifyModal)
}

  const modifyArticle = (e, index) => {
      e.preventDefault()
    const modifiedArticles = articles.map((element, i) => {
      return (
        i === index? modifiedArticle : element
      )
    })
    SetArticles(modifiedArticles)
  }

  return (
    <>
      <ul>
        {articles.map((singlearticle, index) => (
          <li className="mb-3"
          key={index}>
            {singlearticle}
            <button 
              onClick={() => removeArticle(index)}>
                X
            </button>
            <button 
              onClick={() => modalVisibility(index)}>
                modifica
            </button>
             {isModalOpen[index] && (
              <form 
                onSubmit={(e) => modifyArticle(e, index)} 
                className="mb-5 mt-3">
                <input 
                  type="text"
                  // defaultValue={]}
                  value={modifiedArticle}
                  onChange={(e) => SetModifiedArticle(e.target.value)} />
                  <button
                  type="Submit">conferma modifica</button>
              </form>
              )}
          </li>
        ))}
      </ul>
      <form onSubmit={addArticle}>
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

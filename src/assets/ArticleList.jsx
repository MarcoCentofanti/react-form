import { useState } from "react"

export default function ArticleList() {
  const [articles, SetArticles] = useState(["Guerra e pace", "Il Processo", "Il barone rampante", "Moby Dick", ])

  return (
    <ul>
      {articles.map((singlearticle, index) => (
        <li key={index}>{singlearticle}</li>
      ))}
    </ul>
    )
  }

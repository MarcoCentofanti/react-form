// Milestone 1
// Creare una pagina che visualizzi una lista di articoli, mostrandone solo il titolo.

// Milestone 2
// Aggiungiamo in pagina un semplice form con un campo input in cui inserire il titolo di un nuovo articolo del blog. Al submit del form, mostrare la lista degli articoli aggiornati.

// BONUS
// Aggiungere la possibilità di cancellare ciascun articolo utilizzando un'icona.
// Implementare la funzionalità di modifica del titolo di un post.
// Impostare il lavoro su più componenti.

import { useState } from 'react'
import './App.css'
import ArticleList from './assets/ArticleList'

function App() {


  return (
    <>
      <h1>Articoli</h1>
      <ArticleList/>
    </>
  )
}

export default App

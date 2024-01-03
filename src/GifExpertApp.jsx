import { useState } from 'react'
import { AddCategory } from './components/AddCategory'

export const GifExpertApp = () => {
  // ¡¡¡No se deben poner hooks dentro de condicionales!!!

  const [categories, setCategories] = useState([
    'Death Note',
    'Dragon Ball',
  ])

  const onAddCategory = () => {
    setCategories(['Saint Seiya', ...categories])
    // setCategories((cat) => [...cat, 'Saint Seiya']) // Otra forma de insertar
  }

  return (
    <>
      {/* Título */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory setCategories={setCategories} />

      {/* Listado de gif */}
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>
        })}
      </ol>
      {/* Gif Item */}
    </>
  )
}

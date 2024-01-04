import { GifItem } from './GifItem'
import { useFetchGifs } from '../hooks/useFetchGifs'

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category)

  return (
    <>
      <h3>{category}</h3>
      {isLoading && <h2>Cargando...</h2>}
      {/* Para el loading se puede crear un fc que muestre una imagen, un gif, etc. */}

      <div className="card-grid">
        {images.map((image) => (
          <GifItem
            key={image.id}
            {...image} // Envía lo que hay en image como properties
          />
        ))}
      </div>
    </>
  )
}

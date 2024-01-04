// Se pueden desestructurar las props porque se enviaron como {...image} desde GifGrid:
export const GifItem = ({ title, url }) => {
  return (
    <div className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  )
}

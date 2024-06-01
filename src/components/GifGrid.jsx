import { useEffect, useState } from "react"

import { GifItem } from "./GifItem"
import { useFetchGifs } from "../hooks/useFetchGifs"


export const GifGrid = ({category}) => {

//  const [images, setImages] = useState([])
//
//  const getimages = async () => {
//      const images = await getGifs(category)
//      setImages(images)
//      //console.log(images)
//  }
//  
//
//  useEffect(() => {getimages()}, [category]) // Si la categoría cambia, se vuelve a ejecutar el useEffect, si no cambia, no se ejecuta. Si le hubiera entregado un array vacío, se ejecutaría una sola vez.

//hare lo anterior pero con un custom hook
const {images, isLoading} = useFetchGifs(category)

  return (
    <>
        <h3>{category}</h3>
        {isLoading && <p>Cargando...</p> /*si esta cargando, muestra el mensaje de cargando*/} 
        <div className="card-grid">
            {images.map((img) => (
                <GifItem key={img.id} {...img}/> //...img es igual a title={img.title} url={img.url}, esparse todas sus propiedades
            ))}
        </div>
    </>
  )
}

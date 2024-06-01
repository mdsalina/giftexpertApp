import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"

//cracion de un custom hook para la peticion de las imagenes
export const useFetchGifs = (category) => {

 const [images, setImages] = useState([])
 const [isLoading, setisLoading] = useState(true)

 const getimages = async () => {
     const images = await getGifs(category)
     setImages(images)
     setisLoading(false)
 }
 
 useEffect(() => {getimages()}, [category]) // Si la categoría cambia, se vuelve a ejecutar el useEffect, si no cambia, no se ejecuta. Si le hubiera entregado un array vacío, se ejecutaría una sola vez.

    return{
        images, // equivalente a images:images,
        isLoading
    }
}

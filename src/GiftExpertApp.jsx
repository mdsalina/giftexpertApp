import { useState } from "react"
import { AddCategory,GifGrid } from "./components" //importacion de los componentes, no es neceaario poner index.js porque se toma por defecto

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState([])

    //funcion para agregar una categoria
    const onAddCategory = (onNewCategory) => {
        // si categoria ya existe no la agrega
        if(categories.includes(onNewCategory)) return

        setCategories([onNewCategory,...categories])
        // categories.push('Death Note') //no se debe hacer esto porque se esta mutando el estado sin usar el setCategories
    }

  return (
    <>
        {/*titulo*/}
        <h1>GiftExpertApp</h1>

        {/*input*/}
        <AddCategory onNewValue={onAddCategory} /> 

        {/*lista de categorias*/}
        { //map recorre el arreglo de categorias y genera un item de la lista para cada elemento de las categorias
            categories.map( category => (
                <GifGrid key={category} category={category}/>
            ))
        }

            {/*Gift Item*/}
    </>
  )
}

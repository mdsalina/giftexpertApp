import { useState } from "react"
import PropTypes from 'prop-types'

export const AddCategory = ({onNewValue}) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChnace = ({target}) => {
        setInputValue(target.value)   
    }

    //cuando se cargar el formulario
    const OnSumits = (event) => {
        event.preventDefault() //evita que se recargue la pagina
        if(inputValue.trim().length > 2){  //trim elimina espacios en blanco inicio y final
            //onAddCategory(categories=>[inputValue, ...categories])  //con el callback se obtiene el estado anterior y se agrega el nuevo valor
            onNewValue(inputValue)  //se envia el valor al padre
            setInputValue('')
        }
    }


  return (
    <form onSubmit={OnSumits} aria-label="form">
        <input 
        type="text" 
        placeholder="Buscar..."
        value={inputValue}
        onChange={onInputChnace}
        />

    </form>
  )
}

AddCategory.propTypes = {
    onNewValue: PropTypes.func.isRequired
}
import { fireEvent, render,screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('AddCategory test', () => {
    test('debe de cambiar la caja de texto', () => {
        render(<AddCategory onNewValue={()=>{}}/>)
        const input = screen.getByPlaceholderText('Buscar...')
        fireEvent.input(input, {target:{value:'Hola Mundo'}})
        expect(input.value).toBe('Hola Mundo')

    })
    test('debe de llamar onNewValue si el input tiene un valor', () => {
        const inputVal = 'Hola Mundo'
        const onNewValue = jest.fn()   //crea una funcion simulada=mock

        render(<AddCategory onNewValue={onNewValue}/>)

        const input =screen.getByRole('textbox')
        const form =screen.getByRole('form')

        fireEvent.input(input, {target:{value:inputVal}})
        fireEvent.submit(form)
        expect(input.value).toBe('')

        expect(onNewValue).toHaveBeenCalled() //prubea si la funcion simulada fue llamada
        expect(onNewValue).toHaveBeenCalledTimes(1) //prubea si la funcion simulada fue llamada una vez
        expect(onNewValue).toHaveBeenCalledWith(inputVal) //prueba si la funcion simulada fue llamada con el valor correcto
    })

    test('No debe de llamar onNewValue si el input esta vacio', () => {

        const onNewValue = jest.fn()   //crea una funcion simulada=mock
        render(<AddCategory onNewValue={onNewValue}/>)
        const form =screen.getByRole('form')

        fireEvent.submit(form) //envia el formulario sin valor
        expect(onNewValue).not.toHaveBeenCalled() //prubea si la funcion simulada no fue llamada

    })
})
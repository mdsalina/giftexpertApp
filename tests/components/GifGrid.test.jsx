import { render,screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

jest.mock('../../src/hooks/useFetchGifs') //simula el hook


describe('GifGrid test', () => {
const category="One Punch"

    test('debe de mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({ //simula el hook, antes de entregar un resultado
            images:[],
            isLoading:true
        })

        render(<GifGrid category={category}/>)
        expect(screen.getByText('Cargando...'))
        expect(screen.getByText(category))

    })

    test('debe de mostrar items cuando se cargan imagenes useFetchGifs', () => {

        const gifs=[  //simula gifs de respuestas del hook
            {
                id:'ABC',
                url:'https://localhost/cualquier/cosa.jpg',
                title:'Cualquier cosa'
            },
            {
                id:'123',
                url:'https://localhost/cualquier/cosa.jpg',
                title:'Cualquier cosa'
            }
        ]
        useFetchGifs.mockReturnValue({ //simula el resultado del hook
            images:gifs,
            isLoading:false
        })

        render(<GifGrid category={category}/>)
        expect(screen.getAllByRole('img').length).toBe(gifs.length)  //espera que el numero de imagenes sea igual al numero de gifs



    })
})
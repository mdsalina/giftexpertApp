import { render,screen} from "@testing-library/react"
import { GiftExpertApp } from "../src/GiftExpertApp";

describe('GifExpertApp test', () => {
    test('debe de mostrar el componente correctamente', () => {
        render(<GiftExpertApp/>);
        screen.debug()
    })

})
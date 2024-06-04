import { render,screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('GifItem test', () => {

  const title = 'Un titulo';
  const url = 'https://localhost/algo.jpg';

  test('debe de hacer mach con el snapshot', () => {
    const {container}=render(<GifItem title={title} url={url}/>)
    expect(container).toMatchSnapshot();
  })

  test('debe de mostrar la imagen con el URL y el Alt de los props', () => {
    //const {getByAltText} = render(<GifItem title={title} url={url}/>)
    //const img = getByAltText(title);
    //expect(img.src).toBe(url);

    //Otra forma de hacerlo
    //render(<GifItem title={title} url={url}/>)
    //expect(screen.getByRole('img').src).toBe(url);
    //expect(screen.getByRole('img').alt).toBe(title);

    // otra forma de hacerlo
    render(<GifItem title={title} url={url}/>)
    const {src,alt} = screen.getByRole('img');
    expect(src).toBe(url);
    expect(alt).toBe(title);
  })

  test('debe de mostrar el titulo en el componente', () => {
    render(<GifItem title={title} url={url}/>)
    expect(screen.getByText(title)).toBeTruthy()
  })
});

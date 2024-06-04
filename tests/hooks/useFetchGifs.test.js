import { render, renderHook,waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"


describe('useFetchGifs test', () => {

    test('debe de retornar el estado inicial', () => {
        const{result}=renderHook(()=>useFetchGifs('One Punch'));
        const {images,isLoading}=result.current;
        expect(images.length).toBe(0);
        expect(isLoading).toBe(true);
    })

    test('debe de retornar un arreglo de imagenes y el loading en false', async() => {
        const{result}=renderHook(()=>useFetchGifs('One Punch'));

        await waitFor( //espera a que se cumpla la condicion
            ()=>expect(result.current.images.length).toBeGreaterThan(0)
        );

        const {images,isLoading}=result.current;
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBe(false);
    })
})
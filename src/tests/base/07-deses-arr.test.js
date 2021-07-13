import { retornaArreglo } from "../../base-pruebas/07-deses-arr"


describe('Pruebas en desestructuración', () => {

    test('debe de retornar un string y un número', () => {

        const [letras, numeros] = retornaArreglo();

        // expect(arr).toEqual( ['ABC', 123]);
        expect(letras).toBe('ABC');
        
    })
    

})
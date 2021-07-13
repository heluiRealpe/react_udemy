import '@testing-library/jest-dom';
import { getSaludo } from "../../base-pruebas/02-template-string";




describe('Pruebas en 02-template-string.js', () => {

    test('prueba en el método getSaludo', () => {
        
        const nombre = 'Héctor';

        const saludo = getSaludo( nombre );
        console.log(saludo);
        
        // expect(saludo).toBe( 'Hola ' + nombre );
    })

    // getSaludo debe de retornar Hola Carlos! si no hay argumento de nombre

    test('getSaludo debe de retornar Hola Carlos! si no hay argumento de nombre', () => {

        const saludo = getSaludo();
        expect( saludo ).toBe( 'Hola Carlos!' );
        
    })
    
    
})
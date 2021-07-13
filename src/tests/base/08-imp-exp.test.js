import { getHeroeById } from "../../base-pruebas/08-imp-exp";
import heroes from "../../data/heroes";


describe('Pruebas en funciones de Héroes', () => {

    test('debe de retornar un héroe', () => {

        const id = 1;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find( h => h.id === id);

        expect( heroe ).toEqual( heroeData );
        
    })

    test('debe de retornar un undefined si Héroe no existe', () => {

        const id = 1;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find( h => h.id === id);

        expect( heroe ).toEqual( heroeData );
        
    })

})
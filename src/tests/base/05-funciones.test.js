import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones";


describe('Pruebas en 05-funciones', () => {

    test('debe de retornar un objeto', () => {
        
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect(user).toEqual(userTest);
        
    })

    // getUsuarioActivo debe retornar un objeto
    
    test('getUsuarioActivo debe retornar un objeto', () => {

        const nombre = 'Héctor';
        const user = getUsuarioActivo( nombre );

        expect( user ).toEqual({

            uid: 'ABC567',
            username: nombre

        });
        
    })
    


})
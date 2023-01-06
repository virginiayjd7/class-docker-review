const{ syncDB } = require('../../tasks/sync-db');

describe('pruebas eb sync-db', ()=> {
    test('debe ejecutar el proceso 2 veces', () => {
        syncDB()
        const times =syncDB();
        console.log('se llamo',times)
        expect(times).toBe(2);
    });
});
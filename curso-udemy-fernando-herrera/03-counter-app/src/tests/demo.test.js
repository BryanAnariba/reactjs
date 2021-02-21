// Como correr los test 
// En la terminal poner
// npm run test


// Realizando la primera prueba
test('Primera prueba', () => {
    const isActive = true;

    if (!isActive) {
        throw new Error('No esta activo');
    } else {
        console.log('cORRECTO');
    }
});
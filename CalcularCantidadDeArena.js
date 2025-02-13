const readline = require('readline');

// Crear una interfaz para recibir datos del usuario
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularArenaRevoque(largo, alto) {
    let area = largo * alto;
    let cantidadArena = area * 0.5;
    return cantidadArena;
}

// Pedir datos al usuario
rl.question("Ingrese el largo de la pared en metros: ", function(largo) {
    rl.question("Ingrese el alto de la pared en metros: ", function(alto) {
        largo = parseFloat(largo);
        alto = parseFloat(alto);

        if (!isNaN(largo) && !isNaN(alto) && largo > 0 && alto > 0) {
            let arenaNecesaria = calcularArenaRevoque(largo, alto);
            console.log(`La cantidad de arena necesaria es: ${arenaNecesaria.toFixed(2)} metros cúbicos.`);
        } else {
            console.log("Por favor, ingrese valores numéricos válidos.");
        }

        rl.close();
    });
});
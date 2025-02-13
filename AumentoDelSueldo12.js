const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Bienvenido al sistema de cálculo de sueldo.");
rl.question("Por favor, ingrese el sueldo actual del trabajador: ", (input) => {
    let sueldo = parseFloat(input);

    console.log("Procesando la información...");

    if (sueldo < 1000) {
        console.log("El sueldo ingresado es menor a $1000.");
        console.log("Se aplicará un aumento del 15% conforme a las políticas establecidas.");
        sueldo *= 1.15;
        console.log("El nuevo sueldo del trabajador es: $" + sueldo.toFixed(2));
    } else {
        console.log("El sueldo ingresado es de $" + sueldo.toFixed(2) + ". No es necesario aplicar un aumento.");
    }

    console.log("Gracias por utilizar el sistema.");
    rl.close();
});
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Bienvenido al conversor de días a segundos.");

rl.question("Ingrese el número de días que desea convertir: ", function(input) {
    let dias = parseInt(input);

    if (!isNaN(dias) && dias >= 0) {
        let segundos = dias * 24 * 60 * 60;

        console.log(`Has ingresado ${dias} días.`);
        console.log(`Eso equivale a ${segundos} segundos.`);
        console.log("¡Conversión realizada con éxito!");
    } else {
        console.log("Error: Por favor, ingrese un número válido de días.");
    }

    rl.close();
});

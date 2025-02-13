const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularMontoTotal(capital, tasaInteres) {
    return capital + (capital * tasaInteres / 100);
}

rl.question("Ingrese el capital inicial: ", (capitalInput) => {
    rl.question("Ingrese la tasa de interés (%): ", (tasaInput) => {
        let capital = parseFloat(capitalInput);
        let tasaInteres = parseFloat(tasaInput);

        if (!isNaN(capital) && !isNaN(tasaInteres)) {
            let montoTotal = calcularMontoTotal(capital, tasaInteres);
            console.log(`El monto total después de aplicar la tasa de interés es: ${montoTotal.toFixed(2)}`);
        } else {
            console.log("Por favor, ingrese valores numéricos válidos.");
        }

        rl.close(); 
    });
});
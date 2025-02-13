const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularInteres() {
    rl.question("Ingrese el capital a invertir: ", (capital) => {
        let capitalNum = parseFloat(capital);
        let ganancia = capitalNum * 0.02;
        let total = capitalNum + ganancia;

        console.log(`La ganancia después de un mes es: ${ganancia.toFixed(2)}`);
        console.log(`El total después de un mes será: ${total.toFixed(2)}`);

        rl.close();
    });
}

// Llamamos a la función
calcularInteres();
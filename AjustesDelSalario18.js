const readline = require("readline-sync");

function calcularAjusteSalarial(salarioActual) {
    let salarioAjustado = salarioActual < 1000 ? salarioActual * 1.15 : salarioActual * 1.12;

    console.log(`El salario ajustado del trabajador es: $${salarioAjustado.toFixed(2)}`);
}

let salarioIngresado = parseFloat(readline.question("Por favor, ingresa el salario actual del trabajador: "));

if (!isNaN(salarioIngresado) && salarioIngresado > 0) {
    calcularAjusteSalarial(salarioIngresado);
} else {
    console.log("Error: Ingresar un valor numérico válido para el salario.");
}

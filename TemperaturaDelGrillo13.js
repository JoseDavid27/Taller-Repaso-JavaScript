const readline = require("readline-sync"); 

function calcularTemperatura(chirridos) {
    let temperatura = (chirridos / 3) + 4;
    return temperatura.toFixed(2); 
}

console.log("Bienvenido al sistema de cálculo de temperatura basado en los sonidos emitidos por un grillo.");
console.log("Este método utiliza una fórmula aproximada para estimar la temperatura en grados Celsius.\n");

let chirridos = parseInt(readline.question("Por favor, ingrese el numero de chirridos emitidos por el grillo en un minuto: "));

if (!isNaN(chirridos) && chirridos > 0) {
    let temperatura = calcularTemperatura(chirridos);
    
    console.log(`\nDe acuerdo con los datos proporcionados, la temperatura estimada es de aproximadamente ${temperatura} °C.`);
    console.log("Tienes que tener en cuenta que estos cálculos es una aproximación y se puede ver afectada por los factores ambientales.");
} else {
    console.log("\nEl numero de chirridos ingresado no es válido. Asegúrese de proporcionar un valor numérico positivo.");
}

console.log("\nGracias por utilizar nuestro sistema. Esperamos haberle sido de ayuda. ¡Que tenga un excelente día!");

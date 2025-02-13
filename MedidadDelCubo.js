const readline = require("readline");


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function calcularCubo(lado) {
    let areaBase = Math.pow(lado, 2);
    let areaLateral = 4 * Math.pow(lado, 2);
    let areaTotal = 6 * Math.pow(lado, 2);
    let volumen = Math.pow(lado, 3);

    console.log("\n ¡Cálculo completado con éxito!");
    console.log(` Base del cubo: ${areaBase} unidades cuadradas.`);
    console.log(` Área lateral del cubo: ${areaLateral} unidades cuadradas.`);
    console.log(` Área total del cubo: ${areaTotal} unidades cuadradas.`);
    console.log(` Volumen del cubo: ${volumen} unidades cúbicas.`);
    console.log(" ¡Todo listo! Ahora puedes usar estos datos para tus cálculos.");
}


rl.question(" Vamos a calcular las dimensiones de un cubo.\nIngresa la longitud de uno de sus lados: ", (input) => {
    let lado = parseFloat(input);
    if (!isNaN(lado) && lado > 0) {
        calcularCubo(lado);
    } else {
        console.log(" Error: Debes ingresar un número válido para el lado del cubo.");
    }
    rl.close();
});

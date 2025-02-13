const readline = require("readline");


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function calcularEsfera(radio) {
    const PI = Math.PI;
    let area = 4 * PI * Math.pow(radio, 2);
    let volumen = (4 / 3) * PI * Math.pow(radio, 3);

    console.log("\n Cálculo completado ✨");
    console.log(` El área de la esfera con radio ${radio} es aproximadamente: ${area.toFixed(2)} unidades cuadradas.`);
    console.log(` El volumen de la esfera es aproximadamente: ${volumen.toFixed(2)} unidades cúbicas.`);
    console.log(" Recuerda: ¡Estos valores pueden usarse en distintos cálculos geométricos!");
}


rl.question(" Bienvenido. Vamos a calcular el área y volumen de una esfera.\n Ingresa el radio de la esfera: ", (input) => {
    let radio = parseFloat(input);
    if (!isNaN(radio) && radio > 0) {
        calcularEsfera(radio);
    } else {
        console.log(" Error: Ingresa un número válido para el radio.");
    }
    rl.close();
});
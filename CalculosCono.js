const readline = require("readline");


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function calcularCono(radio, generatriz, altura) {
    const PI = Math.PI;

    let areaBase = PI * Math.pow(radio, 2);
    let areaLateral = PI * radio * generatriz;
    let areaTotal = areaBase + areaLateral;
    let volumen = (1 / 3) * PI * Math.pow(radio, 2) * altura;

    console.log("\n Resultados del cálculo para el cono:");
    console.log(` Área de la base: ${areaBase.toFixed(2)} unidades²`);
    console.log(` Área lateral: ${areaLateral.toFixed(2)} unidades²`);
    console.log(` Área total: ${areaTotal.toFixed(2)} unidades²`);
    console.log(` Volumen: ${volumen.toFixed(2)} unidades³`);
    console.log(" ¡Cálculo finalizado! Gracias por usar este programa.");

    rl.close(); 
}


console.log("¡Bienvenido! Vamos a calcular las propiedades de un cono.\n");

rl.question(" Ingresa el radio de la base del cono: ", (radio) => {
    rl.question(" Ahora, ingresa la generatriz del cono: ", (generatriz) => {
        rl.question(" Por último, ingresa la altura del cono: ", (altura) => {
            
            calcularCono(parseFloat(radio), parseFloat(generatriz), parseFloat(altura));
        });
    });
});

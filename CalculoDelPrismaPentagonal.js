const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function preguntar(pregunta) {
    return new Promise((resolve) => {
        rl.question(pregunta, (respuesta) => {
            resolve(parseFloat(respuesta));
        });
    });
}

async function calcularPrismaPentagonal() {
    console.log("¡Vamos a calcular el área de un prisma pentagonal!");

    let perimetro = await preguntar("Ingresa el perímetro de la base del prisma: ");
    let apotema = await preguntar("Ahora ingresa el apotema del prisma: ");
    let altura = await preguntar("Por último, ingresa la altura del prisma: ");

    if (isNaN(perimetro) || isNaN(apotema) || isNaN(altura) || perimetro <= 0 || apotema <= 0 || altura <= 0) {
        console.log(" Error: Por favor, ingresa valores numéricos válidos y mayores a 0.");
        rl.close();
        return;
    }

    let area_base = (perimetro * apotema) / 2;
    let area_lateral = perimetro * altura;
    let area_total = (2 * area_base) + area_lateral;

    console.log("¡Genial! El área de la base de tu prisma es:", area_base.toFixed(2));
    console.log("El área lateral del prisma es exactamente:", area_lateral.toFixed(2));
    console.log("¡Cálculo finalizado! El área total del prisma pentagonal es:", area_total.toFixed(2));

    rl.close(); 
}

calcularPrismaPentagonal();

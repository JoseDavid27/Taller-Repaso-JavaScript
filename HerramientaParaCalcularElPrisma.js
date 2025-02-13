const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularPrismaPentagonal(perimetro, apotema, altura) {
    let areaBase = (perimetro * apotema) / 2;
    let areaLateral = perimetro * altura;
    let areaTotal = 2 * areaBase + areaLateral;
    let volumen = areaBase * altura;

    return { areaBase, areaLateral, areaTotal, volumen };
}

console.log("\n ¡Bienvenido al cálculo del prisma pentagonal! \n");

function solicitarDatos() {
    rl.question(" Ingresa el valor del perímetro de la base: ", (perimetro) => {
        rl.question(" Ingresa el valor de la apotema de la base: ", (apotema) => {
            rl.question(" Ingresa la altura total del prisma: ", (altura) => {

                perimetro = parseFloat(perimetro);
                apotema = parseFloat(apotema);
                altura = parseFloat(altura);

                let resultados = calcularPrismaPentagonal(perimetro, apotema, altura);

                console.log("\n Resultados del prisma pentagonal:");
                console.log(" Área de la base: " + resultados.areaBase.toFixed(2) + " unidades²");
                console.log(" Área lateral: " + resultados.areaLateral.toFixed(2) + " unidades²");
                console.log(" Área total: " + resultados.areaTotal.toFixed(2) + " unidades²");
                console.log(" Volumen: " + resultados.volumen.toFixed(2) + " unidades³");

                rl.close();
            });
        });
    });
}

solicitarDatos();
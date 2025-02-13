const readline = require('readline');


function distancia(xa, ya, xb, yb) {
    return Math.sqrt(Math.pow(xb - xa, 2) + Math.pow(yb - ya, 2));
}


function calcularPerimetroTriangulo(x1, y1, x2, y2, x3, y3) {
    console.log("\nCalculando las longitudes de los lados...\n");
    let d1 = distancia(x1, y1, x2, y2);
    let d2 = distancia(x2, y2, x3, y3);
    let d3 = distancia(x3, y3, x1, y1);

    let perimetro = d1 + d2 + d3;
    return perimetro;
}


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("Ingresa la coordenada X del primer punto (P1): ", (x1) => {
    rl.question("Ingresa la coordenada Y del primer punto (P1): ", (y1) => {
        rl.question("Ingresa la coordenada X del segundo punto (P2): ", (x2) => {
            rl.question("Ingresa la coordenada Y del segundo punto (P2): ", (y2) => {
                rl.question("Ingresa la coordenada X del tercer punto (P3): ", (x3) => {
                    rl.question("Ingresa la coordenada Y del tercer punto (P3): ", (y3) => {
                        console.log("\n¡Gracias! Calculando el perímetro...\n");

                        let resultado = calcularPerimetroTriangulo(
                            parseFloat(x1), parseFloat(y1), 
                            parseFloat(x2), parseFloat(y2), 
                            parseFloat(x3), parseFloat(y3)
                        );

                        console.log(`El perímetro del triángulo es: ${resultado.toFixed(2)}`);
                        console.log("¡Espero que te nhaya sido útil! \n");

                        rl.close();
                    });
                });
            });
        });
    });
});
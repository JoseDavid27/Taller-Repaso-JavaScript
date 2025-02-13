const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularAreaTriangulo(x1, y1, x2, y2, x3, y3) {
    return 0.5 * Math.abs(x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2));
}

console.log("\n Cálculo del área de un triángulo a partir de sus vértices \n");

function solicitarCoordenadas() {
    rl.question("Introduce la coordenada X del primer vértice (P1): ", (x1) => {
        rl.question("Introduce la coordenada Y del primer vértice (P1): ", (y1) => {
            rl.question("Introduce la coordenada X del segundo vértice (P2): ", (x2) => {
                rl.question("Introduce la coordenada Y del segundo vértice (P2): ", (y2) => {
                    rl.question("Introduce la coordenada X del tercer vértice (P3): ", (x3) => {
                        rl.question("Introduce la coordenada Y del tercer vértice (P3): ", (y3) => {
                            
                            x1 = parseFloat(x1);
                            y1 = parseFloat(y1);
                            x2 = parseFloat(x2);
                            y2 = parseFloat(y2);
                            x3 = parseFloat(x3);
                            y3 = parseFloat(y3);

                            
                            let area = calcularAreaTriangulo(x1, y1, x2, y2, x3, y3);
                            
                            console.log("\n El área del triángulo formado por los puntos ingresados es: " + area.toFixed(2) + "\n");
                            
                            rl.close();
                        });
                    });
                });
            });
        });
    });
}


solicitarCoordenadas();
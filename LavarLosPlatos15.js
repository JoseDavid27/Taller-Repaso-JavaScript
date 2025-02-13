const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function lavarPlatos(platosS) {
    if (platosS <= 0) {
        console.log("No hay platos pendientes de lavar.");
        rl.close();
        return;
    }

    let esponja = true;
    let jabon = true;

    if (!esponja || !jabon) {
        console.log("No se puede proceder. Se requiere esponja y jabón.");
        rl.close();
        return;
    }

    console.log(`Iniciando el proceso: ${platosS} platos sucios a lavar.`);

    let interval = setInterval(() => {
        if (platosS > 0) {
            console.log(`Lavando un plato... Platos restantes: ${--platosS}`);
        } else {
            clearInterval(interval);
            console.log("Proceso completado: ¡Bien Hecho! Todos los platos han sido lavados.");
            rl.close();
        }
    }, 1000);
}

rl.question("Ingrese la cantidad de platos sucios: ", (input) => {
    let platosS = parseInt(input);

    if (isNaN(platosS) || platosS < 0) {
        console.log("Error: Ingrese un número válido de platos.");
        rl.close();
    } else {
        lavarPlatos(platosS);
    }
});

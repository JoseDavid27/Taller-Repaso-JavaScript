const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function evaluarCalificacion(calificacion) {
    if (calificacion >= 8) {
        console.log("APROBADO");
    } else {
        console.log("REPROBADO");
    }
}

rl.question("Ingresa la calificación del alumno: ", (input) => {
    let calificacion = parseFloat(input);

    if (!isNaN(calificacion)) {
        evaluarCalificacion(calificacion);
    } else {
        console.log("Por favor, ingresar un número válido.");
    }

    rl.close();
});

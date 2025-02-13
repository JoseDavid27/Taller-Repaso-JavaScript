const readline = require("readline-sync");

function evaluarDesempeñoAcademico() {
    let matricula = readline.question("Ingrese la matricula del estudiante: ");
    let calificaciones = [];

    for (let i = 1; i <= 5; i++) {
        let calificacion = parseFloat(readline.question(`Ingrese la calificacion ${i}: `));
        calificaciones.push(calificacion);
    }

    let promedio = calificaciones.reduce((acumulado, valor) => acumulado + valor, 0) / calificaciones.length;

    console.log("\nResultados:");
    console.log("Matrícula:", matricula);
    console.log("Promedio:", promedio.toFixed(2));
    console.log(promedio >= 6 ? "Aprobado" : "No aprobado");
}

evaluarDesempeñoAcademico();
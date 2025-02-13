const readline = require('readline-sync');

function determinarAperturaGrupo(nombre, alumnos) {
    let estado = alumnos >= 30 ? "Abierto" : "Cerrado";
    console.log("\nGrupo:", nombre);
    console.log("Alumnos inscritos:", alumnos);
    console.log("Estado:", estado);
}

let nombreGrupo = readline.question("Nombre del grupo: ");
let numAlumnos = parseInt(readline.question("Numero de alumnos preinscritos: "), 10);

determinarAperturaGrupo(nombreGrupo, numAlumnos);
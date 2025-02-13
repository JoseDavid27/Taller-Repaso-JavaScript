const readline = require('readline-sync');

function calcularFinanciamiento(monto) {
    let enganche = monto * 0.35;
    let mensualidad = (monto - enganche) / 18;

    console.log("\nDetalles del financiamiento:");
    console.log(`Enganche a pagar: $${enganche.toFixed(2)}`);
    console.log(`Mensualidades a pagar en 18 meses: $${mensualidad.toFixed(2)}`);
}

let montoVehiculo = parseFloat(readline.question("Ingrese el monto total del vehiculo: "));

if (!isNaN(montoVehiculo) && montoVehiculo > 0) {
    calcularFinanciamiento(montoVehiculo);
} else {
    console.log("Error: Ingrese un monto válido mayor a cero.");
}

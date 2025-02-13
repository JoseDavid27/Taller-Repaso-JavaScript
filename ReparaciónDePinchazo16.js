const readline = require('readline');

function repararPinchazo() {
    const pasos = [
        "1. Retirar la rueda afectada.",
        "2. Sacar la cámara de aire de la llanta.",
        "3. Inflar un poco la cámara para detectar el pinchazo.",
        "4. Marcar la zona del pinchazo.",
        "5. Lijar suavemente el área dañada.",
        "6. Aplicar pegamento y esperar que seque un poco.",
        "7. Colocar el parche sobre la zona afectada y presionar bien.",
        "8. Esperar unos minutos para asegurar la adhesión.",
        "9. Volver a colocar la cámara dentro de la llanta.",
        "10. Inflar la rueda y verificar que no haya fugas.",
        "11. Instalar la rueda en la bicicleta nuevamente."
    ];

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    console.log("Pasos para reparar un pinchazo de bicicleta:");
    
    let index = 0;

    function mostrarPaso() {
        if (index < pasos.length) {
            console.log(pasos[index]);
            index++;
            rl.question("Presiona ENTER para continuar...", () => {
                mostrarPaso();
            });
        } else {
            console.log("¡Reparación completada!");
            rl.close();
        }
    }

    mostrarPaso();
}

repararPinchazo();

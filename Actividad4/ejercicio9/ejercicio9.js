let N = parseInt(prompt("¿Cuántos sueldos vas a ingresar?"));

let maxSueldo = -Infinity;

for (let i = 0; i < N; i++) {
    let sueldo = parseFloat(prompt(`Ingrese el sueldo #${i + 1}:`));
    if (sueldo > maxSueldo) {
        maxSueldo = sueldo;
    }
}

alert("El sueldo máximo es: " + maxSueldo);

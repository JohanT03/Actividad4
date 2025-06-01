function productoImpares(n) {
    let producto = 1;
    let contador = 0;
    let numero = 1;

    while (contador < n) {
        producto *= numero;
        numero += 2;
        contador++;
    }

    return producto;
}

const resultado = productoImpares(10);
console.log("El producto de los 10 primeros números impares es:", resultado);

function calcularFactorial(n) {
    if (n === 0 || n === 1){
        return 1; // El factorial de 0 a 1 es 1
    } else {
        return  n * calcularFactorial(n - 1); 
    }
}



let numero = parseInt(prompt("Ingrese un numero para calcular factorial "));


if (numero < 0) {
    alert("El factorial no esta definido para numeros negativos.");
} else {
    let resultado = calcularFactorial(numero);
    alert(" El factorial de " + numero + " es " + resultado)
}
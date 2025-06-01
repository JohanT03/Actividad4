let positivos = [];
let negativos = [];
let ceros = 0;


function pedirNumeros() {
  for (let i = 0; i < 10; i++) {
    let numero = parseFloat(prompt(`Ingrese el número ${i + 1}:`));

    if (numero > 0) {
      positivos.push(numero);
    } else if (numero < 0) {
      negativos.push(numero);
    } else {
      ceros++;
    }
  }
}


function calcularMedia(array) {
  if (array.length === 0) return 0;
  let suma = array.reduce((acc, num) => acc + num, 0);
  return suma / array.length;
}


pedirNumeros();


let mediaPositivos = calcularMedia(positivos);
let mediaNegativos = calcularMedia(negativos);


console.log(`\nMedia de los números positivos: ${mediaPositivos}`);
console.log(`Media de los números negativos: ${mediaNegativos}`);
console.log(`Cantidad de ceros introducidos: ${ceros}`);

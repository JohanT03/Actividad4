let numeroSecreto = parseInt(prompt("Jugador 1: Introduce el número secreto (no se lo digas a nadie):"));



let intento;
do {
  intento = parseInt(prompt("Jugador 2: Adivina el número:"));

  if (intento < numeroSecreto) {
    alert("El número es mayor.");
  } else if (intento > numeroSecreto) {
    alert("El número es menor.");
  } else {
    alert("¡Correcto! Has adivinado el número.");
  }

} while (intento !== numeroSecreto);

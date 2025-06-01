let facturacionTotal = 0;
let litrosArticulo1 = 0;
let facturasMayores600 = 0;

// Repetir 5 veces para 5 facturas
for (let i = 1; i <= 5; i++) {
  let codigo = parseInt(prompt(`Factura ${i}: Ingrese el código del artículo:`));
  let litros = parseFloat(prompt(`Factura ${i}: Ingrese la cantidad vendida en litros:`));
  let precioLitro = parseFloat(prompt(`Factura ${i}: Ingrese el precio por litro:`));

  let totalFactura = litros * precioLitro;
  facturacionTotal += totalFactura;

  if (codigo === 1) {
    litrosArticulo1 += litros;
  }

  if (totalFactura > 600) {
    facturasMayores600++;
  }
}

alert(`Facturación total: $${facturacionTotal.toFixed(2)}`);
alert(`Litros vendidos del artículo 1: ${litrosArticulo1}`);
alert(`Facturas mayores a $600: ${facturasMayores600}`);

for (let i = 0; i <= 99999; i++) {
    
    let numero = i.toString().padStart(5, '0');

    let transformado = numero.split('').map(digito => digito === '3' ? 'E' : digito).join('-');
    
    console.log(transformado);
}

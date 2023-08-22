const peso = 69;
const altura = 1.75;
const imc = peso / Math.pow(altura, 2);

console.log(imc);

// condicoes

if (imc < 18.5) {
    console.log('abaixo do peso');
} else (imc >= 18.5 && imc < 25); {
    console.log('peso normal');
}  if (imc >= 25 && imc < 30) {
    console.log('acima do peso');
} else if (imc >= 30 && imc < 40) {
    console.log('obeso');
} else {
    console.log('obseidade grave');
}
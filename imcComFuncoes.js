function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function clasificarImc(imc) {
    if (imc < 18.5) {
        return 'abaixo do peso';
    } if (imc >= 18.5 && imc < 25) {
        return 'peso normal';
    } if (imc >= 25 && imc < 30) {
        return 'acima do peso';
    } else if (imc >= 30 && imc < 40) {
        return 'obeso';
    } else {
        return 'obseidade grave';
    } 
}

function main(){  
const peso = 69;
const altura = 1.75;
const imc = calcularImc(peso, altura);

console.log(imc);
console.log (clasificarImc(imc));
}
main();


















































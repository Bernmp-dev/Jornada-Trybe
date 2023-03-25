import { questionFloat, questionInt } from 'readline-sync';

function calcularIMC(peso, altura) {
  // Converter altura para metros
  altura = altura / 100;

  // Calcular IMC
  const imc = peso / (altura ** 2);

  // Arredondar para 2 casas decimais
  return imc.toFixed(2);
}

const peso = questionFloat("Voce pesa quantos kilos? ");

const altura = questionInt("Qual a sua altura? ");

const imc = calcularIMC(peso, altura);

let categoria;
if (imc < 18.5) {
  categoria = 'Abaixo do peso (magreza)';
} if (imc < 25) {
  categoria = 'Peso normal';
} if (imc < 30) {
  categoria = 'Acima do peso (sobrepeso)';
} if (imc < 35) {
  categoria = 'Obesidade grau I';
} if (imc < 40) {
  categoria = 'Obesidade grau II';
} else {
  categoria = 'Obesidade graus III e IV';
}

console.log(`Seu IMC é: ${imc}`);
console.log(`Sua categoria de peso é: ${categoria}`);

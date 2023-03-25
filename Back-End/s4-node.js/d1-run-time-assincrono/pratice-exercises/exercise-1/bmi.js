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

console.log(`Seu IMC é: ${imc}`);

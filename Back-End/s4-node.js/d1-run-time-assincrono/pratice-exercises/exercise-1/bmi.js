function calcularIMC(peso, altura) {
  // Converter altura para metros
  altura = altura / 100;

  // Calcular IMC
  const imc = peso / (altura ** 2);

  // Arredondar para 2 casas decimais
  return imc.toFixed(2);
}

// Exemplo de uso
const peso = 70; // em kg
const altura = 170; // em cm

const imc = calcularIMC(peso, altura);

console.log(`Seu IMC é: ${imc}`);

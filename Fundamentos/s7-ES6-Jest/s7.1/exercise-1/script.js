// ----------------- 🚀 Exercício 1
// Modifique a estrutura da função para que ela seja uma arrow function;
// Modifique as variáveis para que respeitem o escopo onde estão declaradas;
// Modifique as concatenações para template literals.

// const ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
// const elseScope = 'Não devo ser utilizada fora do meu escopo (else)';

// const testingScope = escopo => escopo 
// ? console.log(`${ifScope} ótimo, fui utilizada no escopo !`) 
// : console.log(elseScope);

// testingScope(true);

// ----------------- Crie uma função que retorne um array em ordem crescente.

// const oddsAndEvens = [13, 3, 4, 10, 7, 2];


// const sortOddsAndEvens = () => {
//   // Seu código aqui.
//   let ordered = [];
//   for (let i = 0; i < 6; i += 1) {
//     let min = Math.min(...oddsAndEvens);
//     ordered[i] = min;
//     oddsAndEvens.splice(oddsAndEvens.indexOf(min), 1);
//   }
//   return ordered
// }
// console.log(`Os números ${sortOddsAndEvens()} se encontram ordenados de forma crescente!`);

// ----------------- Crie uma função que retorne um array em ordem crescente.

// ----------------- Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort(). Spoiler: É possível realizar uma função que ordene qualquer array de números.

// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// console.log(`Os números ${oddsAndEvens.sort((a, b) => a - b)} se encontram ordenados de forma crescente!`);

// ----------------- Parte II - Exercício 1

// Crie uma função que receba um número e retorne seu fatorial.
// let result = 1;
// const factorial = (num) => {
//   for (let i = num; i >= 1; i -= 1) {
//     result *= i;
//   }
//   return result
// }

// console.log(`Esse é o fatorial resultado da função: ${factorial(4)}`);

// ----------------- Bônus: tente fazer o mesmo exercício de forma recursiva. Spoiler: É possível resolver com uma linha usando ternary operator.

// const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
// console.log(factorial(5));

// ----------------- Exercício 2
// Crie uma função que receba uma frase como parâmetro e retorne a maior palavra contida nesta frase.



const longestWord = (string) => {  
  string = string.split(" ");

  for (let value of string){
    if (value.length > string[0].length){
      string = value
    }
  }
  return string;
}

console.log(longestWord('Antônio foi ao banheiro e não sabemos o que aconteceu')); // retorna 'aconteceu'
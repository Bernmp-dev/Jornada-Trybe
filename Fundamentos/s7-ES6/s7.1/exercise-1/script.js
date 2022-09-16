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


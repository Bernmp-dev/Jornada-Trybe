const fs = require('fs').promises;
const readline = require('readline-sync');

function fibonacci(n) {
  let sequence = [0, 1];
  for (let i = 2; i <= n; i++) {
    sequence[i] = sequence[i-1] + sequence[i-2];
  }
  console.log(sequence.slice(1, n + 1));
}

function checkNum() {
  const n = readline.questionInt('Digite um número inteiro: ');

  if (n <= 0) {
    console.log('Numero incompativel');
    return;
  } 
  
  console.log('Numero compativel');
  fibonacci(n);
}

// checkNum()
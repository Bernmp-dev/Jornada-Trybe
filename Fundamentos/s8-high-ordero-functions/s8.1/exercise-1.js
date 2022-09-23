// ------------------------ Para fixar
// Vamos praticar com os seguintes exercícios:

// Crie uma função que retorne a string 'Acordando!!';

// Crie outra função que retorne a string 'Bora tomar café!!';

// Crie mais uma função que retorne a string 'Partiu dormir!!';

// Agora desenvolva uma HOF chamada doingThings e configure esta função
// para que imprima no console o resultado da execução das funções que
// você criou nos exemplos anteriores. Exemplo:


// const doingThings = (action, func) => action(func());

// const wakeUp = () => 'Acordando!';
// const breaskfast = () => 'Bora tomar café!!';
// const sleeptime = () => 'Partiu dormir!!';

// doingThings(console.log, wakeUp);

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!

// -----------------------  agora, a prática
// Nova pessoa contratada
// Crie uma função que retorne um objeto no formato { nomeCompleto, email } 
// representando uma nova pessoa contratada. Passe sua função como parâmetro 
// da HOF newEmployees para criar cada pessoa contratada em seu respectivo id.
// A sua função deve receber como parâmetro o nome completo da pessoa funcionária e,
// a partir dele, gerar automaticamente um email no formato nome_da_pessoa@trybe.com.

// const newId = (paraName) => { 
//   const idObj = { 
//     nomeCompleto: paraName, 
//     email: `${paraName.replace(' ', '_').toLowerCase()}@trybe.com`
// }
// return idObj;
// };

// const newEmployees = (nome1, nome2, nome3) => {
//   const employees = {
//     id1: newId(nome1), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
//     id2: newId(nome2), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
//     id3: newId(nome3), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
//   }
//   return employees;
// };

// console.log(newEmployees('Pedro Guerra', 'Luiza Drumond', 'Carla Paiva'));

// --------------  Sorteador de loteria
// Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: “Tente novamente” ou “Parabéns você ganhou”).

// const sortResult = (aposta, callback) => {
//  const randomNum = () => Math.ceil(Math.random() * 5);
//  return callback(aposta, randomNum);
// }

// const numCheck = (aposta, sorteado) => (aposta !== sorteado) ? 'Tente novamente' : 'Parabéns você ganhou';

// console.log(sortResult(2, numCheck));

// --------------------- Corretor automático de exame
// Crie uma HOF que receberá três parâmetros:

// O primeiro será um array de respostas corretas (soluções);

// O segundo será um array contendo as respostas fornecidas por uma pessoa estudante;

// O terceiro é uma função que compara os dois arrays e então dá uma pontuação baseada nos acertos. Para isso, essa função usará os seguintes critérios:

// Uma resposta correta adiciona 1 ponto à pontuação final;

// A ausência de uma resposta não altera a pontuação (quando for “N.A”);

// Uma resposta incorreta reduz a pontuação final em 0.5 ponto.

// Ao final, a HOF deve retornar o total de pontos obtidos através das respostas fornecidas pela pessoa estudante. Utilize os seguintes arrays:

// let result;
// const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
// const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

// const hof = (correctArray, studentArray, callback) => {
//   return console.log(callback(correctArray, studentArray));
// };

// let compFunc = (correctArray, studentArray) => {
//   let result = 0;
//   for (let i in correctArray){
//     if (studentArray[i] === correctArray[i]){
//       result += 1;
//     } else if (studentArray[i] === 'N.A'){
//       result += 0;
//     } else
//      result -= 0.5;
//   }
//   return result;
// };

// hof(RIGHT_ANSWERS, STUDENT_ANSWERS, compFunc);
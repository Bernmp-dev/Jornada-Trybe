// callbacks-para-fixar-01.js

// const userFullName = ({ firstName, lastName }) => `Olá! Meu nome é ${firstName} ${lastName}`;
// const userNationality = ({ firstName, nationality }) => `${firstName} é ${nationality}`;

// const getUser = (callback) => {
//   const user = {
//     firstName: 'Ivan',
//     lastName: 'Ivanovich',
//     nationality: 'Russo',
//   };
//     return callback(user)
// };

// console.log(getUser(userFullName)); // Retorno esperado: "Olá! Meu nome é Ivan Ivanovich"
// console.log(getUser(userNationality)); // Retorno esperado: "Ivan é Russo"

// callbacks-para-fixar-02.js

// const userFullName = ({ firstName, lastName }) => `Olá! Meu nome é ${firstName} ${lastName}`;
// const userNationality = ({ firstName, nationality }) => `${firstName} é ${nationality}`;

// const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

// const getUser = (callback) => {
//   setTimeout(() => {
//     const user = {
//       firstName: 'Ivan',
//       lastName: 'Ivanovich',
//       nationality: 'Russo',
//     };

//     // Dica: use esse `console.log()` abaixo para imprimir o resultado na tela.
//     console.log(callback(user));
//   }, delay());
// };

// getUser(userFullName); // deve imprimir "Olá! Meu nome é Ivan Ivanovich" depois de um certo tempo
// getUser(userNationality); // deve imprimir "Ivan é Russo" depois de um certo tempo

// callback-errors.js

// const countryName = ({ name }) => console.log(`O país retornado é ${name}`);
// const countryCurrency = ({ name, currency }) => console.log(`A Moeda corrente do ${name} é ${currency}`);

// const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

// const printErrorMessage = (error) => console.log(`Erro ao selecionar país: ${error}`);

// const getCountry = (onSuccess , callback) => {
//   setTimeout(() => {
//     const didOperationSucceed = Math.random() >= 0.5;
//     if (didOperationSucceed) {
//       const country = {
//         name: 'Brasil',
//         hdi: 0.759,
//         currency: 'Real',
//       };
//       onSuccess(country);
//     } else {
//       const errorMessage = 'País não encontrado';
//       // insira uma `callback` como retorno da função em caso de erro
//       callback(errorMessage);
//     }
//   }, delay());
// };

// // Deve imprimir:
// //  - Em caso de sucesso: "O país retornado é Brasil"
// //  - Em caso de erro: "Erro ao selecionar país: País não encontrado"
// getCountry(countryName, printErrorMessage);

// // Deve imprimir:
// //  - Em caso de sucesso: "A moeda corrente do Brasil é Real"
// //  - Em caso de erro: "Erro ao selecionar país: País não encontrado"
// getCountry(countryCurrency, printErrorMessage);
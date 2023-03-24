// function calcularDivisao(num1, num2) {
//   const promise = new Promise((resolve, reject) => {
//     if (num2 == 0) reject( new Error("Nao pode dividir um numero por zero"));
  
//   const resultado = num1 / num2;

//   resolve(resultado);
//   })

//   return promise;
// }

// const calcularDivisao = (num1, num2) => {
//   return new Promise((resolve, reject) => {
//     if (num2 == 0) reject({message: "Nao pode dividir um numero por zero"});

//     const resultado = num1 / num2;

//     resolve(resultado);
//   });
// };

const calcularDivisao = async (num1, num2) => {
  if (num2 == 0) 
  throw {message: "Nao pode dividir um numero por zero"};

  const resultado = num2 / num1;

  return resultado;
};


calcularDivisao(2, 0)
  .then((result) => console.log(result))
  .catch((err) =>console.log("Erro: ", err.message));

// (async () => {
//     try {
//       const resultado = await calcularDivisao(2, 0);
//       console.log(resultado);
//     } catch (err) {
//       console.log("Erro: ", err.message);
//     }
// })();  
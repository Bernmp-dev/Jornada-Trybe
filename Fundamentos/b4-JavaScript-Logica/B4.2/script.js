//EXERCICIO 1.1 [Arrays]

// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// let menuServices = menu[1];

// console.log(menuServices);

//EXERCICIO 1.2

// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// let indexOfPortfolio = menu.indexOf('Portfólio');

// console.log(indexOfPortfolio);

//EXERCICIO 1.3

// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];

// menu.push(`Contato`)

// console.log(menu);

//EXERCICIO 2 [FOR]

// let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

// for (let i = 0 ; i < groceryList.length ; i += 1) {
  
//   console.log(groceryList[i])
// }

// EXERCICIO 3 [FOR/OF]

// let names = ['João', 'Maria', 'Antônio', 'Margarida'];

// for (let name of names){
//   console.log(name);
// }

// EXERCICIO 4.1 [PRATICO]

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let i = 0; i < numbers.length; i += 1){
//   console.log(numbers[i])
// }

// EXERCICIO 4.2 [PRATICO]

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let somaDosNumeros = 0;

// for (let i = 0; i < numbers.length; i += 1){
//   somaDosNumeros = (somaDosNumeros + numbers[i]);
// }
// console.log(somaDosNumeros)

// EXERCICIO 4.3 [PRATICO]

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let somaDosNumeros = 0;
// let mediaDosNumeros = 0;

// for (let i = 0; i < numbers.length; i += 1){
//   somaDosNumeros = (somaDosNumeros + numbers[i]);
// }

// mediaDosNumeros = somaDosNumeros / numbers.length;

// console.log(mediaDosNumeros)
// console.log(numbers.length)

// // EXERCICIO 4.4 [PRATICO]

// if (mediaDosNumeros > 20){
//   console.log("valor maior que 20")
// }else{
//   console.log("valor menor ou igual a 20")
// }

// EXERCICIO 4.5 [PRATICO]

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let valorMaior = 0;

// for (let i = 0; i < numbers.length; i += 1){
//   if (valorMaior < numbers[i]){
//     valorMaior = numbers[i];
//   }
// }
// console.log(valorMaior)

// EXERCICIO 4.6 [PRATICO]

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let numerosImpares = 0;

// for (let i = 0; i < numbers.length; i += 1){
//   if (numbers[i] % 2 !== 0){
//     numerosImpares += 1;
//   }
// }

// if (numerosImpares === 0){
//   console.log("nenhum valor ímpar encontrado")
// }else{
//   console.log(numerosImpares)
// }

// EXERCICIO 4.7 [PRATICO]

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let menorValor = numbers[0];

// for( let i = 0; i < numbers.length; i += 1 ){
//   if( numbers[i] < menorValor){
//     menorValor = numbers[i];
//   }
// }
// console.log(menorValor)

// EXERCICIO 4.8 [PRATICO]

// let numbers = [];

// for (let i = 1; i <= 25; i += 1){
//   numbers.push(i);
// }

// console.log(numbers)

// EXERCICIO 4.9 [PRATICO]

let numbers = [];

for (let i = 1; i <= 25; i += 1){
  numbers.push(i);
}

// console.log(numbers)

for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index] / 2);
};

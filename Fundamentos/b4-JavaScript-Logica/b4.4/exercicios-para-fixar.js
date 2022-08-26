// EXERCICIO 1 - OBJETOS [PARA FIXAR]  [x] 100%

/*
let player = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: {
    golden: 2,
    silver: 3
  },
  bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018],

}

console.log(`A jogadora ${player.name} ${player.lastName} tem ${player.age} anos de idade`)

console.log(`A jogadora ${player.name} ${player.lastName} foi eleita a melhor do mundo por ${player.bestInTheWorld.length} vezes.`)

console.log(`A jogadora possui ${player.medals.golden} medalhas de ouro e ${player.medals.silver} medalhas de prata.`)
*/


//EXERCICIO 2.1 - FOR/IN E FOR/OF [PARA FIXAR] [x]100%

/* 
let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};

for (let index in names){
  console.log(`Ola ${names[index]}`)
}
*/

//EXERCICIOS 2.2 - FOR/IN E FOR/OF [PARA FIXAR] [x] 100%

/* let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for (let index in car){
  console.log(index, car[index])
}
 */
//EXERCICO 3.1 - Funções [PARA FIXAR] [x]

/* 
function numeros(a,b,c){
  return(`Os numeros sao ${a},${b},${c}, valeu!`);
}

function adicao (a,b){
  return a + b;
}

function subtracao(a,b){
  return a - b;
}

function multplicacao(a,b){
  return a * b;
}

function modulo(a,b){
  return a % b
}

console.log(numeros(7,8,9))
console.log(adicao(100,323))
console.log(subtracao(345,145))
console.log(multplicacao(3,34))
console.log(modulo(20,500))
 */

//EXERCICO 3.2 - Funções [PARA FIXAR] [x] 100%

/* 
function maioral( numA, numB){
  if (numA > numB){
    return(`${numA} eh o maioral!`)
  }else{
    return(`${numB} eh o maioral!`)
  }
}
console.log(maioral(11,12))
 */

//EXERCICO 3.3 - Funções [PARA FIXAR] [x] 100%

/* 
function maiorDeTres (num1,num2,num3){
  if (num1 > num2 && num1 > num3){
    return num1;
  }else if (num2 > num1 && num2 > num3){
    return num2;
  }else{
    return `${num3} eh o maior`;
  }
}

console.log(maiorDeTres(1,1,1))
*/

//EXERCICO 3.3 - Funções [PARA FIXAR] [x] 100%

/* 
let result = 'negative';

function teste (){
  if (result === 'negative'){
    result = 'positive';
  }else{
    result = 'negative';
  }
}

console.log(result)

teste();

console.log(result)

teste();

console.log(result)
 */

//EXERCICO 3.4 - Funções [PARA FIXAR] [x] 100%

/* 
function triangulo (a,b,c){
  somaDosAngulos = (a + b + c);
    if (somaDosAngulos === 180){
      return `Triangulo valido!`
    }else{
      return `Triangulo invalido!`
    }

}

console.log(triangulo(70,80,30))
 */


//Concluido.
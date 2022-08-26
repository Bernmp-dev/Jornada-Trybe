// EXERCICIO PRATICO - 1 - [OBEJTOS E FOR/IN] [x]

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// console.log(`Bem-vinda ${info.personagem}`)

// EXERCICIO PRATICO - 2 - [OBEJTOS E FOR/IN] [x]

info.recorrente = 'Sim' 

// console.log(info)

// EXERCICIO PRATICO - 3 - [OBEJTOS E FOR/IN] [x]

// for(let index in info){
//   console.log(index)
// }

// EXERCICIO PRATICO - 4 - [OBEJTOS E FOR/IN] [x]

// for(let index in info){
//   console.log(info[index])
// }

// EXERCICIO PRATICO - 5 - [OBEJTOS E FOR/IN] [x]

 
/* 
let infoDois = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
};

for(let index in info && infoDois){
  console.log(`${info[index]} e ${infoDois[index]}`) // Ajustar essa parte para imprimir 'ambos recorrentes'.
}
*/


// EXERCICIO PRATICO - 6 - [OBEJTOS E FOR/IN] []


let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [ // porque tem um colchete aqui?
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

console.log(`O livro favorito de ${leitor.nome} ${leitor.sobrenome} se chama ${leitor.livrosFavoritos['titulo']}`);
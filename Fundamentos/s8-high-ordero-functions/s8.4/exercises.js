// Exercício 1
// Utilize o reduce para transformar uma matriz em um array.


const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const flatten = (selected) => {
  return selected.reduce( (acc, curr) => acc.concat(curr), [])
}

// console.log(flatten(arrays))

// 🚀 Exercício 2
// Considere o seguinte array e manipule-o utilizando reduce para fazer o que é pedido:

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

const reduceNames = (object) => object
.map((book) => book.author.name).reduce((acc, curr)=> `${acc}, ${curr}`);

// console.log(reduceNames(books));


// Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.

const averageAge = (object) => object
.map( (book) => (book.releaseYear - book.author.birthYear) )
.reduce( (acc, curr) => (acc + curr)) / books.length;

// console.log(averageAge(books));

const longestNamedBook = (object) => object
.reduce( (acc, curr) => (curr.name.length > acc.name.length) ? curr : acc
);

// console.log(longestNamedBook(books));


// 🚀 Exercício 3
// Dado o array de nomes, utilize o reduce para retornar a quantidade de vezes em que aparece a letra a, maiúscula ou minúscula.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

let result = 0; 

const containsA = 
(theArray) => theArray.join('').split('')
.reduce( (acc, curr) => (curr.toLowerCase() === 'a' ) ? result += 1 : result += 0, 0);

console.log(containsA(names));
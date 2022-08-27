
// 1 - Acesse o elemento elementoOndeVoceEsta.

let ondeVoceEsta = document.querySelector('#elementoOndeVoceEsta');
console.log(ondeVoceEsta);

// 2 - Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.

let pai = ondeVoceEsta.parentElement;

pai.style.backgroundColor  = 'lightblue';
  console.log(pai);

// 3 - Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?

let primeiroFilhoDoFilho = ondeVoceEsta.firstElementChild;

primeiroFilhoDoFilho.innerHTML = 'Bom dia, eu sou o primeriro filho do filho!';
  console.log(ondeVoceEsta.firstElementChild);

// 4 - Acesse o primeiroFilho a partir de pai.

let primeiroFilho = document.querySelector('#pai').firstElementChild;
  console.log(primeiroFilho);

// 5 - Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.

let primeiroFilhoOnde = document.querySelector('#elementoOndeVoceEsta').previousElementSibling;
  console.log(primeiroFilhoOnde);

// 6 - Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.

let AtencaoTexto = ondeVoceEsta.nextSibling;
console.log(AtencaoTexto);

// 7 - Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.

let terceiroFilho = ondeVoceEsta.nextElementSibling;

console.log(terceiroFilho);

// 8 - Agora acesse o terceiroFilho a partir de pai.

let terceiroFilho2 = pai.lastElementChild.previousElementSibling;
  console.log(terceiroFilho2);
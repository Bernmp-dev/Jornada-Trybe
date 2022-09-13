
// 1 - Crie um irmão para elementoOndeVoceEsta.

let ondeVoceEsta = document.querySelector('#elementoOndeVoceEsta');
let pai = document.querySelector('#pai');
let section = document.createElement('section');

  section.id = 'novoIrmao';
  pai.appendChild(section);

    console.log(pai.childNodes)

// 2 - Crie um filho para elementoOndeVoceEsta.

let filhoSection = document.createElement('section');
  filhoSection.id = 'filhoDeOnde';

  ondeVoceEsta.appendChild(filhoSection);

  console.log(ondeVoceEsta.children)

// 3 - Crie um filho para `primeiroFilhoDoFilho`.

let primeiroNeto = document.querySelector('#primeiroFilhoDoFilho');
let primeiroBisneto = document.createElement('section');

  primeiroBisneto.id = 'primeiroBisneto';

  primeiroNeto.appendChild(primeiroBisneto);

  console.log(primeiroNeto.children);

// 4 - A partir desse filho criado, acesse `terceiroFilho`.

let terceiroFilho = primeiroBisneto.parentElement.parentElement.nextElementSibling;

console.log(terceiroFilho.parentElement.children)

//  CONCLUIDO;
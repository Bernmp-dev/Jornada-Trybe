
// Remova todos os elementos filhos de paiDoPai exceto pai, elementoOndeVoceEsta e primeiroFilhoDoFilho.

let pai = document.querySelector('#pai');
let primeiroNeto = pai.firstElementChild;
let segundoNetoVoce = primeiroNeto.nextElementSibling;
let segundoBisneto = segundoNetoVoce.lastElementChild;

// console.log(pai.firstElementChild);
// console.log(pai.children)

pai.removeChild(primeiroNeto);
// console.log(pai.children);

// 

segundoNetoVoce.removeChild(segundoBisneto);
// console.log(segundoNetoVoce.children);

//.

console.log(pai.children[0])

for (let i = pai.children.length - 1; i >= 0; i -= 1){
  
  let element = pai.children[i];
  
  if (element !== segundoNetoVoce ){
    element.remove();
  }
}

console.log(pai.parentElement.children)
console.log(pai.children)


// let i = 0; i < pai.children.legnth; i += 1
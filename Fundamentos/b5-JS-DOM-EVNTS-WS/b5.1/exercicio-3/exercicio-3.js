
// 1 - Crie e execute uma função que mude o texto na tag `<p>-----</p>`, para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício).

function texto(conteudo){
  let paragrafo = document.getElementsByTagName('p')[1];
  paragrafo.innerText = conteudo;
};

texto(`O futuro, te asseguro, é bem mas que um simples jogo
A luz que você segura tem poder de fogo...`);

// 2 -  Crie e execute uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).

function mainColor(colorSelected){
  let mainContent = document.querySelector('.main-content');
  mainContent.style.backgroundColor = colorSelected;
};

mainColor('rgb(76,164,109)');

// 3 - Crie e execute uma função que mude a cor do quadrado vermelho para branco.

function centerContaintColor (colorSelected){
  let redSquare = document.querySelector('.center-content').style;
  redSquare.backgroundColor = colorSelected;
};

centerContaintColor('white')

// 4 - Crie e execute uma função que corrija o texto da tag <h1>.

function corretorDeTexto (textoAqui){
  let h1 = document.querySelector('header h1');
  h1.innerText = textoAqui;
}

corretorDeTexto('Exercício 5.1 - JavaEscripit')

// 5 - Crie e execute uma função que modifique todo o texto da tag <p> para maiúsculo.

function maioral(){

  let todosParagrafos = document.querySelectorAll('p')[0];
    todosParagrafos.innerHTML = todosParagrafos.innerHTML.toUpperCase()
  }

maioral()

// EXTRA - todos os <p> em uppercase.

// function maioral(){

//   let todosParagrafos = document.querySelectorAll('p');

//     for (let i = 0; i < todosParagrafos.length; i += 1){
//     todosParagrafos[i].innerHTML = todosParagrafos[i].innerHTML.toUpperCase()
//   }
// }

// maioral()

// 6 - Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console.

function consoleP(){

  let todosParagrafos = document.querySelectorAll('p');

    for (let i = 0; i < todosParagrafos.length; i += 1){
      console.log(todosParagrafos[i].innerText);
  }
}

consoleP()

// CONCLUIDO
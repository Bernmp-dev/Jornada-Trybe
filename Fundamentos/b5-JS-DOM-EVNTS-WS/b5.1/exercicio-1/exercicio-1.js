
// 1 - Recupere o elemento que contém o título da página e faça algo com ele, como alterá-lo para o nome do seu filme favorito.

// 2 - Agora recupere o segundo parágrafo e use sua criatividade para alterá-lo.

// 3 - Por fim, recupere o subtítulo e altere-o também.

// document.getElementById("page-title").innerText = "Big trouble in little China";

// document.getElementById('subtitle').innerText = 'Os Aventureiros do Bairro Perdido';

// document.getElementById('second-paragraph').innerText = "Caminhoneiro aceita levar amigo chinês ao aeroporto para buscar a noiva, sem imaginar que esse é o começo de uma batalha sobrenatural entre o bem e o mal. Os olhos cor de esmeralda da noiva do amigo atraem um feiticeiro imortal e seus asseclas.";

// 4 - Adicione uma classe igual para os dois parágrafos.

// 5 - Recupere os seus parágrafos via código JavaScript, usando a função getElementsByClassName;

// 6 - Altere algum estilo do primeiro deles.


// document.getElementsByClassName('paragrafos')[0].style.color = 'darkblue';

// document.getElementsByClassName('paragrafos')[1].style.fontWeight = 700;

// 7 - Recupere o subtítulo e altere a cor dele usando a função getElementsByTagName.

// document.getElementsByTagName("h4")[0].style.color = 'darkgreen';

// 8 - Substitua todas as funções que você usou no exercício anterior por querySelector e/ou querySelectorAll.

document.querySelector('#page-title').innerHTML = "Big trouble in little China";

document.querySelector('#subtitle').innerText = 'Os Aventureiros do Bairro Perdido';

document.querySelector('#second-paragraph').innerText = "Caminhoneiro aceita levar amigo chinês ao aeroporto para buscar a noiva, sem imaginar que esse é o começo de uma batalha sobrenatural entre o bem e o mal. Os olhos cor de esmeralda da noiva do amigo atraem um feiticeiro imortal e seus asseclas.";

document.querySelectorAll('p')[0].style.backgroundColor = 'blue';

document.querySelectorAll('p')[1].style.fontWeight = 700;

document.querySelector("h4").style.color = 'darkgreen';
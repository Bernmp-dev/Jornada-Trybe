let sub = document.querySelector("#subbutton");
let areaDeTexto = document.querySelector('#areaTexto');
let nameId = document.querySelector('#nameId');
let emailId = document.querySelector('#emailId');


function nameLimit() {
let nameLength = nameId.value.length;
names = nameLength < 10 || nameLength > 40;
console.log(names);
return names
}

function emailLimit() {
  let emailLength = emailId.value.length;
  emails = emailLength < 10 || emailLength > 50;
  console.log(emails);
  return emails
  }

function textLimit() {
  let tamanhoTxt = areaDeTexto.value.length;
  textos = tamanhoTxt < 1 || tamanhoTxt > 500;
  console.log(textos);
  return textos
  }

function allLimits() {
  if (!nameLimit() && !emailLimit() && !textLimit()){
    alert( 'Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.')
  } else {
    alert('Dados Inválidos');
  }
}
sub.addEventListener("click", function(event){
  event.preventDefault()
  allLimits();
});

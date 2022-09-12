let sub = document.querySelector("#subbutton");
let areaDeTexto = document.querySelector('#areaTexto');

sub.addEventListener("click", function(event){
  event.preventDefault()
  console.log(areaDeTexto.value);
});

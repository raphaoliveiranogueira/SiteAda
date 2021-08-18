
document.getElementById("Botao enviar").addEventListener("click", formulario)

function formulario(){
  if(document.getElementById("nome de usuario").value !="" && document.getElementById("email do usuario").value !=""){
  alert("Pronto! Você receberá as novidades por e-mail")
  }else{
    alert("Por favor, preencha os campos nome e email!")
  }
}


function validar(event) {
  const nome = event.target["nome"].value;
  const email = event.target["email"].value;
  const cargo = event.target["cargos"].value;
  const mensagem = event.target["mensagem"].value;
  const alert = document.querySelector(".alert");


  if (nome == "") {
    alert.removeAttribute("hidden");
    alert.innerHTML = "O campo nome não pode estar vazio.";
    return false;
  } else if (email == "") {
    alert.removeAttribute("hidden");
    alert.innerHTML = "O campo e-mail não pode estar vazio.";
    return false;
  } else if (cargo == "") {
    alert.removeAttribute("hidden");
    alert.innerHTML = "Informe um cargo";
    return false;
  } else if (mensagem == "" || mensagem.length < 10) {
    alert.removeAttribute("hidden");
    if (mensagem == "") {
      alert.innerHTML = "O campo mensagem não pode estar vazio.";
    } else {
      alert.innerHTML = "O campo mensagem deve ter pelo menos 10 caracteres.";
    }
    return false;
  }

  alert.setAttribute("hidden");
  return false;
}

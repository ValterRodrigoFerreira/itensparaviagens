const formulario = document.getElementById("formulario");
const lista = document.getElementById("lista");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  nome = evento.target.elements["nome"];
  quantidade = evento.target.elements["quantidade"];

  criarElemento(nome.value, quantidade.value);
});

function criarElemento(nome, quantidade) {
  const novoItem = document.createElement("li");
  novoItem.classList.add("item");

  const numeroItem = document.createElement("strong");
  numeroItem.innerHTML = quantidade;

  novoItem.appendChild(numeroItem);
  novoItem.innerHTML += nome;

  lista.appendChild(novoItem);
}

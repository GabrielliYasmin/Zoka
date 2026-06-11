document.getElementById("botao").addEventListener("click", () => {
  const msg = document.getElementById("mensagem");
  const botao = document.getElementById("botao");

  // mostra a mensagem
  msg.style.display = "block";

  // força o navegador a "entender" o display antes da animação
  setTimeout(() => {
    msg.classList.add("mostrar");
  }, 50);

  // esconde o botão
  botao.style.display = "none";
});

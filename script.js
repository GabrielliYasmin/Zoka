document.getElementById("botao").addEventListener("click", () => {
  const msg = document.getElementById("mensagem");
  const botao = document.getElementById("botao");

  msg.style.display = "block";
  msg.style.opacity = "0";
  msg.style.transition = "opacity 1s";

  setTimeout(() => {
    msg.style.opacity = "1";
  }, 50);

  botao.style.display = "none";
});

document.getElementById("envelope").addEventListener("click", () => {
  const envelope = document.getElementById("envelope");
  const mensagem = document.getElementById("mensagem");

  // anima envelope
  envelope.classList.add("abrir");

  setTimeout(() => {
    envelope.style.display = "none";

    // mostra carta
    mensagem.style.display = "block";

    setTimeout(() => {
      mensagem.classList.add("mostrar");
    }, 50);

  }, 600);
});

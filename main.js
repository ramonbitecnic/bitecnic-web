/* Bitecnic Automation SL — interaccions mínimes: menú mòbil */
(function () {
  "use strict";

  var alternador = document.querySelector(".nav__alternador");
  var nav = document.querySelector(".nav");

  if (!alternador || !nav) return;

  function tancarMenu() {
    nav.classList.remove("obert");
    alternador.setAttribute("aria-expanded", "false");
  }

  alternador.addEventListener("click", function () {
    var obert = nav.classList.toggle("obert");
    alternador.setAttribute("aria-expanded", obert ? "true" : "false");
  });

  // Tanca el menú en fer clic en qualsevol enllaç del menú
  nav.addEventListener("click", function (esdeveniment) {
    if (esdeveniment.target.closest("a")) tancarMenu();
  });

  // Tanca el menú amb la tecla Escap
  document.addEventListener("keydown", function (esdeveniment) {
    if (esdeveniment.key === "Escape") tancarMenu();
  });

  // Reinicia l'estat en canviar a escriptori
  var consulta = window.matchMedia("(min-width: 821px)");
  consulta.addEventListener("change", function (esdeveniment) {
    if (esdeveniment.matches) tancarMenu();
  });
})();

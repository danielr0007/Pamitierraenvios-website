// calculator//////////////////////////////////////////////////

const calcular = document.getElementById("calcular");
const resetear = document.getElementById("resetear");
const flete = document.getElementById("flete");
const impuestos = document.getElementById("impuestoss");
const seguro = document.getElementById("seguroo");
const total = document.getElementById("total");

calcular.addEventListener("click", function () {
  const valor = document.getElementById("valor").value;
  const peso = document.getElementById("peso").value;

  let pesoPay;
  let totalToPost;

  if (valor > 200) {
    document.getElementById("over200contact").classList.remove("hide1");
    resetear.classList.remove("hide1");
  } else if (valor <= 200 && peso > 10) {
    document.getElementById("calcresults").classList.remove("hide1");
    resetear.classList.remove("hide1");

    pesoPay = Math.floor(peso * 1.1);

    flete.textContent = pesoPay;

    totalToPost = pesoPay + 10;

    total.textContent = totalToPost;
  } else if (valor <= 200 && peso <= 10) {
    document.getElementById("calcresults").classList.remove("hide1");
    resetear.classList.remove("hide1");

    totalToPost = 24;
    total.textContent = totalToPost;
  }
});

resetear.addEventListener("click", function () {
  document.getElementById("over200contact").classList.add("hide1");
  document.getElementById("calcresults").classList.add("hide1");
  resetear.classList.add("hide1");

  document.querySelector("#valor").value = "";
  document.querySelector("#peso").value = "";
});

// end of calculator/////////////////////////////////////////

// pop-up menu////////////////////////////////////////////////

const hamburger = document.querySelector(".menu");
const popUpMenu = document.querySelector(".popup-menu");
const cerrar = document.querySelector(".cerrar");

hamburger.addEventListener("click", function () {
  popUpMenu.classList.remove("hidden");
});

cerrar.addEventListener("click", function () {
  popUpMenu.classList.add("hidden");
});

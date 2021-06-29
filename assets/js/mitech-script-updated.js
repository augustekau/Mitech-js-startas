$(document).ready(function () {
  $(".slick-slider").slick({
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 800,
  });

  $(".autoplay").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});

//funkcija();

/*function funkcija() {
  alert('Labas lietuva!');
}*/

document.getElementById("atidarymoNuoroda").onclick = function () {
  var langas = document.getElementById("offcanvasAtidarymas");

  //Funkcija contains grazina reiksme true arba false
  if (langas.classList.contains("open") == false) {
    langas.classList.add("open");
  } else {
    langas.classList.remove("open");
  }
};

////////////////////////////
// 1. BUDAS

document.getElementById("sutinku").onclick = function () {
  var slapukas = document.getElementById("slapukai");
  slapukas.classList.add("closed");
};

////////////////////////////
// 2. BUDAS

// reikia pakeisti pirma eilute pridedant eventListenes, kazkodel ivedus tik f-jos name neveiveikia

// document.getElementById("sutinku").addEventListener("click", eventas);

// function eventas() {
//   var slapukas = document.getElementById("slapukai");
//   slapukas.classList.add("closed");
// }

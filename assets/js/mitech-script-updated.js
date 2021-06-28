$(document).ready(function() {

  $('.slick-slider').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 800,
    });

  $('.autoplay').slick({
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


document.getElementById('atidarymoNuoroda').onclick = function() {

  var langas = document.getElementById('offcanvasAtidarymas');
  
  //Funkcija contains grazina reiksme true arba false
  if( langas.classList.contains('open') == false ) {
    langas.classList.add('open');   
  } else {
    langas.classList.remove('open');
  }

};
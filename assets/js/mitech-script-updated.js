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

// document.getElementById("sutinku").onclick = function () {
//   var slapukas = document.getElementById("slapukai");
//   slapukas.classList.add("closed");
// };

////////////////////////////
// 2. BUDAS

// reikia pakeisti pirma eilute pridedant eventListenes, kazkodel ivedus tik f-jos name neveiveikia

// document.getElementById("sutinku").addEventListener("click", eventas);

// function eventas() {
//   var slapukas = document.getElementById("slapukai");
//   slapukas.classList.add("closed");
// }

////////////////////////////////////////////////////////////////
// 09.07.2021 padaryti, kad atsirastu/dingtu slapukai paspaudziant mygtukus

// text getting smaller

$("#getButton").click(function (e) {
  e.preventDefault(); //kad nesokinetu nuoroda
  $("#text").animate(
    {
      opacity: 0.2,
      "font-size": "20px",
      "font-weight": "300",
    },
    1000
  );
});

$("#getButton").click(function () {
  $(".redText").animate(
    {
      "font-size": "50px",
    },
    1000
  );
});

//photo disappears

$("#getButton").click(function () {
  $(".infotechno-img-two").animate(
    //imti ne pati paveiksliuka, nes jis ne absolute, o diva, kuriame jis yra
    {
      opacity: 0.2,
      bottom: "900",
      right: "500",
    },
    1000
  );
});

$("#getButton").click(function () {
  $(".infotechno-img-one").animate(
    //imti ne pati paveiksliuka, nes jis ne absolute, o diva, kuriame jis yra
    {
      opacity: 0.2,
      bottom: "900",
      right: "500",
      //borderRadius:30,
    },
    1000
  );
});

// //////////////////////////////////////////////////////////////////////////////
// 12.07.2021 COOKIES

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

if (getCookie("slapukai") == "pazymeta") {
  jQuery("#slapukai").hide();
}
// taip pat galima naudoti funkcija remove()

jQuery(document).ready(function () {
  jQuery("#sutinku").on("click", function () {
    jQuery(this).parent().slideUp(500);
    setCookie("slapukai", "pazymeta", 10);
  });

  jQuery("#rodytiBaneri").on("click", function () {
    jQuery("#slapukai").slideDown(500);
    return false;
  });
});

// UZDUOTIS loading page

jQuery(window).load(function () {
  jQuery(".loaded").addClass("hide");
});

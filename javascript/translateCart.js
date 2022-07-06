/* HEADER */
var headerOption1 = document.getElementById('op1');
var headerOption2 = document.getElementById('op2');
var headerOption3 = document.getElementById('op3');
var headerOption4 = document.getElementById('op7');
var headerOption5 = document.getElementById('op8');
/*var headerOption10 = document.getElementById('cart');*/
var mexflag = document.getElementById('mexflag');
var usaflag = document.getElementById('usaflag');

var mexflag2 = document.getElementsByClassName('mexflag2')[0];
var usaflag2 = document.getElementsByClassName('usaflag2')[0];

/* FOOTER */
var footerText1 = document.getElementById('footerText1');
var footerText2 = document.getElementById('footerText2');
var footerText3 = document.getElementById('footerText3');
var footerText4 = document.getElementById('footerText4');
var footerOption1 = document.getElementById('footerOption1');
var footerOption2 = document.getElementById('footerOption2');
var footerOption3 = document.getElementById('footerOption3');
var footerOption4 = document.getElementById('footerOption4');
var footerOption5 = document.getElementById('footerOption5');
var footerOption6 = document.getElementById('footerOption6');
/* FOOTER end */

function translateEnglish(){
  usaflag.style.opacity="100%";
  usaflag2.style.opacity="100%";
  mexflag.style.opacity="33%";
  mexflag2.style.opacity="33%";

  /* translating header */
  headerOption1.innerHTML = "SHOP";
  headerOption2.innerHTML = "LOCATIONS";
  headerOption3.innerHTML = "ABOUT US";
  headerOption4.innerHTML = "DOCUMENTATION";
  headerOption5.innerHTML = "CONTACT US";
  var ban2lab = document.querySelectorAll('[id="redir"]');
  for(var i = 0; i < ban2lab.length; i++) {
    ban2lab[0].innerHTML = "Shop";
    ban2lab[1].innerHTML = "Locations";
    ban2lab[2].innerHTML = "About Us";
    ban2lab[3].innerHTML = "Documentation";
  }
  var ban3lab = document.querySelectorAll('[id="redirr"]');
  for(var i = 0; i < ban3lab.length; i++) {
    ban3lab[0].innerHTML = "Home Page";
    ban3lab[1].innerHTML = "Contact Us";
  }
  /* translating footer */
  footerText1.innerHTML = "Stay connected with us on social media!";
  footerText1.style.width = "20%";
  footerText2.innerHTML = "EXPLORE";
  footerText3.innerHTML = "LINKS";
  footerText4.innerHTML = "CONTACT";
  footerOption1.innerHTML = "Our Locations";
  footerOption2.innerHTML = "About Us";
  footerOption3.innerHTML = "Our Shop";
  footerOption4.innerHTML = "Documentation";
  footerOption5.innerHTML = "Home Page";
  footerOption6.innerHTML = "Inventory";
}

function translateSpanish(){
  mexflag.style.opacity="100%";
  mexflag2.style.opacity="100%";
  usaflag.style.opacity="33%";
  usaflag2.style.opacity="33%";

  /* translating header */
  headerOption1.innerHTML = "TIENDA";
  headerOption2.innerHTML = "UBICACIONES";
  headerOption3.innerHTML = "SOBRE NOSOTROS";
  headerOption4.innerHTML = "DOCUMENTACIÓN";
  headerOption5.innerHTML = "CONTÁCTENOS";
  var ban2lab = document.querySelectorAll('[id="redir"]');
  for(var i = 0; i < ban2lab.length; i++) {
    ban2lab[0].innerHTML = "Tienda";
    ban2lab[1].innerHTML = "Ubicaciones";
    ban2lab[2].innerHTML = "Acerca de";
    ban2lab[3].innerHTML = "Documentación";
  }
  var ban3lab = document.querySelectorAll('[id="redirr"]');
  for(var i = 0; i < ban3lab.length; i++) {
    ban3lab[0].innerHTML = "Casa";
    ban3lab[1].innerHTML = "Contacto";
  }
  /* translating footer */
  footerText1.innerHTML = "¡Manténgase conectado con nosotros en las redes sociales!";
  footerText1.style.width = "30%";
  footerText2.innerHTML = "EXPLORAR";
  footerText3.innerHTML = "ENLACES";
  footerText4.innerHTML = "CONTACTO";
  footerOption1.innerHTML = "Nuestros Ubicaciones";
  footerOption2.innerHTML = "Sobre nosotros";
  footerOption3.innerHTML = "Nuestra tienda";
  footerOption4.innerHTML = "Documentación";
  footerOption5.innerHTML = "Página de inicio";
  footerOption6.innerHTML = "Inventario";
}

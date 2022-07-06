/* HEADER */
var headerOption1 = document.getElementById('op1');
var headerOption2 = document.getElementById('op2');
var headerOption3 = document.getElementById('op3');
var headerOption4 = document.getElementById('op7');
var headerOption5 = document.getElementById('op8');

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

function translateSpanish(){
  mexflag.style.opacity="100%";
  usaflag.style.opacity="30%";

  /* translating header */
  headerOption1.innerHTML = "TIENDA";
  headerOption2.innerHTML = "UBICACIONES";
  headerOption3.innerHTML = "SOBRE NOSOTROS";
  headerOption4.innerHTML = "DOCUMENTACIÓN";
  headerOption5.innerHTML = "CONTÁCTENOS";

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

  /* translating body */
  var title = document.querySelectorAll('[id="bod_title"]');
  for(var i = 0; i < title.length; i++) {
      title[0].innerHTML = "NUESTRA HISTORIA";
      title[1].innerHTML = "QUE HACEMOS";
  }

  var desc = document.querySelectorAll('[id="body_desc"]');
  for(var i = 0; i < desc.length; i++) {
      desc[0].innerHTML = "Fundada en 2019, comenzamos en nuestro garaje con un objetivo simple: brindar servicios y bienes electrónicos a la población local de Springfield, MO.";
      desc[1].innerHTML = "Technique Inc. proporciona productos electrónicos de consumo al mercado de consumo. Nuestros servicios están disponibles en nuestras ubicaciones físicas o a través de nuestra tienda web.";
  }

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

  var flags = document.querySelectorAll('[id="slide_flag"]');
  for(var i = 0; i < flags.length; i++) {
    flags[0].style.opacity = "30%";
    flags[1].style.opacity = "100%";
  }
}

function translateEnglish(){
  var flags = document.querySelectorAll('[id="slide_flag"]');
  for(var i = 0; i < flags.length; i++) {
    flags[0].style.opacity = "100%";
    flags[1].style.opacity = "30%";
  }

  mexflag.style.opacity="30%";
  usaflag.style.opacity="100%";

  /* translating header */
  headerOption1.innerHTML = "SHOP";
  headerOption2.innerHTML = "LOCATIONS";
  headerOption3.innerHTML = "ABOUT US";
  headerOption4.innerHTML = "DOCUMENTATION";
  headerOption5.innerHTML = "CONTACT US";

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

  /* translating body */
  var title = document.querySelectorAll('[id="bod_title"]');
  for(var i = 0; i < title.length; i++) {
      title[0].innerHTML = "OUR STORY";
      title[1].innerHTML = "WHAT WE DO";
  }
  var desc = document.querySelectorAll('[id="body_desc"]');
  for(var i = 0; i < desc.length; i++) {
      desc[0].innerHTML = "Founded in 2019, we started in our garage with a simple goal, to provide electronic services and goods to the local people of Springfield, MO.";
      desc[1].innerHTML = "Technique Inc. provides consumer electronic products to the consumer market. Our services are available at our brick and mortar locations or through our website shop.";
  }

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
}

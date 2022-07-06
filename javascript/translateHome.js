/* HEADER */
var headerOption1 = document.getElementById('op1');
var headerOption2 = document.getElementById('op2');
var headerOption3 = document.getElementById('op3');
var headerOption4 = document.getElementById('op7');
var headerOption5 = document.getElementById('op8');
/*var headerOption10 = document.getElementById('cart');*/
var mexflag = document.getElementById('mexflag');
var usaflag = document.getElementById('usaflag');

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

/* BODY */
var definintion = document.getElementById('definition');
var ban = document.getElementById('banner');
var label1 = document.getElementById('shop_label1');
var label2 = document.getElementById('shop_label2');
var label3 = document.getElementById('shop_label3');
var label4 = document.getElementById('shop_label4');
var item1 = document.getElementById('shop_item1');
var item2 = document.getElementById('shop_item2');
var item3 = document.getElementById('shop_item3');
var item4 = document.getElementById('shop_item4');
var item5 = document.getElementById('shop_item5');
var item6 = document.getElementById('shop_item6');
var item7 = document.getElementById('shop_item7');
var item8 = document.getElementById('shop_item8');

var question = document.getElementById('LT');
var subQuestion = document.getElementById('LT2');
var labname = document.getElementById('contact_label1');
var nameInput = document.getElementById('name_input');
var labemail = document.getElementById('contact_label2');
var emailInput = document.getElementById('email');
var labmessage = document.getElementById('contact_label3');
var messageInput = document.getElementById('contact_textarea');
var contactButton = document.getElementById('contact_button');
/* BODY end*/
function translateSpanish(){
  /* translating header */
  headerOption1.innerHTML = "TIENDA";
  headerOption2.innerHTML = "UBICACIONES";
  headerOption3.innerHTML = "SOBRE NOSOTROS";
  headerOption4.innerHTML = "DOCUMENTACIÓN";
  headerOption5.innerHTML = "CONTÁCTENOS";
  /*headerOption10.innerHTML = "CARRO";*/

  mexflag.style.opacity = "100%";
  usaflag.style.opacity = "30%";

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
  definintion.innerHTML = "Un minorista de electrónica de consumo ubicado en Spinrfield, Missouri, con productos que van desde piezas de computadoras hasta teléfonos móviles nuevos o reacondicionados. Visite nuestra tienda hoy para ver qué artículos tenemos en stock.";

  ban.innerHTML = "¡Explore Nuestro Inventario!";
  label1.innerHTML = "Teléfonos Móviles";
  label2.innerHTML = "Portátil";
  label3.innerHTML = "PC Para Juegos";
  label4.innerHTML = "Componentes de la Computadora";
  item1.innerHTML = "Teléfonos Reacondicionados";
  item2.innerHTML = "Teléfonos Nuevos";
  item3.innerHTML = "Teléfonos Para Juegos";
  item4.innerHTML = "Controladores";
  item5.innerHTML = "Teclados";
  item6.innerHTML = "Monitores";
  item7.innerHTML = "Almacenamiento";
  item8.innerHTML = "Memoria";

  question.innerHTML = "¿Tengo una pregunta?";
  subQuestion.innerHTML = "Desplácese hasta la parte inferior de la página para obtener más información de contacto.";
  labname.innerHTML = "Nombre";
  nameInput.placeholder = "Tu nombre";
  labemail.innerHTML = "Tu Email*";
  emailInput.placeholder = "Tu correo electrónico";
  labmessage.innerHTML = "Tu Mensaje*";
  messageInput.placeholder = "Ingrese su mensaje";
  contactButton.innerHTML = "Entregar";

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
  mexflag.style.opacity = "30%";
  usaflag.style.opacity = "100%";
  var flags = document.querySelectorAll('[id="slide_flag"]');
  for(var i = 0; i < flags.length; i++) {
    flags[0].style.opacity = "100%";
    flags[1].style.opacity = "30%";
  }
  /* translating header */
  headerOption1.innerHTML = "SHOP";
  headerOption2.innerHTML = "LOCATIONS";
  headerOption3.innerHTML = "ABOUT US";
  headerOption4.innerHTML = "DOCUMENTATION";
  headerOption5.innerHTML = "CONTACT US";
  /*headerOption10.innerHTML = "CART";*/

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
  definintion.innerHTML = "A consumer electronics retailer located in Springfield, Missouri with products ranging from computer parts to new or refurbished mobile phones. Visit our shop today to see what items we have in stock.";

  ban.innerHTML = "Explore Our Inventory!";
  label1.innerHTML = "Mobile Phones";
  label2.innerHTML = "Laptops";
  label3.innerHTML = "Gaming PCs";
  label4.innerHTML = "Computer Components";
  item1.innerHTML = "Refurbished Phones";
  item2.innerHTML = "New Phones";
  item3.innerHTML = "Gaming Phones";
  item4.innerHTML = "Controllers";
  item5.innerHTML = "Keyboards";
  item6.innerHTML = "Monitors";
  item7.innerHTML = "Storage";
  item8.innerHTML = "Memory";

  question.innerHTML = "Have a question?";
  subQuestion.innerHTML = "Scroll to the bottom of the page for more contact information.";
  labname.innerHTML = "Name";
  nameInput.placeholder = "Your name";
  labemail.innerHTML = "Your Email*";
  nameInput.placeholder = "Your name";
  labmessage.innerHTML = "Your Message*";
  messageInput.placeholder = "Enter your message";
  contactButton.innerHTML = "Submit";

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

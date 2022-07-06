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
  var buyNow = document.querySelectorAll('[class="cart_button_buy"]');
  for(var i = 0; i < buyNow.length; i++) {
    buyNow[i].innerHTML = "COMPRAR";
  }
  var addCart = document.querySelectorAll('[class="cart_button_add"]');
  for(var i = 0; i < addCart.length; i++) {
    addCart[i].innerHTML = "AGREGAR";
  }
  var soldOut = document.querySelectorAll('[class="cart_button_sold"]');
  for(var i = 0; i < soldOut.length; i++) {
    soldOut[i].innerHTML = "VENDIDO";
  }

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
  footerText1.style.width = "auto";
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
  var inStock = document.querySelectorAll('[class="stock"]');
  for(var i = 0; i < inStock.length; i++) {
      inStock[i].innerHTML = "EN STOCK";
  }

  var outStock = document.querySelectorAll('[class="outofstock"]');
  for(var i = 0; i < outStock.length; i++) {
      outStock[i].innerHTML = "AGOTADO";
  }

  var discount = document.querySelectorAll('[class="discount_sticker"]');
  for(var i = 0; i < discount.length; i++) {
    discount[0].innerHTML = "10% apagado";
    discount[1].innerHTML = "5% apagado";
    discount[2].innerHTML = "20% apagado";
    discount[3].innerHTML = "10% apagado";
    discount[4].innerHTML = "10% apagado";
    discount[5].innerHTML = "5% apagado";
  }

  var select = document.querySelectorAll('[id="selectable"]');
  for(var i = 0; i < select.length; i++) {
      select[0].innerHTML = "Los telefonos";
      select[1].innerHTML = "Portátiles";
      select[2].innerHTML = "PC Para Juegos";
      select[3].innerHTML = "Componentes";
  }


  var category = document.querySelectorAll('[class="category"]');
  for(var i = 0; i < category.length; i++) {
    category[0].innerHTML = "NUEVO";
    category[1].innerHTML = "NUEVO";
    category[2].innerHTML = "NUEVO";
    category[3].innerHTML = "JUEGO DE AZAR";
    category[4].innerHTML = "JUEGO DE AZAR";
    category[5].innerHTML = "JUEGO DE AZAR";
    category[6].innerHTML = "JUEGO DE AZAR";
    category[7].innerHTML = "JUEGO DE AZAR";
    category[8].innerHTML = "NUEVO";
    category[9].innerHTML = "JUEGO DE AZAR";
    category[10].innerHTML = "JUEGO DE AZAR";
    category[11].innerHTML = "NUEVO";
    category[12].innerHTML = "JUEGO DE AZAR";
    category[13].innerHTML = "JUEGO DE AZAR";
    category[14].innerHTML = "JUEGO DE AZAR";
    category[15].innerHTML = "NUEVO";
    category[16].innerHTML = "JUEGO DE AZAR";
    category[17].innerHTML = "JUEGO DE AZAR";
    category[18].innerHTML = "JUEGO DE AZAR";
    category[19].innerHTML = "NUEVO";
    category[20].innerHTML = "JUEGO DE AZAR";
    category[21].innerHTML = "JUEGO DE AZAR";
    category[22].innerHTML = "JUEGO DE AZAR";
    category[23].innerHTML = "JUEGO DE AZAR";
    category[24].innerHTML = "JUEGO DE AZAR";
    category[25].innerHTML = "JUEGO DE AZAR";
    category[26].innerHTML = "JUEGO DE AZAR";
    category[27].innerHTML = "JUEGO DE AZAR";
    category[28].innerHTML = "JUEGO DE AZAR";
    category[29].innerHTML = "JUEGO DE AZAR";
    category[30].innerHTML = "JUEGO DE AZAR";
    category[31].innerHTML = "JUEGO DE AZAR";
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
  var buyNow = document.querySelectorAll('[class="cart_button_buy"]');
  for(var i = 0; i < buyNow.length; i++) {
    buyNow[i].innerHTML = "BUY NOW";
  }
  var addCart = document.querySelectorAll('[class="cart_button_add"]');
  for(var i = 0; i < addCart.length; i++) {
    addCart[i].innerHTML = "ADD TO CART";
  }
  var soldOut = document.querySelectorAll('[class="cart_button_sold"]');
  for(var i = 0; i < soldOut.length; i++) {
    soldOut[i].innerHTML = "SOLD OUT";
  }
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
  footerText1.style.width = "auto";
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
  var inStock = document.querySelectorAll('[class="stock"]');
  for(var i = 0; i < inStock.length; i++) {
      inStock[i].innerHTML = "IN STOCK";
  }

  var outStock = document.querySelectorAll('[class="outofstock"]');
  for(var i = 0; i < outStock.length; i++) {
      outStock[i].innerHTML = "OUT OF STOCK";
  }

  var discount = document.querySelectorAll('[class="discount_sticker"]');
  for(var i = 0; i < discount.length; i++) {
      discount[0].innerHTML = "10% off";
      discount[1].innerHTML = "5% off";
      discount[2].innerHTML = "20% off";
      discount[3].innerHTML = "10% off";
      discount[4].innerHTML = "10% off";
      discount[5].innerHTML = "5% off";
  }

  var select = document.querySelectorAll('[id="selectable"]');
  for(var i = 0; i < select.length; i++) {
      select[0].innerHTML = "Phones";
      select[1].innerHTML = "Laptops";
      select[2].innerHTML = "Gaming PCs";
      select[3].innerHTML = "Components";
  }

  var category = document.querySelectorAll('[class="category"]');
  for(var i = 0; i < category.length; i++) {
    category[0].innerHTML = "NEW";
    category[1].innerHTML = "NEW";
    category[2].innerHTML = "NEW";
    category[3].innerHTML = "REFURBISHED";
    category[4].innerHTML = "REFURBISHED";
    category[5].innerHTML = "GAMING";
    category[6].innerHTML = "GAMING";
    category[7].innerHTML = "GAMING";
    category[8].innerHTML = "NEW";
    category[9].innerHTML = "REFURBISHED";
    category[10].innerHTML = "GAMING";
    category[11].innerHTML = "NEW";
    category[12].innerHTML = "REFURBISHED";
    category[13].innerHTML = "REFURBISHED";
    category[14].innerHTML = "GAMING";
    category[15].innerHTML = "NEW";
    category[16].innerHTML = "GAMING";
    category[17].innerHTML = "GAMING";
    category[18].innerHTML = "GAMING";
    category[19].innerHTML = "NEW";
    category[20].innerHTML = "GAMING";
    category[21].innerHTML = "GAMING";
    category[22].innerHTML = "GAMING";
    category[23].innerHTML = "GAMING";
    category[24].innerHTML = "GAMING";
    category[25].innerHTML = "GAMING";
    category[26].innerHTML = "GAMING";
    category[27].innerHTML = "GAMING";
    category[28].innerHTML = "GAMING";
    category[29].innerHTML = "GAMING";
    category[30].innerHTML = "GAMING";
    category[31].innerHTML = "GAMING";
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

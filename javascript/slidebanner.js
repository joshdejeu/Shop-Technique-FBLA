var banner = document.getElementById('banner2');
var header = document.getElementById('header');
var burger = document.getElementById('banner1');

function slideBanner(){
  burger.style.visibility = "hidden";
  banner.style.visibility = "visible";
  banner.style.animation = "slideIn 0.5s linear forwards";
}

function slideExit(){
  banner.style.animation = "slideOut 0.5s linear forwards";
  burger.style.visibility = "visible";
}

//make sure mobile view cant be seen in desktop view
window.addEventListener('resize', function(){
  var winIW = window.innerWidth
  var ani = "0.5s linear 0s 1 normal forwards running slideOut";
  var ban = banner.style.animation;
  if(winIW>1200 && ban!=ani){
    slideExit();
    burger.style.visibility = "hidden";

  }
})
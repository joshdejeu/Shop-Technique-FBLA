/*jquery to fade out loading screen and fade in page */
$(window).on('load',function(){
  $(".loading").fadeOut(1000);
  $(".content").fadeIn(1000);
  var phone = "goToPhone";
  var laptop = "goToLaptop";
  var pc = "goToPC";
  var component = "goToComponent";
  var cookie = sessionStorage.getItem("cookie");
  var phonpos = document.getElementById('phone');
  var lappos = document.getElementById('laptop');
  var pcpos = document.getElementById('pc');
  var comppos = document.getElementById('component');
  if(cookie==phone){
    phonpos.scrollIntoView();
    sessionStorage.removeItem("cookie");
  }
  if(cookie==laptop){
    lappos.scrollIntoView();
    sessionStorage.removeItem("cookie");
  }
  if(cookie==pc){
    pcpos.scrollIntoView();
    sessionStorage.removeItem("cookie");
  }
  if(cookie==component){
    comppos.scrollIntoView();
    sessionStorage.removeItem("cookie");
  }
});

/* jquery to fade out loading screen and fade in page */
$(window).on('load',function(){
  $(".loading").fadeOut(1000);
  $(".content").fadeIn(1000);
  /* get data from session */
  var contact = "goToContact";
  var contactCookie = sessionStorage.getItem("contactCookie");
  /* if cookie matches Contact */
  if(contact==contactCookie){
    /* scroll into view */
    document.getElementById('contacts').scrollIntoView();
    /* delete that cookie after use */
    sessionStorage.removeItem("contactCookie");
    // TO CLEAR ALL
    // sessionStorage.CLear()
  }
});

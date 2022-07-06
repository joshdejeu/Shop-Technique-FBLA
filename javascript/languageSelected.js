function eng(){
  sessionStorage.setItem("selectedLanguage", "english");
}
function span(){
  sessionStorage.setItem("selectedLanguage", "spanish");
}

$(window).on('load',function(){
  var selectedLanguage = sessionStorage.getItem("selectedLanguage");
  if(selectedLanguage=="english"){
    translateEnglish();
  }
  if(selectedLanguage=="spanish"){
    translateSpanish();
  }
});

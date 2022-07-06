const head = document.getElementById('header');
window.onscroll = function(){
  if(window.scrollY>99){
    headerHover();
  }else{
      headerOut();
    }
};
var usaflag = document.getElementById('usaflag');
var mexflag = document.getElementById('mexflag');
var language = "";
function usaselection(){
  mexflag.style.opacity="30%";
  usaflag.style.opacity="100%";
  language = "english";
  translateEnglish();
}
function mexselection(){
  mexflag.style.opacity="100%";
  usaflag.style.opacity="30%";
  language = "spanish";
  translateSpanish();
}
var option1 = document.getElementById('op1');
var option2 = document.getElementById('op2');
var option3 = document.getElementById('op3');
var option5 = document.getElementsByClassName('logo')[0];
var option7 = document.getElementById('op7');
var option8 = document.getElementById('op8');
var option10Icon = document.getElementById('op10_icon');
var line = document.getElementById('line');
// var header = document.getElementById('header');
var link = document.getElementById('a');
function headerHover(){
  option1.style.color="black";
  option2.style.color="black";
  option3.style.color="black";
  option5.style.color="black";
  option7.style.color="black";
  option8.style.color="black";
  option1.style.textDecoration="underline";
  option2.style.textDecoration="underline";
  option3.style.textDecoration="underline";
  option7.style.textDecoration="underline";
  option8.style.textDecoration="underline";
  line.style.background="black";
  head.style.background="white";
  link.style.color="black";
  option10Icon.style.filter="brightness(0%)";
}
function headerOut(){
  option1.style.color="white";
  option2.style.color="white";
  option3.style.color="white";
  option5.style.color="white";
  option7.style.color="white";
  option8.style.color="white";
  line.style.background="rgba(255,255,255,0.7)";
  head.style.background="rgba(255,255,255,0)";
  link.style.color="white";
  option10Icon.style.filter="brightness(100%)";

  if(window.scrollY>99){
    headerHover();
    // NOTE: prevents header from switching when hovering while also not being at the top of the page
  }
}

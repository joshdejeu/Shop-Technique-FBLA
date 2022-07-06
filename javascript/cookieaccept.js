var cookieCont = document.getElementById('cookieNotice');
var cookieBtn = document.getElementById('cookieBtn');

cookieBtn.addEventListener('click', function(){
    cookieCont.style.transform = "scale(0.0)";
    sessionStorage.setItem("acceptCookie", true);
});

window.addEventListener('load', function(){
    var isTrue = sessionStorage.getItem("acceptCookie");
        if(isTrue==null){
        cookieCont.style.transform = "scale(1.0)";
    }
    if(isTrue==true){
        cookieCont.style.transform = "scale(0.0)";
        sessionStorage.setItem("acceptCookie", true);
    }
});
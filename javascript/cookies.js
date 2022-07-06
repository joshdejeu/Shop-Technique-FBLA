function goToContact(){
  /* create cookie directing to specific location on page */
  var contactCookie = "goToContact";
  /* store in session */
  sessionStorage.setItem("contactCookie", contactCookie);
  /* redirect */
  location.href="../index.html"
}

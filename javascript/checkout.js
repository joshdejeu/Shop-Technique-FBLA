// this file is for events on clicking "Buy Now"
function buyNow(obj){
  var parElem = obj.parentElement.parentElement;

  var itemId = parElem.querySelector('.product');

  var itemPrice = parElem.querySelector('.price');

  window.location.href = "../html/checkout.html";

  console.log(itemId.innerHTML + " " + itemPrice.innerHTML);
}

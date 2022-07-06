var cartCount1 = document.getElementById('cart_count');
var cartCount2 = document.getElementById('cart_count2');
var intCount1 = parseInt(cartCount1.innerHTML);
if(cartCount2!=null){
  var intCount2 = parseInt(cartCount2.innerHTML);
}
var cartItems = ["freespace"];

$(window).on('load',function(){

});

function plusOne(obj){
  var cart = document.getElementById('op10_icon2');
  //cart.id = 'animationWorks';

  /* add item to array based on clicked ID */
  cartItems.push(obj.id);
  document.getElementById('op10_icon2').style.animation = "linear cartShake 0.5s forwards";

  //document.getElementById('op10_icon').style.animation = "linear cartShake 0.5s forwards";
  /* store array in key "itemHistory", but turn it into a JSON string */
  localStorage.setItem("itemHistory", JSON.stringify(cartItems));
  /* reload page on click to update .innerHTML count */
  reloadData();
}

function reloadData(){
  var retrievedData2 = localStorage.getItem("itemHistory");
  // turn string version of array back into array
  if(retrievedData2==null){
    // this is about as efficient as using scissors to cut grass
  }else{
    // default array has 1 item to prevent runtime error so subtract 1 for true count
    cartItems = JSON.parse(retrievedData2);
    cartCount1.innerHTML = cartItems.length;
    cartCount2.innerHTML = cartItems.length;
  }
}

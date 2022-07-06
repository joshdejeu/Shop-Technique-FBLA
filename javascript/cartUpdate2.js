$(window).on('load',function(){
  var retrievedData2 = localStorage.getItem("itemHistory");
  // turn string version of array back into array
  // if(retrievedData2.length==null){
  //   // this is about as efficient as using scissors to cut grass
  // }else{
  //   // default array has 1 item to prevent runtime error so subtract 1 for true count
  //   cartItems = JSON.parse(retrievedData2);
  //   cartCount1.innerHTML = cartItems.length-1;
  //   cartCount2.innerHTML = cartItems.length-1;
  // }

  if(retrievedData2!=null){
    cartItems = JSON.parse(retrievedData2);
    cartCount1.innerHTML = cartItems.length;
    cartCount2.innerHTML = cartItems.length;
  }
});

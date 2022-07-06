var cartCount1 = document.getElementById('cart_count');
var cartCount2 = document.getElementById('cart_count2');

var cartItems = ["freespace"];

$(window).on('load',function(){
  // on window load, get string from key "itemHistory"
  var retrievedData = localStorage.getItem("itemHistory");
  // turn string version of array back into array
  if(retrievedData==null){
    cartItems = [];
    retrievedData = [];
  }else{
    cartItems = JSON.parse(retrievedData);
    cartCount1.innerHTML = cartItems.length;
  }
  /* check how many instances of each item there are */
  var numOf13 = cartItems.filter(x => x === "product_iPhone13").length;
  var numOf13Pro = cartItems.filter(x => x === "product_iPhone13Pro").length;
  var numOf13ProMax = cartItems.filter(x => x === "product_iPhone13ProMax").length;
  var numOfPIXEL5A = cartItems.filter(x => x === "product_GooglePixel5a").length;
  var numOfPIXEL6 = cartItems.filter(x => x === "product_GooglePixel6").length;
  var numOfSHARK3 = cartItems.filter(x => x === "product_BlackShark3").length;
  var numOfRAZERPHONE2 = cartItems.filter(x => x === "product_RazerPhone2").length;
  var numOfASUSROG5 = cartItems.filter(x => x === "product_AsusROG5").length;

  var numOfXPS13 = cartItems.filter(x => x === "product_DellXPS13").length;
  var numOfNITRO5 = cartItems.filter(x => x === "product_AcerNitro5").length;
  var numOfGE76 = cartItems.filter(x => x === "product_MSIRaiderGe76").length;
  var numOfIDEAPAD3 = cartItems.filter(x => x === "product_LenovoIdeapad3").length;
  var numOfACER = cartItems.filter(x => x === "product_ACER").length;
  var numOfMACBOOKAIR = cartItems.filter(x => x === "product_MacBookAir").length;
  var numOfOMEN = cartItems.filter(x => x === "product_OMEN").length;
  var numOfMSIX5 = cartItems.filter(x => x === "product_MSIX5").length;

  var numOfMSIPC = cartItems.filter(x => x === "product_MSIPC").length;
  var numOfNZXTPC = cartItems.filter(x => x === "product_NZXTPC").length;
  var numOfGEFORCEPC = cartItems.filter(x => x === "product_GEFORCEPC").length;
  var numOfIBUYPOWERPC = cartItems.filter(x => x === "product_IBUYPOWERPC").length;
  var numOfCORSAIRPC = cartItems.filter(x => x === "product_CORSAIRPC").length;
  var numOfTITANPC = cartItems.filter(x => x === "product_TITANPC").length;
  var numOfAVALANCHEPC = cartItems.filter(x => x === "product_AVALANCHEPC").length;
  var numOfACERPC = cartItems.filter(x => x === "product_ACERPC").length;

  var numOfRAM = cartItems.filter(x => x === "product_TRIDENTZNEORAM").length;
  var numOf5600X = cartItems.filter(x => x === "product_RYZEN55600X").length;
  var numOfPUMP = cartItems.filter(x => x === "product_AIOPUMP").length;
  var numOfMOUSE = cartItems.filter(x => x === "product_MOUSE").length;
  var numOfKEYBOARD = cartItems.filter(x => x === "product_RGBKEYBOARD").length;
  var numOfHEADSET = cartItems.filter(x => x === "product_HEADSET").length;
  var numOfCONTROLLER = cartItems.filter(x => x === "product_CONTROLLER").length;
  var numOf3090 = cartItems.filter(x => x === "product_3090").length;

  /* if an instance is greather than 1, create an element */
  if(numOf13>0){AddiPhone13();}
  if(numOf13Pro>0){AddiPhone13Pro();}
  if(numOf13ProMax>0){AddiPhone13ProMax();}
  if(numOfPIXEL5A>0){AddPixel5();}
  if(numOfPIXEL6>0){AddPixel6();}
  if(numOfSHARK3>0){AddShark3();}
  if(numOfRAZERPHONE2>0){AddRazerPhone();}
  if(numOfASUSROG5>0){AddRog5();}

  if(numOfXPS13>0){AddXPS();}
  if(numOfNITRO5>0){AddNitro5();}
  if(numOfGE76>0){AddGe();}
  if(numOfIDEAPAD3>0){AddIdea();}
  if(numOfACER>0){AddAcer();}
  if(numOfMACBOOKAIR>0){AddMac();}
  if(numOfOMEN>0){AddOmen();}
  if(numOfMSIX5>0){AddX5();}

  if(numOfMSIPC>0){AddMSI();}
  if(numOfNZXTPC>0){AddNZXT();}
  if(numOfGEFORCEPC>0){AddGeForce();}
  if(numOfIBUYPOWERPC>0){AddIBuy();}
  if(numOfCORSAIRPC>0){AddCorsair();}
  if(numOfTITANPC>0){AddTitan();}
  if(numOfAVALANCHEPC>0){AddAval();}
  if(numOfACERPC>0){AddAcerPC();}

  if(numOfRAM>0){AddRam();}
  if(numOf5600X>0){Add5600X();}
  if(numOfPUMP>0){AddPump();}
  if(numOfMOUSE>0){AddMouse();}
  if(numOfKEYBOARD>0){AddKeyboard();}
  if(numOfHEADSET>0){AddHeadset();}
  if(numOfCONTROLLER>0){AddController();}
  if(numOf3090>0){Add3090();}

  /* get id of every quantity num */
  var quant13 = document.getElementById('quant13');
  var quant13Pro = document.getElementById('quant13Pro');
  var quant13ProMax = document.getElementById('quant13ProMax');
  var quantPixel5 = document.getElementById('quantPixel5');
  var quantPixel6 = document.getElementById('quantPixel6');
  var quantShark3 = document.getElementById('quantShark3');
  var quantRazerPhone = document.getElementById('quantRazerPhone');
  var quantROG5 = document.getElementById('quantROG5');

  var quantXPS = document.getElementById('quantXPS');
  var quantNitro5 = document.getElementById('quantNitro5');
  var quantGE76 = document.getElementById('quantGE76');
  var quantIdeapad = document.getElementById('quantIdeapad');
  var quantAcer = document.getElementById('quantAcer');
  var quantMacbook = document.getElementById('quantMacbook');
  var quantOmen = document.getElementById('quantOmen');
  var quantX5 = document.getElementById('quantX5');

  var quantMSIPC = document.getElementById('quantMSIPC');
  var quantNZXTPC = document.getElementById('quantNZXTPC');
  var quantGEFORCEPC = document.getElementById('quantGEFORCEPC');
  var quantIBUYPC = document.getElementById('quantIBUYPC');
  var quantCORSAIRPC = document.getElementById('quantCORSAIRPC');
  var quantTITANPC = document.getElementById('quantTITANPC');
  var quantAVALANCHEPC = document.getElementById('quantAVALANCHEPC');
  var quantACERPC = document.getElementById('quantACERPC');

  var quantRAM = document.getElementById('quantRAM');
  var quantCPU = document.getElementById('quantCPU');
  var quantPump = document.getElementById('quantPump');
  var quantMouse = document.getElementById('quantMouse');
  var quantK95 = document.getElementById('quantK95');
  var quantHeadset = document.getElementById('quantHeadset');
  var quantController = document.getElementById('quantController');
  var quantGPU = document.getElementById('quantGPU');

  // change quantity num based on number of instances
  // first check if the element exists by seeing if the element doesn't return null
  // prevents exception handling and skipping of lines of code due to error
  if(quant13!=null){quant13.innerHTML = numOf13;}
  if(quant13Pro!=null){quant13Pro.innerHTML = numOf13Pro;}
  if(quant13ProMax!=null){quant13ProMax.innerHTML = numOf13ProMax;}
  if(quantPixel5!=null){quantPixel5.innerHTML = numOfPIXEL5A;}
  if(quantPixel6!=null){quantPixel6.innerHTML = numOfPIXEL6;}
  if(quantShark3!=null){quantShark3.innerHTML = numOfSHARK3;}
  if(quantRazerPhone!=null){quantRazerPhone.innerHTML = numOfRAZERPHONE2;}
  if(quantROG5!=null){quantROG5.innerHTML = numOfASUSROG5;}

  if(quantXPS!=null){quantXPS.innerHTML = numOfXPS13;}
  if(quantNitro5!=null){quantNitro5.innerHTML = numOfNITRO5;}
  if(quantGE76!=null){quantGE76.innerHTML = numOfGE76;}
  if(quantIdeapad!=null){quantIdeapad.innerHTML = numOfIDEAPAD3;}
  if(quantAcer!=null){quantAcer.innerHTML = numOfACER;}
  if(quantMacbook!=null){quantMacbook.innerHTML = numOfMACBOOKAIR;}
  if(quantOmen!=null){quantOmen.innerHTML = numOfOMEN;}
  if(quantX5!=null){quantX5.innerHTML = numOfMSIX5;}

  if(quantMSIPC!=null){quantMSIPC.innerHTML = numOfMSIPC;}
  if(quantNZXTPC!=null){quantNZXTPC.innerHTML = numOfNZXTPC;}
  if(quantGEFORCEPC!=null){quantGEFORCEPC.innerHTML = numOfGEFORCEPC;}
  if(quantIBUYPC!=null){quantIBUYPC.innerHTML = numOfIBUYPOWERPC;}
  if(quantCORSAIRPC!=null){quantCORSAIRPC.innerHTML = numOfCORSAIRPC;}
  if(quantTITANPC!=null){quantTITANPC.innerHTML = numOfTITANPC;}
  if(quantAVALANCHEPC!=null){quantAVALANCHEPC.innerHTML = numOfAVALANCHEPC;}
  if(quantACERPC!=null){quantACERPC.innerHTML = numOfACERPC;}

  if(quantRAM!=null){quantRAM.innerHTML = numOfRAM;}
  if(quantCPU!=null){quantCPU.innerHTML = numOf5600X;}
  if(quantPump!=null){quantPump.innerHTML = numOfPUMP;}
  if(quantMouse!=null){quantMouse.innerHTML = numOfMOUSE;}
  if(quantK95!=null){quantK95.innerHTML = numOfKEYBOARD;}
  if(quantHeadset!=null){quantHeadset.innerHTML = numOfHEADSET;}
  if(quantController!=null){quantController.innerHTML = numOfCONTROLLER;}
  if(quantGPU!=null){quantGPU.innerHTML = numOf3090;}

  reloadData();
});

const cont = document.getElementById('cart_container');
const contImg = document.getElementsByClassName('div-item');

var i2 = 0;
function AddNew(){
  const newDiv = document.createElement("div");
  newDiv.classList.add('div-item')
  newDiv.innerHTML = cartItems[i2];
  cont.appendChild(newDiv);
  i2++;
}

/* phones */
function AddiPhone13(){
  $('#cart_container').append("<div id='product_item'><div class='iPhone13_image' id='product_image'></div><div class='product_name'>iPhone 13</div><div class='product_quantiy'><div id='product_iPhone13' class='quantity_up' onclick='plusOne(this)'>+</div><div id='quant13' class='quantity_num'>0</div><div id='product_iPhone13' class='quantity_down' onclick='minusOne(this)'>−</div></div><div class='product_price'>$719.99</div></div>");
}
function AddiPhone13Pro(){
  $('#cart_container').append("<div id='product_item'><div class='iPhone13Pro_image' id='product_image'></div><div class='product_name'>iPhone 13 Pro</div><div class='product_quantiy'><div id='product_iPhone13Pro' class='quantity_up' onclick='plusOne(this)'>+</div><div id='quant13Pro' class='quantity_num'>0</div><div id='product_iPhone13Pro' class='quantity_down' onclick='minusOne(this)'>−</div></div><div class='product_price'>$999.99</div></div>");
}
function AddiPhone13ProMax(){
  $('#cart_container').append("<div id='product_item'><div class='iPhone13ProMax_image' id='product_image'></div><div class='product_name'>iPhone 13 Pro Max</div><div class='product_quantiy'><div id='product_iPhone13ProMax' class='quantity_up' onclick='plusOne(this)'>+</div><div id='quant13ProMax' class='quantity_num'>0</div><div id='product_iPhone13ProMax' class='quantity_down' onclick='minusOne(this)'>−</div></div><div class='product_price'>$1,099.99</div></div>");
}
function AddPixel5(){
  $('#cart_container').append("<div id='product_item'><div class='Pixel5_image' id='product_image'></div><div class='product_name'>Google Pixel 5a</div><div class='product_quantiy'><div id='product_GooglePixel5a' class='quantity_up' onclick='plusOne(this)'>+</div><div id='quantPixel5' class='quantity_num'>0</div><div id='product_GooglePixel5a' class='quantity_down' onclick='minusOne(this)'>−</div></div><div class='product_price'>$499.99</div></div>");
}
function AddPixel6(){
  $('#cart_container').append("<div id='product_item'><div class='Pixel6_image' id='product_image'></div><div class='product_name'>Google Pixel 6</div><div class='product_quantiy'><div id='product_GooglePixel6' class='quantity_up' onclick='plusOne(this)'>+</div><div id='quantPixel6' class='quantity_num'>0</div><div id='product_GooglePixel6' class='quantity_down' onclick='minusOne(this)'>−</div></div><div class='product_price'>$699.99</div></div>");
}
function AddShark3(){
  $('#cart_container').append("<div id='product_item'><div class='blackshark_image' id='product_image'></div><div class='product_name'>Black Shark 3</div><div class='product_quantiy'><div id='product_BlackShark3' class='quantity_up' onclick='plusOne(this)'>+</div><div id='quantShark3' class='quantity_num'>0</div><div id='product_BlackShark3' class='quantity_down' onclick='minusOne(this)'>−</div></div><div class='product_price'>$536.74</div></div>");
}
function AddRazerPhone(){
  $('#cart_container').append("<div id='product_item'><div class='razerphone_image' id='product_image'></div><div class='product_name'>Razer Phone 2</div><div class='product_quantiy'><div id='product_RazerPhone2' class='quantity_up' onclick='plusOne(this)'>+</div><div id='quantRazerPhone' class='quantity_num'>0</div><div id='product_RazerPhone2' class='quantity_down' onclick='minusOne(this)'>−</div></div><div class='product_price'>$799.99</div></div>");
}
function AddRog5(){
  $('#cart_container').append("<div id='product_item'><div class='rog5_image' id='product_image'></div><div class='product_name'>ASUS Rog 5</div><div class='product_quantiy'><div id='product_AsusROG5' class='quantity_up' onclick='plusOne(this)'>+</div><div id='quantROG5' class='quantity_num'>0</div><div id='product_AsusROG5' class='quantity_down' onclick='minusOne(this)'>−</div></div><div class='product_price'>$999.99</div></div>");
}

/* laptops */
function AddXPS(){
  $('#cart_container').append("<div id='product_item'><div class='xps_image' id='product_image'></div><div class='product_name'>Dell XPS 13</div><div class='product_quantiy'><div id='product_DellXPS13' class='quantity_up' onclick='plusOne(this)'>+</div><div id='quantXPS' class='quantity_num'>0</div><div id='product_DellXPS13' class='quantity_down' onclick='minusOne(this)'>−</div></div><div class='product_price'>$899.99</div></div>");
}
function AddNitro5(){
  $('#cart_container').append("<div id='product_item'><div class='nitro5_image' id='product_image'></div><div class='product_name'>Acer Nitro 5</div><div class='product_quantiy'><div id='product_AcerNitro5' class='quantity_up' onclick='plusOne(this)'>+</div><div id='quantNitro5' class='quantity_num'>0</div><div id='product_AcerNitro5' class='quantity_down' onclick='minusOne(this)'>−</div></div><div class='product_price'>$1,199.99</div></div>");
}
function AddGe(){
  $('#cart_container').append("<div id='product_item'><div class='ge76_image' id='product_image'></div><div class='product_name'>MSI RAIDER GE76</div><div class='product_quantiy'><div id='product_MSIRaiderGe76' class='quantity_up' onclick='plusOne(this)'>+</div><div id='quantGE76' class='quantity_num'>0</div><div id='product_MSIRaiderGe76' class='quantity_down' onclick='minusOne(this)'>−</div></div><div class='product_price'>$1,999.99</div></div>");
}
function AddIdea(){
  $('#cart_container').append("<div id='product_item'><div class='ideapad3_image' id='product_image'></div><div class='product_name'>LENOVO IDEAPAD 3</div><div class='product_quantiy'><div id='product_LenovoIdeapad3' class='quantity_up' onclick='plusOne(this)'>+</div><div id='quantIdeapad' class='quantity_num'>0</div><div id='product_LenovoIdeapad3' class='quantity_down' onclick='minusOne(this)'>−</div></div><div class='product_price'>$799.99</div></div>");
}
function AddAcer(){
  $('#cart_container').append("<div id='product_item'><div class='acer_image' id='product_image'></div><div class='product_name'>ACER Laptop</div><div class='product_quantiy'><div id='product_ACER' class='quantity_up' onclick='plusOne(this)'>+</div><div id='quantAcer' class='quantity_num'>0</div><div id='product_ACER' class='quantity_down' onclick='minusOne(this)'>−</div></div><div class='product_price'>$599.99</div></div>");
}
function AddMac(){
  $('#cart_container').append("<div id='product_item'><div class='macbook_image' id='product_image'></div><div class='product_name'>MACBOOK AIR</div><div class='product_quantiy'><div id='product_MacBookAir' class='quantity_up' onclick='plusOne(this)'>+</div><div id='quantMacbook' class='quantity_num'>0</div><div id='product_MacBookAir' class='quantity_down' onclick='minusOne(this)'>−</div></div><div class='product_price'>$899.99</div></div>");
}
function AddOmen(){
  $('#cart_container').append("<div id='product_item'><div class='omen_image' id='product_image'></div><div class='product_name'>Omen Laptop</div><div class='product_quantiy'><div id='product_OMEN' class='quantity_up' onclick='plusOne(this)'>+</div><div id='quantOmen' class='quantity_num'>0</div><div id='product_OMEN' class='quantity_down' onclick='minusOne(this)'>−</div></div><div class='product_price'>$1,049.99</div></div>");
}
function AddX5(){
  $('#cart_container').append("<div id='product_item'><div class='x5_image' id='product_image'></div><div class='product_name'>MSI X5</div><div class='product_quantiy'><div id='product_MSIX5' class='quantity_up' onclick='plusOne(this)'>+</div><div id='quantX5' class='quantity_num'>0</div><div id='product_MSIX5' class='quantity_down' onclick='minusOne(this)'>−</div></div><div class='product_price'>$2,899.99</div></div>");
}

/* PCs */
function AddMSI(){
  $('#cart_container').append("<div id='product_item'><div class='msipc_image' id='product_image'></div><div class='product_name'>MSI PC</div><div class='product_quantiy'><div id='product_MSIPC' class='quantity_up' onclick='plusOne(this)'>+</div><div id='quantMSIPC' class='quantity_num'>0</div><div id='product_MSIPC' class='quantity_down' onclick='minusOne(this)'>−</div></div><div class='product_price'>$2,069.99</div></div>");
}
function AddNZXT(){
  $('#cart_container').append("<div id='product_item'><div class='nzxtpc_image' id='product_image'></div><div class='product_name'>NZXT PC</div><div class='product_quantiy'><div id='product_NZXTPC' class='quantity_up' onclick='plusOne(this)'>+</div><div id='quantNZXTPC' class='quantity_num'>0</div><div id='product_NZXTPC' class='quantity_down' onclick='minusOne(this)'>−</div></div><div class='product_price'>$3,199.99</div></div>");
}
function AddGeForce(){
  $('#cart_container').append("<div id='product_item'><div class='geforcepc_image' id='product_image'></div><div class='product_name'>GeForce PC</div><div class='product_quantiy'><div id='product_GEFORCEPC' class='quantity_up' onclick='plusOne(this)'>+</div><div id='quantGEFORCEPC' class='quantity_num'>0</div><div id='product_GEFORCEPC' class='quantity_down' onclick='minusOne(this)'>−</div></div><div class='product_price'>$4,999.99</div></div>");
}
function AddIBuy(){
  $('#cart_container').append("<div id='product_item'><div class='ibuypowerpc_image' id='product_image'></div><div class='product_name'>iBuyPower PC</div><div class='product_quantiy'><div id='product_IBUYPOWERPC' class='quantity_up' onclick='plusOne(this)'>+</div><div id='quantIBUYPC' class='quantity_num'>0</div><div id='product_IBUYPOWERPC' class='quantity_down' onclick='minusOne(this)'>−</div></div><div class='product_price'>$999.99</div></div>");
}
function AddCorsair(){
  $('#cart_container').append("<div id='product_item'><div class='corsairpc_image' id='product_image'></div><div class='product_name'>Corsair PC</div><div class='product_quantiy'><div id='product_CORSAIRPC' class='quantity_up' onclick='plusOne(this)'>+</div><div id='quantCORSAIRPC' class='quantity_num'>0</div><div id='product_CORSAIRPC' class='quantity_down' onclick='minusOne(this)'>−</div></div><div class='product_price'>$4,599.99</div></div>");
}
function AddTitan(){
  $('#cart_container').append("<div id='product_item'><div class='titanpc_image' id='product_image'></div><div class='product_name'>Titan PC</div><div class='product_quantiy'><div id='product_TITANPC' class='quantity_up' onclick='plusOne(this)'>+</div><div id='quantTITANPC' class='quantity_num'>0</div><div id='product_TITANPC' class='quantity_down' onclick='minusOne(this)'>−</div></div><div class='product_price'>$3,499.99</div></div>");
}
function AddAval(){
  $('#cart_container').append("<div id='product_item'><div class='avalanchepc_image' id='product_image'></div><div class='product_name'>Avalanche PCo</div><div class='product_quantiy'><div id='product_AVALANCHEPC' class='quantity_up' onclick='plusOne(this)'>+</div><div id='quantAVALANCHEPC' class='quantity_num'>0</div><div id='product_AVALANCHEPC' class='quantity_down' onclick='minusOne(this)'>−</div></div><div class='product_price'>$2,299.99</div></div>");
}
function AddAcerPC(){
  $('#cart_container').append("<div id='product_item'><div class='ram_image' id='product_image'></div><div class='product_name'>Acer PC</div><div class='product_quantiy'><div id='product_ACERPC' class='quantity_up' onclick='plusOne(this)'>+</div><div id='quantACERPC' class='quantity_num'>0</div><div id='product_ACERPC' class='quantity_down' onclick='minusOne(this)'>−</div></div><div class='product_price'>$2,699.99</div></div>");
}

/* PCs */
function AddRam(){
  $('#cart_container').append("<div id='product_item'><div class='ram_image' id='product_image'></div><div class='product_name'>Trident Z Neo RAM</div><div class='product_quantiy'><div id='product_TRIDENTZNEORAM' class='quantity_up' onclick='plusOne(this)'>+</div><div id='quantRAM' class='quantity_num'>0</div><div id='product_TRIDENTZNEORAM' class='quantity_down' onclick='minusOne(this)'>−</div></div><div class='product_price'>$209.99</div></div>");
}
function Add5600X(){
  $('#cart_container').append("<div id='product_item'><div class='cpu_image' id='product_image'></div><div class='product_name'>Ryzen 5 5600x</div><div class='product_quantiy'><div id='product_RYZEN55600X' class='quantity_up' onclick='plusOne(this)'>+</div><div id='quantCPU' class='quantity_num'>0</div><div id='product_RYZEN55600X' class='quantity_down' onclick='minusOne(this)'>−</div></div><div class='product_price'>$409.00</div></div>");
}
function AddPump(){
  $('#cart_container').append("<div id='product_item'><div class='pump_image' id='product_image'></div><div class='product_name'>AIO Pump</div><div class='product_quantiy'><div id='product_AIOPUMP' class='quantity_up' onclick='plusOne(this)'>+</div><div id='quantPump' class='quantity_num'>0</div><div id='product_AIOPUMP' class='quantity_down' onclick='minusOne(this)'>−</div></div><div class='product_price'>$129.99</div></div>");
}
function AddMouse(){
  $('#cart_container').append("<div id='product_item'><div class='mouse_image' id='product_image'></div><div class='product_name'>Logitc G Pro Wireless</div><div class='product_quantiy'><div id='product_MOUSE' class='quantity_up' onclick='plusOne(this)'>+</div><div id='quantMouse' class='quantity_num'>0</div><div id='product_MOUSE' class='quantity_down' onclick='minusOne(this)'>−</div></div><div class='product_price'>$119.99</div></div>");
}
function AddKeyboard(){
  $('#cart_container').append("<div id='product_item'><div class='keyboard_image' id='product_image'></div><div class='product_name'>Corsair K95 Keyboard</div><div class='product_quantiy'><div id='product_RGBKEYBOARD' class='quantity_up' onclick='plusOne(this)'>+</div><div id='quantK95' class='quantity_num'>0</div><div id='product_RGBKEYBOARD' class='quantity_down' onclick='minusOne(this)'>−</div></div><div class='product_price'>$129.99</div></div>");
}
function AddHeadset(){
  $('#cart_container').append("<div id='product_item'><div class='headset_image' id='product_image'></div><div class='product_name'>Razer Nari Headset</div><div class='product_quantiy'><div id='product_HEADSET' class='quantity_up' onclick='plusOne(this)'>+</div><div id='quantHeadset' class='quantity_num'>0</div><div id='product_HEADSET' class='quantity_down' onclick='minusOne(this)'>−</div></div><div class='product_price'>$94.99</div></div>");
}
function AddController(){
  $('#cart_container').append("<div id='product_item'><div class='controller_image' id='product_image'></div><div class='product_name'>XBOX Series X Controller</div><div class='product_quantiy'><div id='product_CONTROLLER' class='quantity_up' onclick='plusOne(this)'>+</div><div id='quantController' class='quantity_num'>0</div><div id='product_CONTROLLER' class='quantity_down' onclick='minusOne(this)'>−</div></div><div class='product_price'>$49.99</div></div>");
}
function Add3090(){
  $('#cart_container').append("<div id='product_item'><div class='gpu_image' id='product_image'></div><div class='product_name'>3090 GPU</div><div class='product_quantiy'><div id='product_3090' class='quantity_up' onclick='plusOne(this)'>+</div><div id='quantGPU' class='quantity_num'>0</div><div id='product_3090' class='quantity_down' onclick='minusOne(this)'>−</div></div><div class='product_price'>$4,999.99</div></div>");
}

function plusOne(obj){
  /* add item to array based on clicked ID */
  cartItems.push(obj.id);

  //document.getElementById('op10_icon').style.animation = "linear cartShake 0.5s forwards";
  /* store array in key "itemHistory", but turn it into a JSON string */
  localStorage.setItem("itemHistory", JSON.stringify(cartItems));
  var thisItemCount = 0;
  cartItems.forEach((v) => (v === obj.id && thisItemCount++));
  if(thisItemCount==null){thisItemCount=0;}
  obj.nextElementSibling.innerHTML = thisItemCount;

  reloadData();
}


function minusOne(obj){
  if(cartItems.includes(obj.id)){
    cartItems.splice(cartItems.indexOf(obj.id), 1);
    var thisItemCount = 0;

    cartItems.forEach((v) => (v === obj.id && thisItemCount++));
    obj.previousElementSibling.innerHTML = thisItemCount;

    localStorage.setItem("itemHistory", JSON.stringify(cartItems));
    quantityCheck = cartItems.filter(x => x == obj.id).length;
    reloadData();
  }
  if(quantityCheck==0){
    /* remove item div when quantity count is below 0 */
    var grandParent = obj.parentElement.parentElement;
    grandParent.remove();
  }
}

function reloadData(){
  // this function refreshes the shopping cart count
  if(cartItems.length<1){
    var cartContainer = document.getElementById('cart_container');
    if(cartContainer!=null){
      cartContainer.innerHTML="Your Shopping Cart Is Empty.";
      cartContainer.id = "cart_style_2";
    }
  }else{
    var cartContainer = document.getElementById('cart_container');
    if(cartContainer!=null){cartContainer.id = "cart_container";}
  }
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
  var select = document.getElementById('options');
  if(select!=null){
    var selected = select.value;
  }
  selected = parseFloat(selected);
  updateTotal();
}


function removeAll(){
  if(cartItems.length>0){
    let text = "Are you sure you want to remove all items from your cart?";
    if (confirm(text) == true) {
      // cartItems=["freespace"];
      cartItems=[];
      localStorage.setItem("itemHistory", JSON.stringify(cartItems));

      var allQuantityCounters = document.querySelectorAll('[class="quantity_num"]');
      for(var i = 0; i < allQuantityCounters.length; i++) {
          var grandPar = allQuantityCounters[i].parentElement.parentElement;
          grandPar.remove();
      }
      reloadData();
    }
  }
}


function updateTotal(){
  // calculations for total checkout price
  var noTaxTotal = 0.0 // total price before taxes
  var totalPrice = 0.0; // total price after taxes
  var tax = (4.225/100).toFixed(5); // tax rate of missouri
  var itemPrice = 0.0; // original price of item
  var taxedItem = 0.0; // original price plus tax
  var quantityOfItem = 0; // number of times the same item appears
  var quantityPrice = 0.0; // taxed item * number of items
  var itemCount = cartItems.length;
  var totalTax = 0.0; // total price of taxes paid
  var priceInstances = document.querySelectorAll('[class="product_price"]');
  for(var i = 0; i < priceInstances.length; i++){
    // remove all commas from string
    commaDel = priceInstances[i].innerHTML;
    var noComma = commaDel.replace(/,/g, "");
    // turn string into a float, remove the first character ($)
    itemPrice = parseFloat(noComma.substring(1));
    tax = parseFloat(tax);
    // for each item add the price to the total, with tax
    taxedItem = (itemPrice + itemPrice*tax).toFixed(2);
    taxedItem = parseFloat(taxedItem);
    //1 get previous sibling
    //2 go to 2nd child
    //3 parse the string into Float
    //4 multiply taxedItem by new Float
    var mainDiv = priceInstances[i].previousSibling; // 1
    var childTwo = mainDiv.children[1]; // 2
    var thisQuantity = parseFloat(childTwo.innerHTML); // 3
    quantityPrice = quantityOfItem + (thisQuantity * taxedItem); // 4
    quantityPrice = parseFloat((quantityPrice).toFixed(2));
    totalPrice = totalPrice + quantityPrice;

    /* noTaxTotal is euqal to itself + the before tax price multipled by the quantitiy of that item */
    noTaxTotal = (noTaxTotal + (itemPrice*thisQuantity));
    totalTax = (totalTax + ((itemPrice*thisQuantity)*tax));//item price multiplied by its quantity, multipied by tax
  }
  var select = document.getElementById('options');
  if(select!=null){  var selected = select.value;}
  var shippingPrice = parseFloat(selected);
  // Format the number with commas and add the usd sign

  var finalPrice = totalPrice+shippingPrice;

  var totalHTML = document.getElementById('total_price');
  if(totalHTML!=null){totalHTML.innerHTML="$ "+Intl.NumberFormat('en-US').format(finalPrice);}
  // 1) Change summary item count + 2) total before tax
  // 1.
  var finalSummaryItem = "Item Count: "+ itemCount;
  var summaryItemCount = document.getElementById('summary_item');
  if(summaryItemCount!=null){summaryItemCount.innerHTML=finalSummaryItem;}
  // 2.
  var noTaxPrice = "$ "+Intl.NumberFormat('en-US').format(noTaxTotal);
  var noTaxTotalText = document.getElementById('summary_item_count');
  if(noTaxTotalText!=null){noTaxTotalText.innerHTML=noTaxPrice;}


  // update the before tax, shipping, and tax prices
  var reciptNoTax = document.getElementById('noTax');
  var reciptShipping = document.getElementById('shipping');
  var reciptTax = document.getElementById('tax');
  if(reciptNoTax!=null){reciptNoTax.innerHTML="Before Tax - $ "+Intl.NumberFormat('en-US').format(noTaxTotal);}
  if(reciptShipping!=null){reciptShipping.innerHTML="Shipping - $ "+shippingPrice;}
  if(reciptTax!=null){reciptTax.innerHTML="Tax - $ "+Intl.NumberFormat('en-US').format(totalTax.toFixed(2));}
}


function optionChange(obj){
  var shippingPrice = parseFloat(obj.value);
  var reciptShipping = document.getElementById('shipping');
  if(reciptShipping.innerHTML!=null){reciptShipping.innerHTML="Shipping - $ "+shippingPrice;}
  updateTotal();
}


function promoCode(){
  var userCode = document.getElementById('promo').value;
  var promoHTML = document.getElementById('promodiscount');
  var totalHTML = document.getElementById('total_price');

  if(userCode=="fbla" || userCode=="FBLA"){
    promoHTML.style.visibility = "visible";
    promoHTML.innerHTML = "Discount - 10%";
    totalHTML.innerHTML="10% OFF!";
  }else{
    promoHTML.style.visibility = "hidden";
    updateTotal();
  }

}

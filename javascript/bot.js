var exit = document.getElementById('bot_exit');
var header = document.getElementById('bot_header');
var chatbox = document.getElementById('bot_container');
var pos_toggle = 'down';
var mobileView = document.getElementById('bot_mobileView');

loaded = sessionStorage.getItem("loadCount");

if(loaded==0 || loaded!=null){
    loaded++;
    sessionStorage.setItem("loadCount", loaded);
}else{
    var loaded=0;
    sessionStorage.setItem("loadCount", loaded);
}

// on initial visit to page
if(loaded==0){
    chatbox.style.bottom = "-440px";
}else{
    toggie = localStorage.getItem("chattoggle");
    pos_toggle = toggie;
    if(pos_toggle=='up'){
        chatbox.style.bottom = "0px";
    }else{
        chatbox.style.bottom = "-490px";
    }
}

header.addEventListener('mouseover', function(){
    if(pos_toggle=='down'){
        chatbox.style.bottom = "-440px";
    }
});
header.addEventListener('mouseout', function(){
    if(pos_toggle=='down'){
        chatbox.style.bottom = "-490px";
    }
});
mobileView.addEventListener('click', headUp);
header.addEventListener('click', headUp);
function headUp(){
    if(pos_toggle=='down'){
        chatbox.style.bottom = "0px";
        // check if in mobile view
        if(window.innerWidth<=1000){
            chatbox.style.visibility="visible";
            mobileView.style.visibility="hidden";
        }
        pos_toggle='up';
    }else{
        if(window.innerWidth<=1000){
            chatbox.style.visibility="hidden";
            mobileView.style.visibility="visible";
        }
        chatbox.style.bottom = "-490px";
        mobileView.style.visibility = "visible";
        pos_toggle='down';
    }
    localStorage.setItem("chattoggle", pos_toggle);
    toggie = localStorage.getItem("chattoggle");
}

//for typing messages and sending
var send_btn = document.getElementById('send_icon');
var message = document.getElementById('bot_textinput');
var chatBoxField = document.getElementById('bot_body');
message.addEventListener('keyup', function(e){
    //if enter is pressed
    if (e.key == "Enter") {
        message = document.getElementById('bot_textinput');
        sendUserText();
    }

});
send_btn.addEventListener('click', function(){
    message = document.getElementById('bot_textinput');
    sendUserText();
});
// alert('add time stamps for each text bubble that gets sent')

var tipArr = document.getElementsByClassName('tip');
for(i=0; i<tipArr.length; i++){
    tipArr[i].addEventListener('click', tipClicked);
}

// check for only spaces
function onlySpaces(str) {
    return str.trim().length === 0;
}

// sends user text bubble
function sendUserText(){
    if(message.value!="" && !onlySpaces(message.value)){
        msg = message.value
        //send txt to local storage
        var newMessage = document.createElement('div');
        newMessage.id = 'message_user';
        var textBubble = document.createElement('div');
        textBubble.id = "user_reply_message";
        textBubble.innerHTML = msg;
        var profilePic = document.createElement('div');
        profilePic.id = "user_reply_profile";
        newMessage.appendChild(textBubble);
        newMessage.appendChild(profilePic);
        chatBoxField.appendChild(newMessage);
        message.value = "";
        //scroll to bottom of div after sending text
        chatBoxField.scrollTop = chatBoxField.scrollHeight;   
        setTimeout(botReply, 500, msg);
    }
}

// changes input box to Tip that was clicked
function tipClicked(){
    message = document.getElementById('bot_textinput');
    message.value = this.innerHTML;
}

// creates typing bubble
function typeBubble(){
    var msgBot = document.createElement('div');
    var botPP = document.createElement('div');
    var parDiv = document.createElement('div');
    var dot1 = document.createElement('div');
    var dot2 = document.createElement('div');
    var dot3 = document.createElement('div');
    msgBot.id = "message_bot";
    botPP.id = "bot_reply_profile"
    parDiv.className = "bot_typing";
    dot1.classList.add("dot");
    dot2.classList.add("dot");
    dot3.classList.add("dot");
    msgBot.appendChild(botPP);
    msgBot.appendChild(parDiv);
    parDiv.appendChild(dot1);
    parDiv.appendChild(dot2);
    parDiv.appendChild(dot3);
    chatBoxField.appendChild(msgBot);
}

// deletes typing animation bubble
function deleteBubble(divTyping){
    for(i = 0; i<divTyping.length; i++){
        // for every typing bubble div, get its parent and delete it
        divTyping[i].parentElement.remove();
    }
}

// types bubble, waits 1s to delete, call other function to reply, scroll to bottom
function botReply(userMsg){
    typeBubble();
    var divTyping = document.getElementsByClassName('bot_typing')
    setTimeout(deleteBubble, 1000, divTyping);
    setTimeout(botText, 1000, userMsg);
    chatBoxField.scrollTop = chatBoxField.scrollHeight;    
}

// bot text message
function botText(userMsg){
    var msgBot = document.createElement('div');
    var botPP = document.createElement('div');
    var botType = document.createElement('div');
    msgBot.id = "message_bot";
    botPP.id = "bot_reply_profile"
    botType.id = "bot_reply_message";
    botSmartReply(botType,userMsg);
    msgBot.appendChild(botPP);
    msgBot.appendChild(botType);
    chatBoxField.appendChild(msgBot);
}

// checks for what user types and suggest based on that
function botSmartReply(botType,userMsg){
    newuserMsg = userMsg.toLowerCase();
    var reply = "I'm sorry, I didn't catch that."
    var botLink = "";
    var daLink = "";
    var daRef = "";
    
    if(newuserMsg.includes("home")){
        reply = "";
        daLink = "Home Page"
        daRef = "../index.html"
    }
    if(newuserMsg.includes("documentation")){
        reply = "See ";
        daLink = "documentation here."
        daRef = "../html/documentation.html"
    }
    if(newuserMsg.includes("about")){
        reply = "Learn more ";
        daLink = "about us here."
        daRef = "../html/aboutus.html"
    }
    if(newuserMsg.includes("shop") || newuserMsg.includes("store")){
        reply = "You can visit our ";
        daLink = "shop here."
        daRef = "../html/shop.html"
    }
    if(newuserMsg.includes("location") || newuserMsg.includes("located")){
        reply = "Explore our ";
        daLink = "locations here."
        daRef = "../html/location.html"
    }
    if(newuserMsg.includes("contact") || newuserMsg.includes("message")){
        reply = "You can ";
        daLink = "contatus us here."
        daRef = "../index.html"
    }
    if(newuserMsg.includes("help")){
        reply = "Help Tips";
    }
    var botLink = document.createElement('a');
    botLink.id = "bot_link";
    botLink.href = daRef;
    botType.innerHTML = reply;
    botLink.innerHTML = daLink;
    // store meta data of messages
    storeMessage(userMsg, reply, daLink, daRef);
    return botType.appendChild(botLink);
}

// store chat logs in local storage
var gotMsgUser = JSON.parse(sessionStorage.getItem("messagesUser"));
var gotMsgBot = JSON.parse(sessionStorage.getItem("messagesBot"));
var gotMsgLink = JSON.parse(sessionStorage.getItem("messagesLink"));
var gotMsgRef = JSON.parse(sessionStorage.getItem("messagesRef"));

if(gotMsgUser!=null && gotMsgUser.length>0 && gotMsgBot!=null && gotMsgBot.length>0){
    var msgArrayUser = gotMsgUser;
    var msgArrayBot = gotMsgBot;
    var msgArrayLink = gotMsgLink;
    var msgArrayRef = gotMsgRef;
}else{
    var msgArrayUser = [];
    var msgArrayBot = [];
    var msgArrayLink = [];
    var msgArrayRef = [];
}
function storeMessage(uMsg, bMsg, bLink, bRef){
    msgArrayUser.push(uMsg);
    msgArrayBot.push(bMsg);
    msgArrayLink.push(bLink);
    msgArrayRef.push(bRef);

    if(msgArrayUser.length>10){
        msgArrayUser.splice(0, 1);
        msgArrayBot.splice(0, 1);
        msgArrayLink.splice(0, 1);
        msgArrayRef.splice(0,1);
    }
    sessionStorage.setItem("messagesUser", JSON.stringify(msgArrayUser));
    sessionStorage.setItem("messagesBot", JSON.stringify(msgArrayBot));
    sessionStorage.setItem("messagesLink", JSON.stringify(msgArrayLink));
    sessionStorage.setItem("messagesRef", JSON.stringify(msgArrayRef));
}

// build history of chat logs on build
var scrollOnBuild=0;
if(msgArrayUser.length > 0 && msgArrayBot.length > 0){    
    var activeTyper = "user";
    var oneStep = 0;
    for(i = 0; i < (msgArrayUser.length + msgArrayBot.length); i++){
        if(activeTyper=="user"){
            var newMessage = document.createElement('div');
            newMessage.id = 'message_user';
            var textBubble = document.createElement('div');
            textBubble.id = "user_reply_message";
            textBubble.innerHTML = msgArrayUser[Math.round(i/2)];
            var profilePic = document.createElement('div');
            profilePic.id = "user_reply_profile";
            newMessage.appendChild(textBubble);
            newMessage.appendChild(profilePic);
            chatBoxField.appendChild(newMessage);
            activeTyper="bot";
        }else{
            var msgBot = document.createElement('div');
            var botPP = document.createElement('div');
            var botType = document.createElement('div');
            var botLink = document.createElement('a');
            botLink.innerHTML = msgArrayLink[oneStep];
            botLink.href = msgArrayRef[oneStep];
            // botLink.href = "../index.html";

            botLink.id = "bot_link";
            msgBot.id = "message_bot";
            botPP.id = "bot_reply_profile"
            botType.id = "bot_reply_message";
            botType.innerHTML = msgArrayBot[Math.floor(i/2)];
            botType.appendChild(botLink);
            msgBot.appendChild(botPP);
            msgBot.appendChild(botType);
            chatBoxField.appendChild(msgBot);
            activeTyper="user";
            oneStep++;
        }
    }
    setTimeout(updateScroll, 200);
}
function updateScroll(){
    var chatBoxField = document.getElementById('bot_body');
    chatBoxField.scrollTop = chatBoxField.scrollHeight;
}
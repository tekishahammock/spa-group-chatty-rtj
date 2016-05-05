// MAIN JAVASCRIPT FILE FOR CHATTY APP
// linking to body for theme changes from checkboxes
var body = document.getElementById("bod");

// adding event listener for keypress
document.addEventListener("keyup", function(e) {
  if (e.keyCode === 13) {
    var messageInfo = {};
    var userInput = document.getElementById("userInput");
    messageInfo.messageStr = userInput.value;
    console.log(messageInfo.messageStr);
    var userOptions = document.getElementsByClassName("userOptions");
    for (var i = 0; i < userOptions.length; i++) {
      if (userOptions[i].checked){
        messageInfo.user = userOptions[i].value;
      }
    }
    chatty.userInputMessages(messageInfo);
    userInput.value = "";
  }
});

// adding event listener to the Dark Theme button
var darkTheme = document.getElementById("darkTheme");
darkTheme.addEventListener("click", function(event) {
  body.classList.toggle("dark-theme");
});

// adding event listener to the Large Text button
var largeText = document.getElementById("largeText");
largeText.addEventListener("click", function(event) {
  body.classList.toggle("make-large");
});

// adding event listener for delete buttons
var chatbox = document.getElementById("chatbox");
chatbox.addEventListener("click", chatty.deleteMessage);

// adding event listener for clear button
var clearAll = document.getElementById("clear");
clearAll.addEventListener("click", chatty.clearAllMessages);

// "MAIN" IIFE FOR AUGMENTING CHATTY, CONTAINS ALL FUNCTIONS DIRECTLY TOUCHING THE PRIVATE ARRAY
// Confirm with Joe that we've met requirements with the functions existing here and being called elsewhere
var chatty = (function(originalChatty) {

  // private array for message objects
  var messageArray = [];

  var counter = 0;
  // function for creating messages, enabling the "disabled" clear button, and scrolling page down to last message
  originalChatty.userInputMessages = function(messageInfo) {
    messageArray.push({id:counter, message:messageInfo, timestamp:new Date()});
    chatbox.innerHTML += `<div class="userMessage"><h3>${messageInfo.user}</h3><p>${messageInfo.messageStr}</p><button type="delete" id="delete${counter}" class="delete">delete</button><p>${messageArray[messageArray.length - 1].timestamp}</p></div>`;
    clearAll.removeAttribute("disabled");
    counter++;
    console.log("this", chatbox.children.length);
    if (chatbox.children.length > 20) {
      chatbox.removeChild(chatbox.getElementsByTagName("div")[0]);
      var twentyAlert = document.getElementById('twentyPlus');
      twentyAlert.innerHTML = "Only the 20 newest messages are being shown";
    }
    window.scrollTo(0,document.body.scrollHeight);
  };

  // function for deleting message objects out of the private array, determining if clear button needs to be disabled
  originalChatty.deleteObject = function(clickedId) {
    console.log(`#${clickedId} is deleted`);
    for (var i = 0; i < messageArray.length; i++) {
      if (messageArray[i].id == clickedId) {
        messageArray.splice(i, 1);
        console.log(messageArray);
      }
    }
    if (messageArray.length < 1) {
      clearAll.setAttribute("disabled", "disabled");
    }
  };

  // clears all messages out of the DOM and out of the array
  originalChatty.clearArray = function() {
    messageArray.length = 0;
  };

return originalChatty;

})(chatty || {});

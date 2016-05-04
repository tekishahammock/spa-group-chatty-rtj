var chatty = (function(originalChatty) {

  var messageArray = [];
  var outputDOM = document.getElementById("chatbox");

  originalChatty.userInputMessages = function(userStuff) {
    messageArray.push(userStuff);
    console.log(messageArray);
    outputDOM.innerHTML += `<div class="userMessage">${userStuff}<button type="delete" id="delete[i]" class="delete">delete</button></div>`;
  };

  originalChatty.clearArray = function() {
    messageArray.length = 0;
    console.log(messageArray);
  };

return originalChatty;

})(chatty || {});
var chatty = (function(originalChatty) {

  var messageArray = [];
	var outputDOM = document.getElementById("chatbox");

  originalChatty.userInputMessages = function(userMess) {
  var userInput = document.getElementById("userInput");
  var userStuff = userInput.value
  messageArray.push(userStuff);
  userInput.value = "";
  console.log(messageArray);
  for (var i = 0; i < messageArray.length; i++) {
    console.log(messageArray[i]);
    var currentMessage = messageArray[i];
      outputDOM.innerHTML += `<div class="userMessage">${currentMessage}<button type="delete" id="delete[i]" class="delete">delete</button></div>`;
	}
}

return originalChatty;

})(chatty || {});
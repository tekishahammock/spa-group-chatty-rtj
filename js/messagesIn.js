var chatty = (function(originalChatty) {

  var messageArray = [];
	var outputDOM = document.getElementById("chatbox");

  originalChatty.userInputMessages = function(userMess) {
<<<<<<< HEAD
  var userInput = document.getElementById("userInput").value;
  messageArray.push(userInput);
  console.log(messageArray);
  for (var i = 0; i < messageArray.length; i++) {
      outputDOM += `<div id="chatbox">`;
      outputDOM += `{userInput.messsageArray}`;
	}
}

  originalChatty.clearArray = function() {
    messageArray.length = 0;
    console.log(messageArray);
  };

return originalChatty;

})(chatty || {});
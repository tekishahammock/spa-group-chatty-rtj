var chatty = (function(originalChatty) {

  var messageArray = [];
	var outputDOM = document.getElementById("chatbox");

  originalChatty.userInputMessages = function(userMess) {
    var userInput = document.getElementById("userInput").value;
    messageArray.push(userInput);
    console.log(messageArray);
  	// for (var i = 0; i < userMess.length; i++) {

		// }
	};

return originalChatty;

})(chatty || {});
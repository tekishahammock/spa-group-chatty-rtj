var chatty = (function(originalChatty) {

  var messageArray = [];
	var outputDOM = document.getElementById("chatbox");

  originalChatty.userInputMessages = function(userMess) {
    var userInput = document.getElementById("userInput");
    messageArray.push(userInput);
    console.log(messageArray);
  	// for (var i = 0; i < userMess.length; i++) {

		// }
	};

  originalChatty.clearArray = function() {
    messageArray.length = 0;
    console.log(messageArray);
  };

return originalChatty;

})(chatty || {});
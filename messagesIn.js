//messages input iife augmentor for main chatty.js on global scope
var chatty = (function(originalChatty) {
//private scope variables
  var messageArray = []; //created an empty array for input strings to go into
	var outputDOM = document.getElementById("chatbox"); //user input will be placed into the DOM

  originalChatty.userInputMessages = function(userMess) {
    var userInput = document.getElementById("userInput").value; //gets the value of the user input
    messageArray.push(userInput); //this pushes the user's input into the array
    console.log(messageArray);
  	for (var i = 0; i < messageArray.length; i++) {
      outputDOM += `<div id="chatbox">`;
      outputDOM += `{userInput.messsageArray}`;
		}



}

  return originalChatty;

})(chatty || {});

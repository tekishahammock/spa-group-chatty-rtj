var chatty = (function(chatty) {
  var chatbox = document.getElementById('chatbox');

  chatty.putMessagesinDOM = function() {
    var messages = JSON.parse(defaultXHR.responseText);
    for (var i = 0; i < messages.default_message.length; i++) {
      console.log(messages.default_message[i]);
      chatty.userInputMessages(messages.default_message[i]);
    }
  }

  var defaultXHR = new XMLHttpRequest();
  defaultXHR.addEventListener("load", chatty.putMessagesinDOM);
  defaultXHR.open("GET", "js/chattydefault.json");
  defaultXHR.send();

  return chatty;

}( chatty || {} ));
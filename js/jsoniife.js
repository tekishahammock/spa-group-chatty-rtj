var chatty = (function(chatty) {
  var chatbox = document.getElementById('chatbox');

  chatty.putMessagesinDOM = function() {
    var messages = JSON.parse(defaultXHR.responseText);
    for (var i = 0; i < messages.default_message.length; i++) {
      chatbox.innerHTML += `<div>${messages.default_message[i]} <button type="delete" id="delete[i]" class="delete">delete</button></div>`;
    }
  }

  var defaultXHR = new XMLHttpRequest();
  defaultXHR.addEventListener("load", chatty.putMessagesinDOM);
  defaultXHR.open("GET", "js/chattydefault.json");
  defaultXHR.send();

  return chatty;

}( chatty || {} ));
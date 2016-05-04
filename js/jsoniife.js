var chatty = (function(chatty) {
  var chatbox = document.getElementById('chatbox');

  chatty.putMessageinDOM = function(defaultXHR) {
    var messages = JSON.parse(defaultXHR.responseText);
    console.log(messages);
  }

  var defaultXHR = new XMLHttpRequest();
  defaultXHR.addEventListener("load", putMessagesinDOM);
  defaultXHR.open("GET", "js/jsoniife.js");
  defaultXHR.send();

  return chatty;

}( chatty || {} ));
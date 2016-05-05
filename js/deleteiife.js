// IIFE FOR DELETING/REMOVING INFORMATION OUT OF THE DOM
var chatty = (function(chatty) {

  // function for deleting individual message elements out of the DOM
  chatty.deleteMessage = function(clickEvent) {
    var clicked = clickEvent.target;
    chatbox.removeChild(clicked.parentNode);
    chatty.deleteObject(clicked.id.replace("delete", ""));
  }

  // function for deleting ALL message elements out of the DOM, disables clear button
  chatty.clearAllMessages = function(clickEvent) {
    while (chatbox.firstChild) {
      chatbox.removeChild(removeElement.firstChild);
    }
    chatty.clearArray();
    clearAll.setAttribute("disabled", "disabled");
  }

  return chatty
}( chatty || {}));

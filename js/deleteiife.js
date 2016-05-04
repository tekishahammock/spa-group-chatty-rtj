var chatty = (function(chatty) {

  chatty.deleteMessage = function(clickEvent) {
    console.log(clickEvent);
    removeElement.removeChild(clickEvent.target.parentNode);
  }

  chatty.clearAllMessages = function(clickEvent) {
    removeElement.parentNode.removeChild(removeElement);
  }

  return chatty
}( chatty || {}));



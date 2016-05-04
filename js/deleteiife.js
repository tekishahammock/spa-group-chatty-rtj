var chatty = (function(chatty) {

  chatty.deleteMessage = function(clickEvent) {
    console.log(clickEvent);
    console.log(clickEvent.target.parentNode)
    removeElement.removeChild(clickEvent.target.parentNode);
  }

  chatty.clearAllMessages = function(clickEvent) {
    console.log(removeElement);
    while (removeElement.firstChild) {
      removeElement.removeChild(removeElement.firstChild);
    }
    chatty.clearArray();
  }

  return chatty
}( chatty || {}));



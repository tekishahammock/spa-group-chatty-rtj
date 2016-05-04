var chatty = (function(chatty) {

  chatty.deleteMessage = function(clickEvent) {
    console.log(clickEvent);
    removeElement.removeChild(clickEvent.target.parentNode);
  }

  return chatty
}( chatty || {}));



var chatty = (function() {
  function putMessageinDOM() {
    var messages = JSON.parse(defaultXHR.responseText);
    console.log(messages);
  }

  var defaultXHR = new XMLHttpRequest();
  defaultXHR.addEventListener("load", putMessagesinDOM);
  defaultXHR.open("GET", "js/jsoniife.js");
  defaultXHR.send();

}( chatty || {} ));
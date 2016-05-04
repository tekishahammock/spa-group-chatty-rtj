// linking to body for theme changes from checkboxes
var body = document.getElementById("bod");

// adding event listener for keypress
document.addEventListener("keyup", function(e) {
  if (e.keyCode === 13) {
    originalChatty.userInputMessages(e);
  }
});

// adding event listener to the Dark Theme button
var darkTheme = document.getElementById("darkTheme");
darkTheme.addEventListener("click", function(event) {
  body.classList.toggle("dark-theme");
});

// adding event listener to the Large Text button
var largeText = document.getElementById("largeText");
largeText.addEventListener("click", function(event) {
  body.classList.toggle("make-large");
});

// adding event listener for delete buttons
var removeElement = document.getElementById("chatbox");
console.log(removeElement);
removeElement.addEventListener("click", chatty.deleteMessage);

// disable clear button if no messages in the container
// document.getElementById("clear")[0].setAttribute("disabled", true);

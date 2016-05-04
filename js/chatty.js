// linking to body for theme changes from checkboxes (incomplete)
var body = document.getElementById("bod");

// adding event listener to the Dark Theme button (incomplete)
var darkTheme = document.getElementById("darkTheme");
darkTheme.addEventListener("click", function(event) {
  body.classList.toggle("dark-theme");
});

// adding event listener to the Large Text button (incomplete)
var largeText = document.getElementById("largeText");
largeText.addEventListener("click", function(event) {
  body.classList.toggle("make-large");
});



// disable clear button if no messages in the container
document.getElementById("clear")[0].setAttribute("disabled", true);

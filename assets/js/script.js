var button = document.querySelector("nav .toggle");
var menu = document.querySelector("nav ul");

button.addEventListener("click", function(){
    menu.classList.toggle("hidden-menu");
})
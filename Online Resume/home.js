var btn = document.querySelector(".nooption-header");

btn.addEventListener("mouseover", function() {
  this.textContent = "YES!!!";
})
btn.addEventListener("mouseout", function() {
  this.textContent = "NO";
})
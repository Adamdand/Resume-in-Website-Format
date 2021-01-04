var btn = document.querySelector(".nooption-header");

btn.addEventListener("mouseover", function() {
  this.textContent = "YES!!!";
})
btn.addEventListener("mouseout", function() {
  this.textContent = "NO";
})

$(function(){
  $("button").on({
      mouseover:function(){
          $(this).css({
              left:(Math.random()*200)+"px",
              top:(Math.random()*200)+"px",
          });
      }
  });
});​


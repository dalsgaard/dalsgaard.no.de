
window.onload = function() {
  
  var circle = document.querySelector("svg circle");
  circle.addEventListener('click', function(e) {
    alert("Circle clicked!");
  }, false);

  var rect = document.querySelector("svg rect");
  rect.addEventListener('click', function(e) {
    alert("Rect clicked!");
  }, false);

};
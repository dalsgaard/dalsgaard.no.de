
window.onload = function() {

  var circle = document.querySelector("svg circle.red");
  circle.addEventListener('click', function(e) {
  	if (circle.cx.baseVal.value == 200) { 
    	circle.cx.baseVal.value = 250;
    } else {
      circle.cx.baseVal.value = 200;
    }
  }, false);

  var rect = document.querySelector("svg rect.blue");
  rect.addEventListener('click', function(e) {
    alert("Blue rect clicked!");
  }, false);

};
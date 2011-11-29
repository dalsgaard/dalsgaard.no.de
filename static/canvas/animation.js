
var context = null;

var speed = 100;
var fps = 60;
var total = 4000;

var drawDash = function(offset) {
  context.fillRect(190, offset, 20, 50);
};

var distance = 0;

var drawFrame = function() {
  var start = (distance % 100) - 100;
  for (i = 0; i < 5; i++) {
    drawDash(start + 100 * i);
  }
};

var loop = function() {
  context.clearRect(0, 0, 400, 400);
  drawFrame();
  distance += speed/fps;
  if (distance < total) {
    setTimeout("loop()", 1/fps * 1000);
  }
};

window.onload = function() {

  var canvas = document.querySelector("canvas");
  context = canvas.getContext('2d');
  context.fillStyle = 'white';

  document.querySelector("button.animate").addEventListener('click', function(e) {
    distance = 0;
    loop();
  }, false);

}
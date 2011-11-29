
var context = null;
var blueCar = null;

var speed = 100;
var fps = 60;
var total = 4000;

var drawDash = function(offset) {
  context.fillRect(145, offset, 10, 50);
};

var distance = 0;

var drawFrame = function() {
  var start = (distance % 100) - 100;
  for (i = 0; i < 7; i++) {
    drawDash(start + 100 * i);
  }
  context.drawImage(blueCar, 30, 400);
};

var loop = function() {
  context.clearRect(0, 0, 300, 600);
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

  blueCar = new Image();
  blueCar.src = "../images/cars/bluecar.png";
  blueCar.addEventListener('load', function() {
    drawFrame();
  }, false);

  document.querySelector("button.run").addEventListener('click', function(e) {
    distance = 0;
    loop();
  }, false);

}

var context = null;
var blueCar = null;

var speed = 100;
var fps = 60;
var total = 1000;

var drawDash = function(offset) {
  context.fillRect(145, offset, 10, 50);
};

var distance = 0;
var gamma = 0;
var xPos = 30;

var drawFrame = function() {
  var start = (distance % 100) - 100;
  for (i = 0; i < 7; i++) {
    drawDash(start + 100 * i);
  }
  xPos += (gamma * 3 / (1/fps * 1000));
  context.drawImage(blueCar, xPos, 400);
};

var statusText;

var loop = function() {
  context.clearRect(0, 0, 300, 600);
  drawFrame();
  distance += speed/fps;
  if (xPos < 0 || xPos > 224) {
    statusText.innerHTML = "Crash!";
  } else {
    if (distance < total) {
      setTimeout("loop()", 1/fps * 1000);
    } else {
      statusText.innerHTML = "Done!";    
    }
  }
};

window.onload = function() {

  statusText = document.querySelector("li.status");

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
    gamma = 0;
    xPos = 30;
    statusText.innerHTML = "";
    loop();
  }, false);

  var gammaText = document.querySelector("li.gamma");
  window.addEventListener('deviceorientation', function(event) {
    gamma = event.gamma;
    //gammaText.innerHTML = gamma;
  }, false);

}
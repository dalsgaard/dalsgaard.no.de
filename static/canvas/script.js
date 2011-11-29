
function clickPoint(canvas, event) {
  var box = canvas.getBoundingClientRect();
  var left = box.left + (box.width - canvas.width) / 2;
  var top = box.top + (box.height - canvas.height) / 2;
  var x = (event.clientX - box.left) * (canvas.width/box.width);
  var y = (event.clientY - box.top) * (canvas.height/box.height);
  return {x: event.clientX - left, y: event.clientY - top};
}


window.onload = function() {

  
  var canvas = document.querySelector("canvas.drawing");
  var context = canvas.getContext('2d');

  var topCanvas = document.querySelector("canvas.top");
  var topContext = topCanvas.getContext('2d');
  topContext.globalAlpha = 0.5;

  var lineTo = true;

  topCanvas.addEventListener('click', function(e) {
    var point = clickPoint(canvas, e);
    topContext.beginPath();
    topContext.moveTo(point.x, point.y);
    topContext.arc(point.x, point.y, 10, 0, Math.PI * 2);
    topContext.fill();
    if (lineTo) {
      context.lineTo(point.x, point.y);
    } else {
      context.moveTo(point.x, point.y);
    }
  }, false);
  
  document.querySelector("button.begin-path").addEventListener('click', function(e) {
    context.beginPath();
     topContext.clearRect(0, 0, canvas.width, canvas.height);
  }, false);

  document.querySelector("button.close-path").addEventListener('click', function(e) {
    context.closePath();
  }, false);

  document.querySelector("button.fill").addEventListener('click', function(e) {
    context.fill();
  }, false);

  document.querySelector("button.stroke").addEventListener('click', function(e) {
    context.stroke();
  }, false);

  document.querySelector("button.clear").addEventListener('click', function(e) {
     context.clearRect(0, 0, canvas.width, canvas.height);
     topContext.clearRect(0, 0, canvas.width, canvas.height);
  }, false);

  var fillInput = document.querySelector("input.fill");
  fillInput.addEventListener('blur', function(e) {
    context.fillStyle = this.value;
  }, false);
  fillInput.value = context.fillStyle;
  
  var strokeInput = document.querySelector("input.stroke");  
  strokeInput.addEventListener('blur', function(e) {
    context.strokeStyle = this.value;
  }, false);
  strokeInput.value = context.strokeStyle;
  
  var lineWidthInput = document.querySelector("input.line-width");  
  lineWidthInput.addEventListener('change', function(e) {
    context.lineWidth = this.value;
  }, false);
  lineWidthInput.value = context.lineWidth;
    
};

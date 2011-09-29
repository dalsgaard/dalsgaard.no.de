

function clickPoint(canvas, event) {
  var box = canvas.getBoundingClientRect();
  var left = box.left + (box.width - canvas.width) / 2;
  var top = box.top + (box.height - canvas.height) / 2;
  var x = (event.clientX - box.left) * (canvas.width/box.width);
  var y = (event.clientY - box.top) * (canvas.height/box.height);
  return {x: event.clientX - left, y: event.clientY - top};
}


window.onload = function() {

  
  var canvas = document.querySelector("canvas");
  var context = canvas.getContext('2d');

  var lineTo = true;

  canvas.addEventListener('click', function(e) {
    var point = clickPoint(canvas, e);
    if (lineTo) {
      context.lineTo(point.x, point.y);
    } else {
      context.moveTo(point.x, point.y);
    }
  }, false);
  
  document.querySelector("button.begin-path").addEventListener('click', function(e) {
    context.beginPath();
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
    //canvas.width = canvas.width;
    context.clearRect(0, 0, canvas.width, canvas.height);
  }, false);

  document.querySelector("input.fill").addEventListener('blur', function(e) {
    context.fillStyle = this.value;
  }, false);
    
  document.querySelector("input.stroke").addEventListener('blur', function(e) {
    context.strokeStyle = this.value;
  }, false);
    
  document.querySelector("input.line-width").addEventListener('change', function(e) {
    context.lineWidth = this.value;
  }, false);
    
};


window.onload = function() {

  var canvas = document.querySelector("canvas");
  context = canvas.getContext('2d');

  var moose = new Image();
  moose.src = "../images/moose.png";
  moose.addEventListener('load', function() {
    context.drawImage(moose, 0, 0);
  }, false);

  document.querySelector("button.invert").addEventListener('click', function(e) {
    var data = context.getImageData(0, 0, canvas.width, canvas.height);
    var worker = new Worker("lib/worker.js");
    worker.addEventListener('message', function(e) {
      context.putImageData(e.data, 0, 0);
      worker.terminate();
    }, false);
    worker.postMessage(data);
  }, false);

}
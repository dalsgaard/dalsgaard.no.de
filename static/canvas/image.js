
window.onload = function() {

  var canvas = document.querySelector("canvas");
  context = canvas.getContext('2d');

  var moose = new Image();
  moose.src = "../images/moose.png";
  moose.addEventListener('load', function() {
    context.drawImage(moose, 0, 0);
  }, false);

  var invert = function(data) {
    for(var i = 0, l = data.width * data.height; i < l; i++) {
        var j = i * 4; 
        data.data[j] = 255 - data.data[j];
        data.data[j + 1] = 255 - data.data[j];
        data.data[j + 2] = 255 - data.data[j];
    }    
  };

  document.querySelector("button.invert").addEventListener('click', function(e) {
    var data = context.getImageData(0, 0, canvas.width, canvas.height);
    invert(data);
    context.putImageData(data, 0, 0);
  }, false);

}
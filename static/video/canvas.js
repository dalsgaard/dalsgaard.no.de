
var video;
var context;
var fps = 60;

var drawFrame = function() {
  //context.drawImage(video, 0, 0, 320, 240);
  context.drawImage(video, 160, 0, 160, 120, 0, 120, 160, 120);
  context.drawImage(video, 160, 120, 160, 120, 0, 0, 160, 120);
  context.drawImage(video, 0, 0, 160, 120, 160, 120, 160, 120);
  context.drawImage(video, 0, 120, 160, 120, 160, 0, 160, 120);
};

window.onload = function() {

  var canvas = document.querySelector("canvas");
  context = canvas.getContext('2d');

  video = document.querySelector("video");

  video.addEventListener('play', function(e) {
    setInterval("drawFrame()", 1 / fps * 1000);
  }, false);

  video.addEventListener('pause', function(e) {
    clearInterval();
  }, false);

  video.addEventListener('ended', function(e) {
    clearInterval();
  }, false);

};

window.onload = function() {
  
var video = document.querySelector("video");
  
  var volume = document.querySelector("span.volume");
  volume.innerHTML = Math.round(video.volume * 10);

  document.querySelector("button.play").addEventListener('click', function(e) {
    video.play();
  }, false);

  document.querySelector("button.pause").addEventListener('click', function(e) {
    video.pause();
  }, false);

  document.querySelector("button.stop").addEventListener('click', function(e) {
    video.pause();
    video.currentTime = 0;
  }, false);

  document.querySelector("button.up").addEventListener('click', function(e) {
    if (video.volume <= 0.9) {
      video.volume += 0.1;
      volume.innerHTML = Math.round(video.volume * 10);
    }
  }, false);

  document.querySelector("button.down").addEventListener('click', function(e) {
    if (video.volume >= 0.1) {
      video.volume -= 0.1;
      volume.innerHTML = Math.round(video.volume * 10);
    }
  }, false);

  var time = document.querySelector("span.time");
  video.addEventListener('timeupdate', function(e) {
    time.innerHTML = Math.round(video.currentTime);
  }, false);

  video.addEventListener('playing', function(e) {
    document.querySelector("span.duration").innerHTML = Math.round(video.duration);
  }, false);
    
  
}
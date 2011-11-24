
window.onload = function() {
  
  var audio = document.querySelector("audio");
  
  document.querySelector("button.play").addEventListener('click', function(e) {
    audio.play();
  }, false);

  document.querySelector("button.pause").addEventListener('click', function(e) {
    audio.pause();
  }, false);

  document.querySelector("button.stop").addEventListener('click', function(e) {
    audio.pause();
    audio.currentTime = 0;
  }, false);

  var time = document.querySelector("span.time");
  audio.addEventListener('timeupdate', function(e) {
    time.innerHTML = Math.floor(audio.currentTime);
  }, false);

  audio.addEventListener('playing', function(e) {
    document.querySelector("span.duration").innerHTML = Math.floor(audio.duration);
  }, false);
  
  
}
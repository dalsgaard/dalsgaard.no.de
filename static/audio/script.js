
window.onload = function() {
  
  var audio = document.querySelector("audio");
  
  var volume = document.querySelector("span.volume");
  volume.innerHTML = Math.round(audio.volume * 10);

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

  document.querySelector("button.up").addEventListener('click', function(e) {
    if (audio.volume <= 0.9) {
      audio.volume += 0.1;
      volume.innerHTML = Math.round(audio.volume * 10);
    }
  }, false);

  document.querySelector("button.down").addEventListener('click', function(e) {
    if (audio.volume >= 0.1) {
      audio.volume -= 0.1;
      volume.innerHTML = Math.round(audio.volume * 10);
    }
  }, false);

  var time = document.querySelector("span.time");
  audio.addEventListener('timeupdate', function(e) {
    time.innerHTML = Math.round(audio.currentTime);
  }, false);

  audio.addEventListener('playing', function(e) {
    document.querySelector("span.duration").innerHTML = Math.round(audio.duration);
  }, false);
  
  
}
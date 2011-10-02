
window.onload = function() {
  
  var time = document.querySelector("div.time span.time");
  time.innerHTML = (new Date()).toTimeString();
  
  document.querySelector("div.time label").addEventListener('click', function(e) {
    time.innerHTML = (new Date()).toTimeString();
  }, false);

  var worker = null;
  
  var prime = document.querySelector("div.prime span.prime");
  document.querySelector("div.prime label").addEventListener('click', function(e) {
    if (worker) {
      worker.terminate();
      worker = null;
    } else {
      prime.innerHTML = "";
      worker = new Worker("lib/webworker.js");
      worker.addEventListener('message', function(e) {
        if (e.data) {
          prime.innerHTML = e.data;
        } else {
          worker = null;
        }
      }, false);
      worker.postMessage(300000);
    }
  }, false);

};
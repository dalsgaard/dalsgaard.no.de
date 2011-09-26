
window.onload = function() {
  
  var alpha = document.querySelector("ul.angles > li.alpha");
  var beta = document.querySelector("ul.angles > li.beta");
  var gamma = document.querySelector("ul.angles > li.gamma");
  
  window.addEventListener('deviceorientation', function(event) {
    alpha.innerHTML = Math.round(event.alpha).toString();
    beta.innerHTML = Math.round(event.beta).toString();
    gamma.innerHTML = Math.round(event.gamma).toString();
  }, false);
  
};
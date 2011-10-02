
window.onload = function() {
  
  var setKey = document.querySelector(".set input.key");
  var setValue = document.querySelector(".set input.value");
  document.querySelector(".set button").addEventListener('click', function(e) {
    localStorage.setItem(setKey.value, setValue.value);
  }, false);

  var getKey = document.querySelector(".get input.key");
  var getValue = document.querySelector(".get span.value");
  document.querySelector(".get button").addEventListener('click', function(e) {
    getValue.innerHTML = localStorage.getItem(getKey.value);
  }, false);

  var removeKey = document.querySelector(".remove input.key");
  document.querySelector(".remove button").addEventListener('click', function(e) {
    localStorage.removeItem(removeKey.value);
  }, false);

  document.querySelector(".clear button").addEventListener('click', function(e) {
    localStorage.clear();
  }, false);

  var all = document.querySelector(".all ul");
  document.querySelector(".all button").addEventListener('click', function(e) {
    all.innerHTML = "";
    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      var li = document.createElement('li');
      li.innerHTML = "<span>" + key + "</span>" + "<span>" + localStorage.getItem(key) + "</span>";
      all.appendChild(li);
    }
  }, false);
  
}
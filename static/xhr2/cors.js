
window.onload = function() {
  
  document.querySelector("button.load").addEventListener('click', function() {

    var xhr = new XMLHttpRequest();
    xhr.open('GET', "http://dalsgaard.no.de/xhr2/jp-sup", true);
    xhr.onload = function(e) {
      if (this.status == 200) {
        document.getElementById("content").innerHTML = this.response;
      } else {
        alert(this.statusText);
      }
    };
    xhr.send();

  }, false);
  
};
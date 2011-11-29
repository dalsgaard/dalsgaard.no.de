
window.onload = function() {

  var images = document.querySelector(".images");
  
  document.querySelector("input.single").addEventListener('change', function() {
    var reader = new FileReader();
    reader.onload = function(e) {
      var img = document.createElement('img');
      img.src = e.target.result;
      images.appendChild(img);
    }
    reader.readAsDataURL(this.files[0]);
  }, false);

  document.querySelector("input.multiple").addEventListener('change', function() {
    for (var i = 0; i < this.files.length; i++) {
      var reader = new FileReader();
      reader.onload = function(e) {
        var img = document.createElement('img');
        img.src = e.target.result;
        images.appendChild(img);
      }
      reader.readAsDataURL(this.files[i]);
    }
  }, false);

  images.addEventListener('click', function(e) {
    this.innerHTML = "";
  }, false);
   
}
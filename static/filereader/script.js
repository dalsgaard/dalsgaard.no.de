
window.onload = function() {
  
  document.querySelector("input[type=file]").addEventListener('change', function() {
    var reader = new FileReader();
    reader.onload = function(e) {
      var img = document.createElement('img');
      img.src = e.target.result;
      document.querySelector(".image").appendChild(img);
    }
    reader.readAsDataURL(this.files[0]);
  }, false);
  
}
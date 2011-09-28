
window.onload = function() {
  
  var dropZone = document.querySelector(".drop-zone");

  dropZone.addEventListener('dragenter', function(e) {
    this.classList.add('drag-hover');
  }, false);

  dropZone.addEventListener('dragleave', function(e) {
    this.classList.remove('drag-hover');
  }, false);

  dropZone.addEventListener('dragover', function(e) {
    e.preventDefault();
    return false;
  }, false);

  dropZone.addEventListener('drop', function(e) {
    e.preventDefault();
    e.stopPropagation();
    
    this.classList.remove('drag-hover');
    var files = e.dataTransfer.files;
    for (var i = 0; i < files.length; i++) {
      var reader = new FileReader();
      reader.onload = function(e) {
        var img = document.createElement('img');
        img.src = e.target.result;
        var car = document.createElement('div');
        car.classList.add('car');
        car.appendChild(img);
        dropZone.appendChild(car);
      }
      reader.readAsDataURL(files[i]);
    }
    
    return false;
  }, false);
  
};

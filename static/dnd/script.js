
window.onload = function() {

  var cars = document.querySelectorAll(".car");
  for (var i = 0; i < cars.length; i++) {

    var car = cars[i];
    
    car.addEventListener('dragstart', function(e) {
      this.classList.add('dragging');
      e.dataTransfer.effectAllowed = 'copy';
      e.dataTransfer.setData('text/html', this.innerHTML);
    }, false);

    car.addEventListener('dragend', function(e) {
      this.classList.remove('dragging');      
    }, false);
    
  }
  
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
    var car = document.createElement('div');
    car.classList.add('car');
    car.innerHTML = e.dataTransfer.getData('text/html');
    dropZone.appendChild(car);
    
    return false;
  }, false);
  
};
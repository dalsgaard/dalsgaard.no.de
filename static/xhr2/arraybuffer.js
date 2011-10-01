
window.onload = function() {

  var BlobBuilder = window.MozBlobBuilder || window.WebKitBlobBuilder || window.BlobBuilder
  
  var URL = window.URL || window.webkitURL;
  
  document.querySelector("button.load").addEventListener('click', function() {

    var xhr = new XMLHttpRequest();
    xhr.open('GET', "../images/sup/9-3.jpg", true);
    xhr.responseType = 'arraybuffer';
    xhr.onload = function(e) {
      if (this.status == 200) {
        var builder = new BlobBuilder();
        builder.append(this.response);
        var blob = builder.getBlob('image/jpeg');
        var img = document.createElement('img');
        img.onload = function(e) {
          URL.revokeObjectURL(img.src);
        };
        img.src = URL.createObjectURL(blob);
        document.getElementById("content").appendChild(img);
      } else {
        alert(this.statusText);
      }
    };
    xhr.send();

  }, false);
  
};

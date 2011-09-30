
window.onload = function() {

  var BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder;

  var _5MB = 5*1024*1024;
  var requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;

  requestFileSystem(window.PERSISTENT, _5MB, function(fs) {
    console.log("Opened file system: " + fs.name);
  }, errorHandler);

  var requestFS = function(callback) {
    requestFileSystem(window.PERSISTENT, _5MB, callback, errorHandler);
  };

  /*
  // Create
  requestFS(function(fs) {
    fs.root.getFile("foo.txt", { create: true, exclusive: true }, function(fileEntry) {
      console.log(fileEntry.name);
    }, errorHandler);
  });
  */
  
  /*
  // Write
  requestFS(function(fs) {
    fs.root.getFile("foo.txt", { create: true }, function(fileEntry) {
      fileEntry.createWriter(function(writer) {
        writer.onwriteend = function(e) {
          console.log("Success");
        };
        writer.onerror = function(e) {
          console.log("Error: " + e.toString());
        };
        var builder = new BlobBuilder();
        builder.append("Hesten er et glubsk rovdyr!");
        writer.write(builder.getBlob('text/plain'));
      });
    }, errorHandler);
  });
  */

  /*
  // Read
  requestFS(function(fs) {
    fs.root.getFile("foo.txt", { create: false }, function(fileEntry) {
      var reader = new FileReader();
      reader.onloadstart = function(e) {
        console.log("start");
      };
      reader.onloadend = function(e) {
        alert(this.result);
      };
      fileEntry.file(function(file) {
        reader.readAsText(file);
      });
    }, errorHandler);
  });
  */

};

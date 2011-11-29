
var invert = function(data) {
  for(var i = 0, l = data.width * data.height; i < l; i++) {
      var j = i * 4; 
      data.data[j] = 255 - data.data[j];
      data.data[j + 1] = 255 - data.data[j];
      data.data[j + 2] = 255 - data.data[j];
  }    
};

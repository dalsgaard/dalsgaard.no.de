
window.onload = function() {
  
  var mapstraction = new mxn.Mapstraction("map", 'googlev3');
  var point = new mxn.LatLonPoint(37.7740486, -122.4101883);
  mapstraction.setCenterAndZoom(point, 15);

  function successCallback(position) {
    var point = new mxn.LatLonPoint(position.coords.latitude, position.coords.longitude);
    mapstraction.setCenter(point);
    var marker = new mxn.Marker(point);
    mapstraction.addMarker(marker);
    document.querySelector(".accuracy").innerHTML = position.coords.accuracy;
  }
  function errorCallback(error) {
    alert(error.message + " : " + error.code);
  }
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  
};

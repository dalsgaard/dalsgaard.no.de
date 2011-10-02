
window.onload = function() {
  
  var received = document.querySelector(".received ul");
  var message = document.querySelector(".send textarea");
  var connection = null;
  
  document.querySelector("button.connect").addEventListener('click', function(e) {
    var url = document.querySelector(".server input").value;
    connection = new WebSocket(url);
    connection.onopen = function(e) {
      
    };
    connection.onmessage = function(e) {
      var msg = document.createElement('li');
      msg.classList.add('server');
      msg.innerHTML = e.data;
      received.appendChild(msg);
    };
    connection.onerror = function(e) {
      alert(e)
    };
  }, false);

  document.querySelector("button.send").addEventListener('click', function(e) {
    var msg = document.createElement('li');
    msg.classList.add('client');
    msg.innerHTML = message.value;
    received.appendChild(msg);
    connection.send(message.value);
    message.value = "";
  }, false);

};

window.onload = function() {

  if (window.webkitNotifications.checkPermission() == 2) {
    button.disabled = "disabled";
  }

  var notify = function(title, message) {
      var notification = window.webkitNotifications.createNotification("alert.png", title, message);
      notification.show();    
  }

  var notifyButton = document.querySelector("button.notify");
  notifyButton.addEventListener('click', function() {
    switch (window.webkitNotifications.checkPermission()) {
      case 0:
        notify("Foo", "Bar Baz");
        break;
      case 1:
        window.webkitNotifications.requestPermission(function() {
          if (window.webkitNotifications.checkPermission() == 0) {
            notify("Foo", "Bar Baz");
          } else {
            notifyButton.disabled = "disabled";
          }
        })
        break;  
      case 2:
        notifyButton.disabled = "disabled";
        break;
    }
  }, false);

  var connecting = false;
  var connect = function() {
    connecting = true;    
    connection = new WebSocket("ws://localhost:8325");
    connection.onopen = function(e) {
      notify("WebSocket", "Open!");
    };
    connection.onmessage = function(e) {
      notify("WebSocket", e.data);
    };
    connection.onerror = function(e) {
      notify("WebSocket", e);
    };
  }

  var connectButton = document.querySelector("button.connect");
  connectButton.addEventListener('click', function() {
    if (!connecting) {
      switch (window.webkitNotifications.checkPermission()) {
        case 0:
          connect();
          break;
        case 1:
          window.webkitNotifications.requestPermission(function() {
            if (window.webkitNotifications.checkPermission() == 0) {
              connect();
            } else {
              connectButton.disabled = "disabled";
            }
          })
          break;  
        case 2:
          connectButton.disabled = "disabled";
          break;
      }
    } else {
      
    }
  }, false);
  
};

window.onload = function() {

  if (window.webkitNotifications.checkPermission() == 2) {
    button.disabled = "disabled";
  }

  var notify = function() {
      var notification = window.webkitNotifications.createNotification("alert.png", "Foo", "Bar Baz");
      notification.show();    
  }

  var button = document.querySelector("button.notify");
  button.addEventListener('click', function() {
    switch (window.webkitNotifications.checkPermission()) {
      case 0:
        notify();
        break;
      case 1:
        window.webkitNotifications.requestPermission(function() {
          if (window.webkitNotifications.checkPermission() == 0) {
            notify();
          } else {
            button.disabled = "disabled";
          }
        })
        break;  
      case 2:
        button.disabled = "disabled";
        break;
    }
  }, false);
  
};
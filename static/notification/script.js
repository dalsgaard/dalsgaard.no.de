
window.onload = function() {

  if (window.webkitNotifications) {
    console.log("Notifications are supported!");
    if (window.webkitNotifications.checkPermission() == 0) {
      console.log("Permissions OK!");
    }
  }
  else {
    console.log("Notifications are not supported for this Browser/OS version yet.");
  }

  document.querySelector("button.allow").addEventListener('click', function() {
    if (window.webkitNotifications.checkPermission() == 0) {
      console.log("Permissions OK!");
    } else {
      window.webkitNotifications.requestPermission();
    }
  }, false);

  document.querySelector("button.notify").addEventListener('click', function() {
    if (window.webkitNotifications.checkPermission() == 0) {
      var notification = window.webkitNotifications.createNotification("alert.png", "Foo", "Bar Baz");
      notification.show();
    } else {
      console.log("Please allow notifications");
    }
  }, false);
  
};
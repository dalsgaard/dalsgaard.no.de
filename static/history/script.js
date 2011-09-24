
window.onload = function() {

  var content = document.getElementById("content");

  var loadPage = function(href) {
    var req = new XMLHttpRequest();
    req.open('GET', href, false);
    req.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    req.send(null);
    if (req.status == 200) {
      content.innerHTML = req.responseText;
      return true;
    } else {
      return false;
    }
  }

  var boards = document.querySelectorAll("ul.boards > li > a");
  [].forEach.call(boards, function(board) {
    board.addEventListener('click', function(e) {
      var href = e.target.href;
      if (loadPage(href)) {
        history.pushState(null, null, href);        
      } else {
        alert("Error");
      }
      e.preventDefault();
    }, false);
  });

  window.addEventListener('popstate', function(e) {
    loadPage(location.pathname);
  });

};

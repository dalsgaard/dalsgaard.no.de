
window.onload = function() {

  var content = document.getElementById("content");

  var loadPage = function(href) {
    var req = new XMLHttpRequest();
    req.open('GET', href, false);
    req.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    req.send(null);
    if (req.status == 200) {
      content.innerHTML = req.responseText;
      attachLinks();
      return true;
    } else {
      return false;
    }
  }

  var attachLinks = function() {
    var chapters = document.querySelectorAll("#content a");
    [].forEach.call(chapters, function(chapter) {
      chapter.addEventListener('click', function(e) {
        var href = e.target.href;
        if (loadPage(href)) {
          history.pushState(null, null, href);
        } else {
          alert("Error");
        }
        e.preventDefault();
      }, false);
    });    
  }

  attachLinks();        

  window.addEventListener('popstate', function(e) {
    loadPage(location.pathname);
  });

};

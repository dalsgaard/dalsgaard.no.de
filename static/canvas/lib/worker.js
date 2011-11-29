
importScripts('invert.js');

self.addEventListener('message', function(e) {
  invert(e.data);
  self.postMessage(e.data);
}, false);

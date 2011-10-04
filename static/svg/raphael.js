
window.onload = function() {
  
  var paper = Raphael(document.querySelector("section.paper"), 400, 400);

  var circle = paper.circle(200, 200, 100);
  circle.attr('fill', "#66F");
  circle.attr('stroke', "#000");

  var rect = paper.rect(10, 10, 180, 140);
  rect.attr('fill', "#F66");
  rect.attr('stroke', "#000");
  rect.attr('opacity', 0.7);
  
  circle.click(function() {
    alert("Circle!");
  });

  rect.click(function() {
    alert("Rect!");
  });
  
};
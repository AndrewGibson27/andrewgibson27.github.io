(function() {
  var colors = ["#4f4fc3", "#5f0f5f", "#7297d0", "#0c2977"];
  var html = document.documentElement;
  var currIndex = 0;

  function changeColor() {
    currIndex += 1;

    if (currIndex === colors.length) {
      currIndex = 0;
    }

    html.style.borderTopColor = colors[currIndex];
  }

  changeColor();

  setInterval(changeColor, 6000);
})();

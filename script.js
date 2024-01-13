var availableColors = ["red","green","cyan","black","violet","blue","yellow","purple","orange","lightgreen","lemon",];
  var colorIndex = 0;
  var isTriangleShape = false;
  
  var shapeChangeButton = document.getElementById("change-shape");
  var colorChangeButton = document.getElementById("change-color");
  
  shapeChangeButton.addEventListener("click", changeShape);
  colorChangeButton.addEventListener("click", changeColor);
  
  function changeColor() {
    if (colorIndex === availableColors.length) {
      colorIndex = 0;
    }
    document.getElementById("circle").style.backgroundColor = availableColors[colorIndex];
    colorIndex++;
  }
  
  function changeShape() {
    var innerElement = document.querySelector(isTriangleShape ? ".triangle-bottom-left" : ".inner");
    innerElement.className = isTriangleShape ? "inner" : "triangle-bottom-left";
    isTriangleShape = !isTriangleShape;
  }
  
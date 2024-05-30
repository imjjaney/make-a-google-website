var bodycolor = document.querySelector("body");
var button = document.querySelector(".btn");

var color = ["red", "orange", "pink", "blue", "green", "purple"]

button.addEventListener("click", changeColor);

function changeColor() {
  var num = Math.floor(Math.random() * color.length);
  var colorSelected = color[num];
  console.log(colorSelected);

  bodycolor.style.backgroundColor = colorSelected;
}
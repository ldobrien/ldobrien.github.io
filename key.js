
function changeColorWhenEnter(e) {
  if (e.keyCode == 13) {
    changeColor();
  }
}
function changeColor(){
  var color = document.getElementById("color").value;
  document.body.style.background = color;
}
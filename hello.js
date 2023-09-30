// function for random color
function randomColor() {
  const random = Math.round(Math.random() * 256);
  const color = `rgb(${random},${random},${random})`;
  return color;
}
const bgColor = randomColor();
console.log(bgColor);

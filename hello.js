let sirial = 0;

// function for random color
function randomColor() {
  const random = Math.round(Math.random() * 256);
  const random2 = Math.round(Math.random() * 250);
  const random3 = Math.round(Math.random() * 200);
  const color = `rgb(${random},${random2},${random3})`;
  return color;
}
// function for create result
function displayResult(value1, value2, value3) {
  const result = document.getElementById('result');
  const tr = document.createElement('tr');
  tr.innerHTML = `
  <td> ${value1} </td>
  <td> ${value2} </td>
  <td> ${value3} cm </td>
  <td><button class="px-2 text-white py-1 bg-blue-500 rounded-md">ConvertTo m<sup>2</sup></button></td>
  `;
  result.appendChild(tr);
}
// function for get the value of inner
function getInnerText(id) {
  const innerfield = document.getElementById(id).innerText;

  return innerfield;
}
// function for  get value in the input field
function getInputValue(id) {
  const inputField = document.getElementById(id).value;
  const inputValue = parseFloat(inputField);
  return inputValue;
}
// mouse enter event for bg color change
const cards = document.getElementsByClassName('card');
for (const card of cards) {
  card.addEventListener('mouseenter', () => {
    const color = randomColor();
    card.style.backgroundColor = color;
    card.style.color = 'white';
  });
}
// trangle section
document.getElementById('tBtn').addEventListener('click', () => {
  sirial += 1;
  const name = getInnerText('tText');
  const b = getInputValue('tInput1');
  const h = getInputValue('tInput2');
  const total = 0.5 * b * h;
  displayResult(sirial, name, total);
});

// rectangle section
document.getElementById('rBtn').addEventListener('click', () => {
  sirial += 1;
  const name = getInnerText('rText');
  const w = getInputValue('rInput1');
  const l = getInputValue('rInput2');
  const total = w * l;
  displayResult(sirial, name, total);
});

// Parallelogram section
document.getElementById('pBtn').addEventListener('click', () => {
  sirial += 1;
  const name = getInnerText('pText');
  const w = getInnerText('pValue1');
  const l = getInnerText('pValue2');
  const total = parseFloat(w) * parseFloat(l);
  displayResult(sirial, name, total);
});
// rombosh section
document.getElementById('romBtn').addEventListener('click', () => {
  sirial += 1;
  const name = getInnerText('romText');
  const w = getInnerText('romValue1');
  const l = getInnerText('romValue2');
  const total = 0.5 * parseFloat(w) * parseFloat(l);
  displayResult(sirial, name, total);
});
// pentagon section
document.getElementById('penBtn').addEventListener('click', () => {
  sirial += 1;
  const name = getInnerText('penText');
  const w = getInnerText('penValue1');
  const l = getInnerText('penValue2');
  const total = 0.5 * parseFloat(w) * parseFloat(l);
  displayResult(sirial, name, total);
});
// ellipis section
document.getElementById('eBtn').addEventListener('click', () => {
  sirial += 1;
  const name = getInnerText('eText');
  const w = getInnerText('eValue1');
  const l = getInnerText('eValue2');
  const totalValue = 3.1416 * parseFloat(w) * parseFloat(l);
  const totalStValue = totalValue.toFixed(2);
  const total = parseFloat(totalStValue);
  displayResult(sirial, name, total);
});

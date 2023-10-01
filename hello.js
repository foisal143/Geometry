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
// function for set innerText
function setInnerText(id, value) {
  const innerField = document.getElementById(id);
  innerField.innerText = value;
}
// function for  get value in the input field
function getInputValue(id) {
  const inputField = document.getElementById(id).value;
  const inputValue = parseFloat(inputField);
  return inputValue;
}
// function for input validation
function getinputValueString(id) {
  const inputField = document.getElementById(id).value;

  return inputField;
}
// mouse enter event for bg color change
const cards = document.getElementsByClassName('card');
for (const card of cards) {
  card.addEventListener('mouseover', () => {
    const color = randomColor();
    card.style.backgroundColor = color;
    card.style.color = 'white';
  });
}
// mouse
for (const card of cards) {
  card.addEventListener('mouseout', () => {
    const color = randomColor();
    card.style.backgroundColor = 'white';
    card.style.color = 'black';
  });
}
// trangle section
document.getElementById('tBtn').addEventListener('click', () => {
  const name = getInnerText('tText');
  const b = getInputValue('tInput1');
  const h = getInputValue('tInput2');
  const inputValue1 = getinputValueString('tInput1');

  const inputValue2 = getinputValueString('tInput2');

  if (
    inputValue1 === '' ||
    inputValue2 === '' ||
    isNaN(inputValue1) ||
    isNaN(inputValue2) ||
    inputValue1 < 0 ||
    inputValue2 < 0
  ) {
    return alert('please input a valid number');
  }
  sirial += 1;
  const total = 0.5 * b * h;
  displayResult(sirial, name, total);
});

// rectangle section
document.getElementById('rBtn').addEventListener('click', () => {
  const name = getInnerText('rText');
  const w = getInputValue('rInput1');
  const l = getInputValue('rInput2');
  const inputValue1 = getinputValueString('rInput1');

  const inputValue2 = getinputValueString('rInput2');

  if (
    inputValue1 === '' ||
    inputValue2 === '' ||
    isNaN(inputValue1) ||
    isNaN(inputValue2) ||
    inputValue1 < 0 ||
    inputValue2 < 0
  ) {
    return alert('please input a valid number');
  }
  sirial += 1;
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
// parallelogramInput section
document.getElementById('pShowBtn').addEventListener('click', () => {
  const parallelogramInput = document.getElementById('parallelogramInput');
  parallelogramInput.style.display = 'block';
});
// parallelogramInput value add section
document.getElementById('addPValue').addEventListener('click', () => {
  const value1 = getInputValue('pInput1');
  const value2 = getInputValue('pInput2');
  const inputValue1 = getinputValueString('pInput1');

  const inputValue2 = getinputValueString('pInput2');

  if (
    inputValue1 === '' ||
    inputValue2 === '' ||
    isNaN(inputValue1) ||
    isNaN(inputValue2) ||
    inputValue1 < 0 ||
    inputValue2 < 0
  ) {
    return alert('please input a valid number');
  }

  setInnerText('pValue1', value1);
  setInnerText('pValue2', value2);
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
// rombosh Input section
document.getElementById('romShowBtn').addEventListener('click', () => {
  const romboshInput = document.getElementById('romboshInput');
  romboshInput.style.display = 'block';
});
// rombosh value add section
document.getElementById('addRValue').addEventListener('click', () => {
  const value1 = getInputValue('romInput1');
  const value2 = getInputValue('romInput2');
  const inputValue1 = getinputValueString('romInput1');

  const inputValue2 = getinputValueString('romInput2');

  if (
    inputValue1 === '' ||
    inputValue2 === '' ||
    isNaN(inputValue1) ||
    isNaN(inputValue2) ||
    inputValue1 < 0 ||
    inputValue2 < 0
  ) {
    return alert('please input a valid number');
  }

  setInnerText('romValue1', value1);
  setInnerText('romValue2', value2);
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
// pentagon show input section

document.getElementById('penShowBtn').addEventListener('click', () => {
  const pentInput = document.getElementById('pentagonShowInput');
  pentInput.style.display = 'block';
});
// parallelogramInput value add section
document.getElementById('addPenValue').addEventListener('click', () => {
  const value1 = getInputValue('pentInput1');
  const value2 = getInputValue('pentInput2');
  const inputValue1 = getinputValueString('pentInput1');

  const inputValue2 = getinputValueString('pentInput2');

  if (
    inputValue1 === '' ||
    inputValue2 === '' ||
    isNaN(inputValue1) ||
    isNaN(inputValue2) ||
    inputValue1 < 0 ||
    inputValue2 < 0
  ) {
    return alert('please input a valid number');
  }

  setInnerText('penValue1', value1);
  setInnerText('penValue2', value2);
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

// elllpis input show section
document.getElementById('eShowBtn').addEventListener('click', () => {
  const pentInput = document.getElementById('lastShowInput');
  pentInput.style.display = 'block';
});
// parallelogramInput value add section
document.getElementById('addLastValue').addEventListener('click', () => {
  const value1 = getInputValue('lastInput1');
  const value2 = getInputValue('lastInput2');
  const inputValue1 = getinputValueString('lastInput2');

  const inputValue2 = getinputValueString('lastInput2');

  if (
    inputValue1 === '' ||
    inputValue2 === '' ||
    isNaN(inputValue1) ||
    isNaN(inputValue2) ||
    inputValue1 < 0 ||
    inputValue2 < 0
  ) {
    return alert('please input a valid number');
  }

  setInnerText('eValue1', value1);
  setInnerText('eValue2', value2);
});

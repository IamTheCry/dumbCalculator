// dumb calculator

function add() {
  console.log('add invoked')
  document.getElementById("result").value = (document.getElementById('value1').value + document.getElementById('value2').value);
};

function subtract() {
  console.log('subtract invoked')
  document.getElementById("result").value = (document.getElementById('value1').value - document.getElementById('value2').value);
};

function divide() {
  console.log('divide invoked')
  document.getElementById("result").value = (document.getElementById('value1').value / document.getElementById('value2').value);
};

function multiply() {
  console.log('multiply invoked')
  document.getElementById("result").value = (document.getElementById('value1').value * document.getElementById('value2').value);
};

// --- DOM Elements


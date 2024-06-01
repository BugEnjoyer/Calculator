
let operator = null;
let num1 = 10;
let num2 = 20;

function add ( num1, num2 ) {
  return num1 + num2;
}

function subtract ( num1, num2 ) {
  return num1 - num2;
}

function multiply ( num1, num2 ) {
  return num1*num2;
}

function divide ( num1, num2 ) {
  return num1 / num2;
}

function operate(num1, op, num2) {
  if ( op === '+') {
    return add( num1, num2 );
  } else if ( op === '-') {
    return subtract( num1, num2 );
  }else if ( op === '*') {
    return multiply( num1, num2 );
  }else if ( op === '/') {
    return divide ( num1, num2 );
  }else if ( op === 0 ) {
    return;
  }
};

const opButton = document.querySelectorAll('.operator-button');
 opButton.forEach( button => {
  button.addEventListener('click', event => {
    operator = event.target.textContent; 
    updateDisplay();
  });
 });

 let display = document.querySelector('.display-container');
 function updateDisplay() {
  display.innerText = `${operator}`;
 }
 updateDisplay();
 console.log(operate(num1,'+',num2));

const numberButtons = document.querySelectorAll('.value-button');
numberButtons.forEach( button => {
  button.addEventListener('click', event => {
    if ( operator === null ) {
      num1 += button.innerText;
    }
  });
});
 
 
 

let operator = '';
let num1 = '';
let num2 = '';
let currentValue = '';

function add ( num1, num2, currentValue ) {
  if ( currentValue !== '' ) {
    currentValue += Number(num2);
    return currentValue;
  }else{
  currentValue = Number(num1) + Number(num2);
  }
  return currentValue;
}

function subtract ( num1, num2 ) {
  if ( currentValue !== '' ) {
    currentValue -= Number(num2);
    return currentValue;
  }else {
    currentValue = Number(num1) - Number(num2);
  }
  return currentValue;
}

function multiply ( num1, num2 ) {
  if ( currentValue !== '' ) {
    currentValue *= Number(num2);
    return currentValue;
  }else {
    currentValue = Number(num1) * Number(num2);
  }
  return currentValue;
}

function divide ( num1, num2 ) {
  if ( currentValue !== '' ) {
    currentValue /= Number(num2);
    return currentValue;
  }else {
    currentValue = Number(num1) / Number(num2);
  }
  return currentValue;
}

function getPercentage( num1, num2 ) {
  if ( currentValue !== '' ) {
    currentValue /= Number(num2);
    return currentValue;
  }else {
    currentValue = Number((num1) / 100 ) * Number(num2);
  }
  return currentValue;
}

function operate(num1, op, num2, currentValue ) {
  if ( op === '+') {
    return add( num1, num2, currentValue );
  } else if ( op === '-') {
    return subtract( num1, num2, currentValue );
  }else if ( op === '*') {
    return multiply( num1, num2, currentValue );
  }else if ( op === '/') {
    return divide ( num1, num2, currentValue );
  }else if ( op === '%' ) {
    return getPercentage(num1, num2, currentValue );
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
  if ( currentValue === '') {
  display.textContent = num1 + `${operator}` + num2;
  }else if( currentValue !== '') {
    display.textContent = currentValue + operator + num2;
  }
 }
 updateDisplay();

const numberButtons = document.querySelectorAll('.value-button');
numberButtons.forEach( button => {
  button.addEventListener('click', event => {
    if ( operator === '' ) {
      num1 += event.target.textContent;
      updateDisplay();
      console.log ( num1 );
    }else if ( operator !== '' ) {
      num2 += event.target.textContent;
      updateDisplay();
      console.log( num2 );
    }
  });
});
 
const calc= document.querySelector('.calculate-button');
calc.addEventListener('click', () => {
  doCalculate();
  updateDisplay();
  console.log(currentValue);
});
//currentValue = operate(....) already here becouse otherwise updateDisplay can't use currentValue.
function doCalculate() {
  if ( currentValue === '' && num2 !== '' ) {
    currentValue = operate(num1,operator,num2, currentValue );
    operator = '';
    num2 = '';
    num1 = '';
  }else if ( currentValue !== '') {
    currentValue = operate(num1,operator,num2, currentValue );
    operator = '';
    num2 = '';
    num1 = '';
  }
}



 
 
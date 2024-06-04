let operator = '';
let num1 = '';
let num2 = '';
let currentValue = '';

// I would have to add every math operation a *100 for each number and at the end a /100 for perfect math
// becouse JavaScript uses binary numbers for math which can lead to slightly different numbers. 
// But becouse it is just a small project for my own and not a calculator other people have to
// use seriously later this step is missing here.
function add ( num1, num2, currentValue ) {
  if ( currentValue !== '' ) {
    currentValue = Number(currentValue);
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
    currentValue /= 100;
    currentValue *= Number(num2);
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
   content = num1 + operator +num2;
   content2 = currentValue + operator +num2;
  if ( currentValue === '') {
  display.textContent = content.slice(0,20);
  }else if( currentValue !== '') {
    display.textContent = content2.slice(0,20);
  }
 }

 updateDisplay();

const numberButtons = document.querySelectorAll('.value-button');
numberButtons.forEach( button => {
  button.addEventListener('click', event => {
    if ( operator === '' ) {
      num1 += event.target.textContent;
      updateDisplay();
    }else if ( operator !== '' ) {
      num2 += event.target.textContent;
      updateDisplay();
    }
  });
});

const dotButton = document.querySelector('.dot-button');
dotButton.addEventListener('click', event => {
  if ( operator === '' && num1.includes(".") === false ) {
    num1 += event.target.textContent;
    updateDisplay();
  }else if ( operator !== '' && num2.includes(".") === false ) {
    num2 += event.target.textContent;
  }
});
// Changing positive numbers to negative numbers and the opposite if button get clicked.
const plusMinus = document.querySelector('.plus-minus-button');
plusMinus.addEventListener('click', () => {
  if ( num1 > 0 ) {
    num1 = '-' + num1;
    updateDisplay();
  }else if ( num1 < 0 ) {
    num1 = num1 * -1;
    updateDisplay();
  }else if ( currentValue < 0 ) {
    currentValue = currentValue * -1;
    updateDisplay();
  }else if ( currentValue > 0 ) {
    currentValue = '-' + currentValue;
    updateDisplay();
  }
});

// A long if statement for the click event from the "one digit clear button".
// So that always the right digit get deleted. 

const ceButton = document.querySelector('.ce-button');
ceButton.addEventListener('click', () => {
  if ( currentValue !== '' && operator === '') {
      let array_currentValue = [ ...currentValue.toString()];
      array_currentValue.splice(-1);
      currentValue = array_currentValue.join("");
      Number(currentValue);
    updateDisplay();
  } else if ( currentValue !== '' && operator !== '' && num2 === '' ) {
      operator = '';
      updateDisplay();
  } else if ( currentValue !== '' && num2 !== '') {
      let array_num2 = [ ...num2.toString()];
      array_num2.splice(-1);
      num2 = array_num2.join("");
      updateDisplay();
  } else if ( num1 !== '' && operator === '' ) {
      let array_num1 = [ ...num1.toString()];
      array_num1.splice(-1);
      num1 = array_num1.join("");
      updateDisplay();
  } else if ( num1 !== '' && operator !== '' && num2 === '' ) {
    operator = '';
    updateDisplay();
  } else if ( num1 !== '' && num2 !== '') {
    let array_num2 = [ ...num2.toString()];
    array_num2.splice(-1);
    num2 = array_num2.join("");
    updateDisplay();
  }
});

const clearButton = document.querySelector('.clear-button');
clearButton.addEventListener('click', () => {
  operator = '';
  num1 = '';
  num2 = '';
  currentValue = '';
  updateDisplay();
});
 
const calc= document.querySelector('.calculate-button');
calc.addEventListener('click', () => {
  doCalculate();
  updateDisplay();
});
// currentValue = operate(....) already here becouse otherwise updateDisplay can't use currentValue.
function doCalculate() {
  if ( currentValue === '' && num2 !== '' ) {
    currentValue = operate(num1,operator,num2, currentValue );
    operator = '';
    num2 = '';
    num1 = '';
  }else if ( currentValue !== '' && num2 !== '' ) {
    currentValue = operate(num1,operator,num2, currentValue );
    operator = '';
    num2 = '';
    num1 = '';
  }
}



 
 
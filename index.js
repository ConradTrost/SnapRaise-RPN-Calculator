// 1. If a value appears next in the expression, push this value on to the stack.

// 2. If an operator appears next, pop two items from the top of the stack and push the result of the operation on to the stack.

// A standard infix arithmetic expression can be converted to an RPN expression using a parsing algorithm as a recursive descent parse.

var readline = require('readline');

const calcArr = [];

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

let e1 = 0;
let e2 = 0;

const removeNumbersFromArr = () => {
    calcArr.pop();
    calcArr.pop();
}

rl.on('line', function(line){

    e1 = calcArr[calcArr.length - 2];
    e2 = calcArr[calcArr.length - 1];

    if (line == '+') {
        removeNumbersFromArr();
        line = e1 + e2;
    } else if (line == '-') {
        removeNumbersFromArr();
        line = e1 - e2;
    } else if (line == '*') {
        removeNumbersFromArr();
        line = e1 * e2;
    } else if (line == '/') {
        removeNumbersFromArr();
        line = e1 / e2;
    } else if (line == 'q') {
        rl.close();
    }
    
    if ((isNaN(line) || line == '') && line != 'q')  {
        console.log('Please enter a number');
    } else {
        line = parseInt(line, 10);
        calcArr.push(line);
        console.log(line);
        console.log(calcArr);
    }
})
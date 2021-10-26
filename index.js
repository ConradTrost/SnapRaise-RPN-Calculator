// 1. If a value appears next in the expression, push this value on to the stack.

// 2. If an operator appears next, pop two items from the top of the stack and push the result of the operation on to the stack.

// A standard infix arithmetic expression can be converted to an RPN expression using a parsing algorithm as a recursive descent parse.

// RPN is used in Hewlett Packard and some Texas Instruments calculators and internally in some computer languages.

var readline = require('readline');

const calcArr = [];

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', function(line){
    if ((isNaN(line) || line == '') && line != '+' && line != '-' && line != '*' && line != '/' && line != 'q') {
        console.log('Please enter a number');
    } else if (line == 'q') {
        rl.close();
    } else {
        calcArr.push(line);
        console.log(line);
        console.log(calcArr);
    }
})
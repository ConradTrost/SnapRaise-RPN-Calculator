var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

// Add more operators here
const operators = ['+', '-', '*', '/'];

let calcArr = [];
let e1 = 0;
let e2 = 0;

const removeNumbersFromArr = () => {
    calcArr.pop();
    calcArr.pop();
}

rl.on('line', function(line){

    line = line.split(' ');

    line.forEach(entry => {
        e1 = calcArr[calcArr.length - 2];
        e2 = calcArr[calcArr.length - 1];

        // If entry is an operator, Apply the operation
        if (operators.indexOf(entry) !== -1) {
            removeNumbersFromArr();
            entry = eval(`${e1} ${entry} ${e2}`);
        }

        // if (entry == '+') {
        //     removeNumbersFromArr();
        //     entry = e1 + e2;
        // } else if (entry == '-') {
        //     removeNumbersFromArr();
        //     entry = e1 - e2;
        // } else if (entry == '*') {
        //     removeNumbersFromArr();
        //     entry = e1 * e2;
        // } else if (entry == '/') {
        //     removeNumbersFromArr();
        //     entry = e1 / e2;
        // } else if (entry == 'q') {
        //     rl.close();
        // }

        console.log(entry);
        
        if ((isNaN(entry) || entry == '') && entry != 'q')  {
            console.log('Please enter a number');
        } else {
            entry = parseFloat(entry);
            calcArr = calcArr.concat(entry);
            console.log(calcArr);
        }
    })
})
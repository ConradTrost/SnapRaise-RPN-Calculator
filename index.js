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

// Remove 2 previous entries after math has been applied
const removeNumbersFromArr = () => {
    calcArr.pop();
    calcArr.pop();
}

// Reads input from CLI
rl.on('line', function(input){

    // Added for cases where entire calculation is provided in single line, i.e. `3 5 9 + /`
    input = input.split(' ');

    input.forEach(entry => {
        e1 = calcArr[calcArr.length - 2];
        e2 = calcArr[calcArr.length - 1];

        // If entry is an operator, Apply the operation
        if (operators.indexOf(entry) !== -1) {
            removeNumbersFromArr();
            entry = eval(`${e1} ${entry} ${e2}`);
        }
        
        if ((isNaN(entry) || entry == '') && entry != 'q')  {
            console.log('Please enter a number');
        } else if (entry == 'q') {
            rl.close();
        } else {
            entry = parseFloat(entry);
            calcArr = calcArr.concat(entry);
        }
    });

    console.log(calcArr);
})

const welcomeMessage = () => {
    console.log(`
    Welcome to Reverse Polish Notation Calculator \n
    Enter 'q' or 'CTRL+D' to exit \n
    Developed by Conrad Trost for Snap! Raise \n\n
    Start by entering a number!
    `);
}

welcomeMessage();
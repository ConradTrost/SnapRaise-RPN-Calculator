# CLI Reverse Polish Notation Calculator
[Exercise Link](https://gist.github.com/dennisbaskin/5979ff6a0d8c1e90b59d060155862767)

### Description

This is a Reverse Polish Notation Calculator that takes user input from the command line and returns the calculated value.

Currently supports `+, -, *, /` operators.

Built with Javascript, and running on Node.js.

I used Javascript for this project because it is my most comfortable/primary language, and I chose Node.js since I am previously experienced using it for CLI usage.

### What I might add

If I spent more time on this project, I would add a frontend to extend use towards less tech-savvy folk. I would include testing and peer-review to insure the code is unbreakable. I would have also considered using TypeScript for this project to ensure no errors.

### Installation

Make sure to have [Node.js](https://nodejs.org/en/download/) installed. 

This project includes no dependencies. Simply clone the repository and open the directory from the command line.

### Usage

To use, from the command-line in the root directory, run `node index`. This will start the calculator.

Input can be in the form of `3 5 9 + /` or:

```
> 3
> 5
> 9
> +
> /
```


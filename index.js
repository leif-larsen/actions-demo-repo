const calculator = require('./calculator');

console.log('Calculator Demo Application');
console.log('===========================\n');

// Demonstrate various calculator operations
console.log('Addition: 5 + 3 =', calculator.add(5, 3));
console.log('Subtraction: 10 - 4 =', calculator.subtract(10, 4));
console.log('Multiplication: 6 * 7 =', calculator.multiply(6, 7));
console.log('Division: 20 / 4 =', calculator.divide(20, 4));
console.log('Power: 2^8 =', calculator.power(2, 8));
console.log('Square Root: √16 =', calculator.sqrt(16));
console.log('Modulo: 17 % 5 =', calculator.modulo(17, 5));
console.log('Absolute Value: |-42| =', calculator.abs(-42));

console.log('\nCalculator operations completed successfully!');

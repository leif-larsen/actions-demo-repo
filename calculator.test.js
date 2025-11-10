const calculator = require('./calculator');

describe('Calculator', () => {
  describe('add', () => {
    test('adds two positive numbers', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    test('adds positive and negative numbers', () => {
      expect(calculator.add(5, -3)).toBe(2);
    });

    test('adds two negative numbers', () => {
      expect(calculator.add(-2, -3)).toBe(-5);
    });

    test('adds zero', () => {
      expect(calculator.add(5, 0)).toBe(5);
    });

    test('adds decimal numbers', () => {
      expect(calculator.add(1.5, 2.5)).toBe(4);
    });
  });

  describe('subtract', () => {
    test('subtracts two positive numbers', () => {
      expect(calculator.subtract(5, 3)).toBe(2);
    });

    test('subtracts negative from positive', () => {
      expect(calculator.subtract(5, -3)).toBe(8);
    });

    test('subtracts positive from negative', () => {
      expect(calculator.subtract(-5, 3)).toBe(-8);
    });

    test('subtracts zero', () => {
      expect(calculator.subtract(5, 0)).toBe(5);
    });

    test('subtracts decimal numbers', () => {
      expect(calculator.subtract(5.5, 2.5)).toBe(3);
    });
  });

  describe('multiply', () => {
    test('multiplies two positive numbers', () => {
      expect(calculator.multiply(4, 5)).toBe(20);
    });

    test('multiplies positive and negative numbers', () => {
      expect(calculator.multiply(4, -5)).toBe(-20);
    });

    test('multiplies two negative numbers', () => {
      expect(calculator.multiply(-4, -5)).toBe(20);
    });

    test('multiplies by zero', () => {
      expect(calculator.multiply(5, 0)).toBe(0);
    });

    test('multiplies decimal numbers', () => {
      expect(calculator.multiply(2.5, 4)).toBe(10);
    });
  });

  describe('divide', () => {
    test('divides two positive numbers', () => {
      expect(calculator.divide(10, 2)).toBe(5);
    });

    test('divides positive by negative', () => {
      expect(calculator.divide(10, -2)).toBe(-5);
    });

    test('divides negative by positive', () => {
      expect(calculator.divide(-10, 2)).toBe(-5);
    });

    test('divides decimal numbers', () => {
      expect(calculator.divide(7.5, 2.5)).toBe(3);
    });

    test('throws error when dividing by zero', () => {
      expect(() => calculator.divide(5, 0)).toThrow('Division by zero is not allowed');
    });
  });

  describe('power', () => {
    test('calculates power of positive numbers', () => {
      expect(calculator.power(2, 3)).toBe(8);
    });

    test('calculates power with exponent 0', () => {
      expect(calculator.power(5, 0)).toBe(1);
    });

    test('calculates power with exponent 1', () => {
      expect(calculator.power(5, 1)).toBe(5);
    });

    test('calculates power with negative exponent', () => {
      expect(calculator.power(2, -2)).toBe(0.25);
    });

    test('calculates power with decimal base', () => {
      expect(calculator.power(2.5, 2)).toBe(6.25);
    });
  });

  describe('sqrt', () => {
    test('calculates square root of positive number', () => {
      expect(calculator.sqrt(16)).toBe(4);
    });

    test('calculates square root of zero', () => {
      expect(calculator.sqrt(0)).toBe(0);
    });

    test('calculates square root of decimal number', () => {
      expect(calculator.sqrt(6.25)).toBe(2.5);
    });

    test('throws error for negative number', () => {
      expect(() => calculator.sqrt(-4)).toThrow('Cannot calculate square root of negative number');
    });
  });

  describe('modulo', () => {
    test('calculates modulo of two positive numbers', () => {
      expect(calculator.modulo(10, 3)).toBe(1);
    });

    test('calculates modulo with zero remainder', () => {
      expect(calculator.modulo(10, 5)).toBe(0);
    });

    test('calculates modulo of negative number', () => {
      expect(calculator.modulo(-10, 3)).toBe(-1);
    });

    test('throws error when modulo by zero', () => {
      expect(() => calculator.modulo(5, 0)).toThrow('Modulo by zero is not allowed');
    });
  });

  describe('abs', () => {
    test('returns absolute value of positive number', () => {
      expect(calculator.abs(5)).toBe(5);
    });

    test('returns absolute value of negative number', () => {
      expect(calculator.abs(-5)).toBe(5);
    });

    test('returns absolute value of zero', () => {
      expect(calculator.abs(0)).toBe(0);
    });

    test('returns absolute value of decimal number', () => {
      expect(calculator.abs(-3.5)).toBe(3.5);
    });
  });
});

const Calculator = require('./calculator');

describe('Calculator Basic Operations', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    test('should add two numbers correctly', () => {
        expect(calculator.add(2, 3)).toBe(5);
    });

    test('should subtract two numbers correctly', () => {
        expect(calculator.subtract(5, 3)).toBe(2);
    });

    test('should multiply two numbers correctly', () => {
        expect(calculator.multiply(4, 3)).toBe(12);
    });

    test('should divide two numbers correctly', () => {
        expect(calculator.divide(10, 2)).toBe(5);
    });

    test('should throw error when dividing by zero', () => {
        expect(() => calculator.divide(10, 0)).toThrow('Division by zero');
    });
});

describe('Calculator State Management', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    test('should initialize with empty state', () => {
        expect(calculator.currentOperand).toBe('');
        expect(calculator.previousOperand).toBe('');
        expect(calculator.operation).toBeUndefined();
    });

    test('should append numbers correctly', () => {
        calculator.appendNumber(1);
        calculator.appendNumber(2);
        expect(calculator.currentOperand).toBe('12');
    });

    test('should prevent multiple decimal points', () => {
        calculator.appendNumber('.');
        calculator.appendNumber(5);
        calculator.appendNumber('.');
        expect(calculator.currentOperand).toBe('0.5'); // Assuming leading zero addition
    });

    test('should clear current operand', () => {
        calculator.appendNumber(123);
        calculator.clear();
        expect(calculator.currentOperand).toBe('');
        expect(calculator.previousOperand).toBe('');
        expect(calculator.operation).toBeUndefined();
    });

    test('should delete last digit', () => {
        calculator.appendNumber(123);
        calculator.delete();
        expect(calculator.currentOperand).toBe('12');
    });
});

describe('Calculator Computation Logic', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    test('should choose operation', () => {
        calculator.appendNumber(1);
        calculator.chooseOperation('+');
        expect(calculator.operation).toBe('+');
        expect(calculator.previousOperand).toBe('1');
        expect(calculator.currentOperand).toBe('');
    });

    test('should compute addition correctly', () => {
        calculator.appendNumber(1);
        calculator.chooseOperation('+');
        calculator.appendNumber(2);
        calculator.compute();
        expect(calculator.currentOperand).toBe(3);
    });

    test('should compute chain operations', () => {
        calculator.appendNumber(1);
        calculator.chooseOperation('+');
        calculator.appendNumber(2);
        calculator.chooseOperation('-');
        expect(calculator.currentOperand).toBe('');
        expect(calculator.previousOperand).toBe(3);
        expect(calculator.operation).toBe('-');
    });

    test('should not compute if incomplete', () => {
        calculator.appendNumber(1);
        calculator.compute();
        expect(calculator.currentOperand).toBe('1');
    });

    test('should calculate percentage', () => {
        calculator.appendNumber(50);
        calculator.percent();
        expect(calculator.currentOperand).toBe(0.5);
    });
});


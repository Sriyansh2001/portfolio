import React, { useState } from 'react';
import './calculator.scss';

export default function Calculator() {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [newNumber, setNewNumber] = useState(true);

  // Handle number button clicks
  const handleNumberClick = (num: string) => {
    if (newNumber) {
      setDisplay(num);
      setNewNumber(false);
    } else {
      setDisplay(display === '0' ? num : display + num);
    }
  };

  // Handle decimal point
  const handleDecimal = () => {
    if (newNumber) {
      setDisplay('0.');
      setNewNumber(false);
    } else if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  // Handle operations
  const handleOperation = (nextOperation: string) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      const result = compute(previousValue, inputValue, operation);
      setDisplay(String(result));
      setPreviousValue(result);
    }

    setOperation(nextOperation);
    setNewNumber(true);
  };

  // Calculate result
  const compute = (prev: number, current: number, op: string): number => {
    switch (op) {
      case '+':
        return prev + current;
      case '-':
        return prev - current;
      case '*':
        return prev * current;
      case '/':
        return current !== 0 ? prev / current : 0;
      default:
        return current;
    }
  };

  // Handle equals
  const handleEquals = () => {
    const inputValue = parseFloat(display);

    if (previousValue !== null && operation) {
      const result = compute(previousValue, inputValue, operation);
      setDisplay(String(result));
      setPreviousValue(null);
      setOperation(null);
      setNewNumber(true);
    }
  };

  // Handle clear
  const handleClear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setNewNumber(true);
  };

  // Handle backspace
  const handleBackspace = () => {
    if (display.length === 1) {
      setDisplay('0');
      setNewNumber(true);
    } else {
      setDisplay(display.slice(0, -1));
    }
  };

  const buttons = [
    { label: 'C', onClick: handleClear, className: 'btn-clear' },
    { label: '←', onClick: handleBackspace, className: 'btn-backspace' },
    { label: '÷', onClick: () => handleOperation('/'), className: 'btn-operation' },
    { label: '×', onClick: () => handleOperation('*'), className: 'btn-operation' },

    { label: '7', onClick: () => handleNumberClick('7'), className: 'btn-number' },
    { label: '8', onClick: () => handleNumberClick('8'), className: 'btn-number' },
    { label: '9', onClick: () => handleNumberClick('9'), className: 'btn-number' },
    { label: '−', onClick: () => handleOperation('-'), className: 'btn-operation' },

    { label: '4', onClick: () => handleNumberClick('4'), className: 'btn-number' },
    { label: '5', onClick: () => handleNumberClick('5'), className: 'btn-number' },
    { label: '6', onClick: () => handleNumberClick('6'), className: 'btn-number' },
    { label: '+', onClick: () => handleOperation('+'), className: 'btn-operation' },

    { label: '1', onClick: () => handleNumberClick('1'), className: 'btn-number' },
    { label: '2', onClick: () => handleNumberClick('2'), className: 'btn-number' },
    { label: '3', onClick: () => handleNumberClick('3'), className: 'btn-number' },
    { label: '=', onClick: handleEquals, className: 'btn-equals', rowSpan: 2 },

    { label: '0', onClick: () => handleNumberClick('0'), className: 'btn-number', colSpan: 2 },
    { label: '.', onClick: handleDecimal, className: 'btn-number' },
  ];

  return (
    <div className="calculator-container">
      <div className="operation-indicator">
        {previousValue !== null && operation ? `${previousValue} ${operation}` : ''}
      </div>
      <div className="calculator-display">{display}</div>
      <div className="calculator-buttons">
        {buttons.map((btn, idx) => (
          <button
            key={idx}
            onClick={btn.onClick}
            className={`calculator-btn ${btn.className}`}
            style={{
              gridColumn: btn.colSpan ? `span ${btn.colSpan}` : undefined,
              gridRow: btn.rowSpan ? `span ${btn.rowSpan}` : undefined,
            }}
          >
            {btn.label}
          </button>
        ))}
      </div>
    </div>
  );
}

import { useState } from 'react';

const Calculator = () => {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState('');

  const calculate = () => {
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);

    switch (operator) {
      case '+':
        setResult((num1 + num2).toString());
        break;
      case '-':
        setResult((num1 - num2).toString());
        break;
      case '*':
        setResult((num1 * num2).toString());
        break;
      case '/':
        setResult((num1 / num2).toString());
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <input
        type="number"
        value={firstNumber}
        onChange={(e) => setFirstNumber(e.target.value)}
        className="border-2 border-gray-300 rounded-md p-2"
      />
      <input
        type="number"
        value={secondNumber}
        onChange={(e) => setSecondNumber(e.target.value)}
        className="border-2 border-gray-300 rounded-md p-2"
      />
      <div className="flex space-x-4">
        {['+', '-', '*', '/'].map((op) => (
          <button
            key={op}
            onClick={() => setOperator(op)}
            className={`p-2 rounded-md bg-blue-500 text-white ${operator === op ? 'bg-blue-700' : ''}`}
          >
            {op}
          </button>
        ))}
      </div>
      <button onClick={calculate} className="p-2 rounded-md bg-green-500 text-white">
        Calculate
      </button>
      <div className="text-xl">{result}</div>
    </div>
  );
};

export default Calculator;
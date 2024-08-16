import { gameRules, getRandomInt } from '../index.js';

const rule = 'What is the result of the expression?';

const symbols = ['+', '-', '*'];

const calculating = (number1, number2, symbol) => {
  let calc = 0;
  switch (symbol) {
    case '+':
      calc = number1 + number2;
      break;
    case '-':
      calc = number1 - number2;
      break;
    case '*':
      calc = number1 * number2;
      break;
    default:
      calc = null;
  }
  return calc;
};

const task = () => {
  const symbol = symbols[getRandomInt(2)];
  const number1 = getRandomInt(100);
  const number2 = getRandomInt(100);

  const question = `${number1} ${symbol} ${number2}`;
  const resultRaw = calculating(number1, number2, symbol);
  const result = resultRaw.toString();

  return [question, result];
};

const startCalc = () => {
  gameRules(rule, task);
};

export default startCalc;

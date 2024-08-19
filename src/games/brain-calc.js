import { gameRules, getRandomInt } from '../index.js';

const rule = 'What is the result of the expression?';

const symbols = ['+', '-', '*'];

const calculating = (number1, number2, symbol) => {
  switch (symbol) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      return null;
  }
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

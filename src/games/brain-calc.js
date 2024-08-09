import {gameRules, getRandomInt} from '../index.js';

const calc = () => {
  const rule = 'What is the result of the expression?';

  const task = () => {
    const number1 = getRandomInt(100);
    const number2 = getRandomInt(100);

    const symbols = ['+', '-', '*'];
    const symbol = symbols[getRandomInt(2)];

    const question = `${number1} ${sign} ${number2}`;

    let result = 0;
    switch (symbol) {
      case '+':
        result = number1 + number2;
        break;
      case '-':
        result = number1 - number2;
        break;
      case '*':
        result = number1 * number2;
        break;
      default:
        result = null;
    }

    result = result.toString();

    return [question, result];
  };

  gameRules(rule, task);
};

export default calc;
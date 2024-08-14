import { gameRules, getRandomInt } from '../index.js';

const evenGame = () => {
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

  const task = () => {
    const number = getRandomInt(100);

    const isEven = (num) => num % 2 === 0;

    const question = `${number}`;
    const result = (isEven(number) ? 'yes' : 'no');

    return [question, result];
  };

  gameRules(rule, task);
};

export default evenGame;

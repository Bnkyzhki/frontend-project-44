import { gameRules, getRandomInt } from '../index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const task = () => {
  const number = getRandomInt(100);
  const question = `${number}`;
  const result = (isEven(number) ? 'yes' : 'no');

  return [question, result];
};

const startEvenGame = () => {
  gameRules(rule, task);
};

export default startEvenGame;

import { gameRules, getRandomInt } from '../index.js';

const rule = 'Find the greatest common divisor of given numbers.';

const findGcd = (a, b) => {
  if (a % b === 0) { return b; }

  return findGcd(b, a % b);
};

const task = () => {
  const num1 = getRandomInt(100);
  const num2 = getRandomInt(100);

  const question = `${num1} ${num2}`;

  const result = findGcd(num1, num2).toString();

  return [question, result];
};

const startGcd = () => {
  gameRules(rule, task);
};

export default startGcd;

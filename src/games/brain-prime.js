import { gameRules, getRandomInt } from '../index.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) { return false; }

  let i = 2;
  while (i <= num / 2) {
    if (num % i === 0) { return false; }
    i += 1;
  }

  return true;
};

const task = () => {
  const number = getRandomInt(100);
  const question = `${number}`;
  const result = (isPrime(number) ? 'yes' : 'no');

  return [question, result];
};

const startPrime = () => {
  gameRules(rule, task);
};

export default startPrime;

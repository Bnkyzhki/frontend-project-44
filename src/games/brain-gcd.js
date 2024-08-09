import {gameRules, getRandomInt} from '../index.js';

const gcd = () => {
    const rule = 'Find the greatest common divisor of given numbers.';

    const task = () =>{
    const num1 = getRandomInt(100);
    const num2 = getRandomInt(100);

    const question = `${num1} ${num2}`;

    const findGcd = (a, b) => {
    
        if (a % b === 0) { return b; }

        return findGcd(b, a % b);
    };
    const result = findGcd(num1, num2).toString();
    
    return [question, result];
};
    gameRules(rule, task);
};

export default gcd;
import { gameRules, getRandomInt } from '../index.js';

const progression = () => {
    const rule = 'What number is missing in the progression?';

    const getArr = () => {
        const arr = [];
        const startArr = getRandomInt(10); 
        let stepArr = getRandomInt(10); 
        const lengthArr = 9; 
        for (let i = 0; i < lengthArr; i++) {
            arr.push(startArr + i * stepArr); 
        }
        return arr;
    };

    const task = () => {
        const arr = getArr(); 
        const randomIndex = getRandomInt(0, arr.length - 1); 
        const hiddenAnswer = arr[randomIndex]; 
        arr[randomIndex] = '..'; 
        const question = arr.join(' ');
        const correctAnswer = hiddenAnswer.toString();

        return [question, correctAnswer];
    };

    gameRules(rule, task);
};

export default progression;
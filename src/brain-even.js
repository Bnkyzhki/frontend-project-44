import readlineSync from 'readline-sync';

let correctStreak = 0;
let randomNumber;

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name: ');
console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

    const isEven = (number) => {
    return number % 2 === 0;
}

const generateNumber = () => {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${randomNumber}`);
}

const askQuestion = () => {
    
    const answer = readlineSync.question("Your answer:");
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
    
    if (answer === correctAnswer) {
        correctStreak++;
        console.log("Correct!");
        
        if (correctStreak < 3) {
            generateNumber();
            askQuestion();
        } else {
            console.log(`Congratulations, ${userName}!`);
        }
    } else {
        console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}. Let's try again, ${userName}!`);
    }
}

const startGame = () => {
    correctStreak = 0;
    generateNumber();
    askQuestion();
}

startGame();

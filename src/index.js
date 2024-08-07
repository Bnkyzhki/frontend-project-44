import readLineSync from 'readline-sync';

const getRandomInt = (max) => Math.floor(Math.random() * max);

const gameRules = (rule, task) => {
  console.log('Welcome to the Brain Games!');

  const userName = readLineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);

  console.log(rule);

  for (let i = 0; i < 3; i += 1) {
    const generatedNum = task();

    console.log(`Question: ${generatedNum[0]}`);
    const answerUser = readLineSync.question('Your answer: ');

    const rightAnswer = generatedNum[1];

    if (answerUser === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export {getRandomInt, gameRules};
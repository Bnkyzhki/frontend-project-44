import readLineSync from 'readline-sync';

const getRandomInt = (max) => Math.floor(Math.random() * max) + 1;

const gameRules = (rule, task) => {
  console.log('Welcome to the Brain Games!');

  const userName = readLineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);

  console.log(rule);

  for (let i = 0; i < 3; i += 1) {
    const generatedNums = task();

    console.log(`Question: ${generatedNums[0]}`);
    const answerUser = readLineSync.question('Your answer: ');

    const rightAnswer = generatedNums[1];

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
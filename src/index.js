import readLineSync from 'readline-sync';

const getRandomInt = (max) => Math.floor(Math.random() * max) + 1;

const roundCount = 3;

const gameRules = (rule, task) => {
  console.log('Welcome to the Brain Games!');

  const userName = readLineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);

  console.log(rule);

  for (let i = 0; i < roundCount; i += 1) {
    const [question, rightAnswer] = task();

    console.log(`Question: ${question}`);
    const answerUser = readLineSync.question('Your answer: ');

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
export { getRandomInt, gameRules };

import readlineSync from 'readline-sync';

const greetings = () => {
  Console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name: ');
  Console.log(`Hello, ${name}!`);
};

export {greetings, name}


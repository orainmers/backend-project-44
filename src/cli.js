import readlineSync from 'readline-sync';

// eslint-disable-next-line
let userName = '';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};
export { greeting, userName };

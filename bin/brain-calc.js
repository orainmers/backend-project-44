#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { userName } from '../src/cli.js';

const calcGame = () => {
  console.log('What is the result of the expression?');
  let i = 0;
  while (i < 3) {
    const randomInt1 = Math.floor(Math.random() * 21);
    const randomInt2 = Math.floor(Math.random() * 21);
    const operators = ['+', '-', '*'];
    const randomOperator = operators[Math.floor(Math.random() * 3)];
    console.log(`Question: ${randomInt1} ${randomOperator} ${randomInt2}`);
    const userAnswer = parseInt(readlineSync.question('Your answer: '));
    let trueAnswer = '';
    switch (randomOperator) {
      case '+':
        trueAnswer = randomInt1 + randomInt2;
        break;
      case '-':
        trueAnswer = randomInt1 - randomInt2;
        break;
      case '*':
        trueAnswer = randomInt1 * randomInt2;
        break;
    }

    if (userAnswer === trueAnswer) {
      console.log('Correct!');
      i++;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      i = 0;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default calcGame;

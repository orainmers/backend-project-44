#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { userName } from '../src/cli.js';

const gcdGame = () => {
  const gcd = (a, b) => {
    if (b === 0) {
      return a;
    } if (a === 0) {
      return b;
    }
    return gcd(b, a % b);
  };

  console.log('Find the greatest common divisor of given numbers.');
  let i = 0;
  while (i < 3) {
    const randomInt1 = Math.floor(Math.random() * 51);
    const randomInt2 = Math.floor(Math.random() * 51);
    console.log(`Question: ${randomInt1} ${randomInt2}`);
    const userAnswer = parseInt(readlineSync.question('Your answer: '));
    const trueAnswer = gcd(randomInt1, randomInt2);
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
export default gcdGame;

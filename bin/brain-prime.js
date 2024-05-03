#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { greeting, userName } from '../src/cli.js';

greeting();

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  if (number <= 3) {
    return true;
  }
  if (number % 2 === 0 || number % 3 === 0) {
    return false;
  }
  let i = 5;
  while (i * i <= number) {
    if (number % i === 0 || number % (i + 2) === 0) {
      return false;
    }
    i += 6;
  }
  return true;
};

const primeGame = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let i = 0;
  while (i < 3) {
    const randomInt = Math.floor(Math.random() * 101);
    console.log(`Question: ${randomInt}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const trueAnswer = isPrime(randomInt);
    if ((userAnswer === 'yes' && trueAnswer === true) || (userAnswer === 'no' && trueAnswer === false)) {
      console.log('Correct!');
      i += 1;
    } else if (trueAnswer === true) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'yes'.`);
      i = 0;
    } else if (trueAnswer === false) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'no'.`);
      i = 0;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
primeGame();

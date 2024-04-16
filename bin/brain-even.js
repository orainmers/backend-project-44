#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { greeting, userName } from '../src/cli.js';

greeting();

console.log('Answer "yes" if the number is even, otherwise answer "no".');
let i = 0;
while (i < 3) {
  const randomInt = Math.floor(Math.random() * 101);
  console.log(`Question: ${randomInt}`);
  const userAnswer = readlineSync.question('Your answer: ');
  let trueAnswer = '';
  if (randomInt % 2 === 0) {
    trueAnswer = 'yes';
  } else {
    trueAnswer = 'no';
  }

  if ((userAnswer === 'yes' && randomInt % 2 === 0) || (userAnswer === 'no' && randomInt % 2 !== 0)) {
    console.log('Correct!');
    i += 1;
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.`);
    console.log(`Let's try again, ${userName}!`);
    i = 0;
  }
}
console.log(`Congratulations, ${userName}!`);

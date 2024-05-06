#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { greeting, userName } from '../src/cli.js';

greeting();

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const makeProgression = () => {
  const length = getRandomInt(5, 10);
  const start = getRandomInt(1, 100);
  const diff = getRandomInt(1, 10);
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + diff * i);
  }
  return progression;
};

const hiddenNumber = (array) => {
  const index = getRandomInt(0, array.length - 1);
  const trueAnswer = array[index];
  const newArray = array;
  newArray[index] = '..';
  return [newArray, trueAnswer];
};

const progressionGame = () => {
  console.log('What number is missing in the progression?');
  let i = 0;
  while (i < 3) {
    const [progression, trueAnswer] = hiddenNumber(makeProgression());
    console.log(`Question: ${progression.join(' ')}`);
    const userAnswer = readlineSync.question('Your Answer: ');
    if (userAnswer === trueAnswer.toString()) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      i = 0;
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
progressionGame();

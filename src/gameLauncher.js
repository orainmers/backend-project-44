import readlineSync from 'readline-sync';
import evenGame from '../bin/brain-even.js';
import calcGame from '../bin/brain-calc.js';
import gcdGame from '../bin/brain-gcd.js';
import { progressionGame } from '../bin/brain-progression.js';

export default () => {
  const games = ['CALC', 'EVEN', 'GCD', 'PROGRESSION'];
  const index = readlineSync.keyInSelect(games, 'Please choose a game: ');
  switch (index) {
    case 0:
      return calcGame();
    case 1:
      return evenGame();
    case 2:
      return gcdGame();
    case 3:
      return progressionGame();
    default:
      console.log('Goodbye!');
  }
};

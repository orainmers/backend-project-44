import readlineSync from 'readline-sync';
import evenGame from '../bin/brain-even.js';
import calcGame from '../bin/brain-calc.js';
import gcdGame from '../bin/brain-gcd.js';

export default () => {
  const games = ['CALC', 'EVEN', 'GCD'];
  const index = readlineSync.keyInSelect(games, 'Please choose a game: ');
  switch (index) {
    case 0:
      return calcGame();
    case 1:
      return evenGame();
    case 2:
      return gcdGame();
    default:
      console.log('Goodbye!');
  }
};

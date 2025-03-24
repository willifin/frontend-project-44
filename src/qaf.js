import randomnumbergame from './rng.js';
import answerfirstgame from './afg.js';
import { questionanswer } from './cli.js';

const name = questionanswer();
console.log('Answer "yes" if the number is even, otherwise answer "no".');

export const questionanswerfirstgame = () => {
  for (let i = 0; i < 3; i += 1) {
    const r = randomnumbergame();
    console.log(`Question: ${r}`);
    const a = answerfirstgame();
    let result;
    if (((r % 2 === 0) && (a === 'yes')) || ((r % 2 !== 0) && (a === 'no'))) {
      result = 'Correct!';
      console.log(result);
    } else {
      result = `'yes' is wrong answer ;(. Correct answer was 'no'. \nLet's try again, ${name}!`;
      console.log(result);
      return;
    }
  }

  return console.log(`Congratulations, ${name}!`);
};

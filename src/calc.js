import randomnumbergame from './rng.js';
import answerfirstgame from './afg.js';
import greeting from './cli.js';
import randomOperationGame from './rog.js';

const name = greeting();
console.log('What is the result of the expression?');

const calcgame = () => {
  for (let i = 0; i < 3; i += 1) {
    const rn1 = randomnumbergame();
    const rn2 = randomnumbergame();
    const ro = randomOperationGame();
    console.log(`Question: ${rn1} ${ro} ${rn2}`);
    const a = answerfirstgame();
    const b = Number(a);
    let result;
    let resultoperation;
    if (ro === '+') {
      if (b === rn1 + rn2) {
        result = 'Correct!';
        console.log(result);
      } else {
        resultoperation = rn1 + rn2;
        result = `'${a}' is wrong answer ;(. Correct answer was '${resultoperation}'. \nLet's try again, ${name}!`;
        console.log(result);
        return;
      }
    } else if (ro === '-') {
      if (b === rn1 - rn2) {
        result = 'Correct!';
        console.log(result);
      } else {
        resultoperation = rn1 - rn2;
        result = `'${a}' is wrong answer ;(. Correct answer was '${resultoperation}'. \nLet's try again, ${name}!`;
        console.log(result);
        return;
      }
    } else if (b === rn1 * rn2) {
      result = 'Correct!';
      console.log(result);
    } else {
      resultoperation = rn1 * rn2;
      result = `'${a}' is wrong answer ;(. Correct answer was '${resultoperation}'. \nLet's try again, ${name}!`;
      console.log(result);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default calcgame;

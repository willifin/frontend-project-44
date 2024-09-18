import randomnumbergame from '../src/rng.js';
import answerfirstgame from '../src/afg.js';
import {questionanswer} from '../src/cli.js';
import randomOperationGame from '../src/rog.js';

const name = questionanswer ();
console.log('What is the result of the expression?');

export const calcgame = ()  => {
	for (let i = 0; i < 3; i += 1) {
	const rn1 = randomnumbergame();
	const rn2 = randomnumbergame();
	const ro = randomOperationGame();
	console.log('Question: ' + rn1 + ' ' + ro + ' ' + rn2);
	const a = answerfirstgame();
	const b = Number(a);
	let result;
	let resultoperation;
		if (ro === '+') {
			if (b === rn1 + rn2) {
		   	  result = 'Correct!';
		   	  console.log(result);
			  }
			else {
			  resultoperation = rn1 + rn2;
			  result = "'" + a + "' is wrong answer ;(. Correct answer was '" + resultoperation +"'. \nLet's try again, " + name + '!';
		   	  console.log(result);
			  return;
			  }
		} else if (ro === '-') {
			if (b === rn1 - rn2) {
		 	  result = 'Correct!';
		 	  console.log(result);
			  }
			else {
			  resultoperation = rn1 - rn2;
			  result = "'" + a + "' is wrong answer ;(. Correct answer was '" + resultoperation +"'. \nLet's try again, " + name + '!';
		   	  console.log(result);
			  return;
			}
		} else {
			if (b === rn1 * rn2) {
		 	  result = 'Correct!';
		 	  console.log(result);
			  }
			else {
		   	  resultoperation = rn1 * rn2;
			  result = "'" + a + "' is wrong answer ;(. Correct answer was '" + resultoperation +"'. \nLet's try again, " + name + '!';
		   	  console.log(result);
			  return;
			}
		}
	}

	return console.log('Congratulations, ' + name + '!');
};

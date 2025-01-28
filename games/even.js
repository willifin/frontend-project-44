import {logics} from '../src/index.js';

const explanationGameEven = () => {
	const explanation = 'Answer "yes" if the number is even, otherwise answer "no".';
	console.log(explanation);
};

const questionForGameEven = (randomNumberGameEven) => {
	let questionForGame = 'Question: ' + randomNumberGameEven;
	console.log(questionForGame);	
	return;
};

const conditionGameEven = (randomNumberGameEven, answerForGameEven) => {
	if (((randomNumberGameEven % 2 === 0) && (answerForGameEven === 'yes')) || ((randomNumberGameEven % 2 !== 0) && (answerForGameEven === 'no'))){
		   let resultGameEven = true;
		   return resultGameEven;
	 } else {
		   let resultGameEven = false;
		   return resultGameEven;
	}
};

const falseGameResultEven = (nameUserGameEven, answerForGameEven, conditionGameEven) => {
	if (answerForGameEven === 'yes'){
		const endOfTheGameEven = "'yes' is wrong answer ;(. Correct answer was 'no'. \nLet's try again, " + nameUserGameEven + '!';
		return endOfTheGameEven;
	} else if (answerForGameEven === 'no'){
		const endOfTheGameEven = "'no' is wrong answer ;(. Correct answer was 'yes'. \nLet's try again, " + nameUserGameEven + '!';
		return endOfTheGameEven;
	} else {
			const endOfTheGameEven = "'" + answerForGameEven + "' is wrong answer ;(. Correct answer was 'yes' or 'no'. \nLet's try again, " + nameUserGameEven + '!';
			return endOfTheGameEven;
	}
};

const gameEven = () => {
	logics(explanationGameEven, questionForGameEven, conditionGameEven, falseGameResultEven);
};
export {gameEven};
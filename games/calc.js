import {logics} from '../src/index.js';

const explanationGameCalc = () => {
	const explanation = 'What is the result of the expression?';
	console.log(explanation);
};

const questionForGameCalc = (randomFirstNumber) => {
	
	const randomOperationGame = () => {
		let randomOperation = Math.floor(Math.random()*15)
		return randomOperation;
	};
	
	let rog = randomOperationGame();
	
	const OperationGame = (randomValueOperation) => {
	let operation;
		if (randomValueOperation < 5) {
			operation = ' + ';
			return operation;
		} else if (randomValueOperation >= 5 && randomValueOperation < 10) {
			operation = ' - ';
			return operation;
		} else {
			operation = ' * ';
			return operation;
		}
	};

	let randomOperation =  OperationGame (rog);

	const randomSecondNumberGame = () => {
		let randomNumber = Math.floor(Math.random()*15);
		return randomNumber;
	};

	let randomSecondNumber = randomSecondNumberGame();

	const questionForGame = [randomFirstNumber, randomOperation, + randomSecondNumber];
	let questionForGameLog = 'Question: ' + randomFirstNumber + randomOperation + randomSecondNumber;
	console.log(questionForGameLog);
	return questionForGame;
};

const conditioncGameCalc = (randomFirstNumber, answerForGameCalc, questionForGameCalc) => {
	const b = Number(answerForGameCalc);
	let rn1 = randomFirstNumber;
	let valueQuestionForGameCalc = questionForGameCalc;
	let ro = valueQuestionForGameCalc[1];
	let rn2 = valueQuestionForGameCalc[2];
			
	if (ro === ' + '){
		if (b === rn1 + rn2) {
		   return true;
		} else {
		   let a = rn1 + rn2;
		   return a;
		}
	} else if (ro === ' - ') {
		if (b === rn1 - rn2) {
		   return true;
		} else {
		   let a = rn1 - rn2;
		   return a;
		}
	} else {
		if (b === rn1 * rn2) {
		   return true;
		} else {
		   let a = rn1 * rn2;
		   return a;
		}
	}
};

const falseGameResultCalc = (nameUserGameCalc, answerForGameCalc, conditionGameCalc) => {
	let valueConditionGameCalc = conditionGameCalc;
	
	let endOfTheGameCalc = "'" + answerForGameCalc + "' is wrong answer ;(. Correct answer was '" + valueConditionGameCalc + "'. \nLet's try again, " + nameUserGameCalc + '!';
	return endOfTheGameCalc;
};

const gameCalc = () => {
	logics(explanationGameCalc, questionForGameCalc, conditioncGameCalc, falseGameResultCalc);
};
export {gameCalc};
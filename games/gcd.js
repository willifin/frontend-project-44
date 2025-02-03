import {logics} from '../src/index.js';

const explanationGameNod = () => {
	const explanation = 'Find the greatest common divisor of given numbers.';
	console.log(explanation);
};

const randomSecondNumberGame = () => {
	let valueRandomSecondNumber = Math.floor(Math.random()*100+1);
	return valueRandomSecondNumber;
};



const questionForGameNod = (randomFirstNumber) => {
	let randomSecondNumber = randomSecondNumberGame();
	const questionForGame = [randomFirstNumber, + randomSecondNumber];;
	const randomFirstNumberString = String(randomFirstNumber) + ' ';
	let questionForGameLog = 'Question: ' + randomFirstNumberString + randomSecondNumber;
	console.log(questionForGameLog);
	return questionForGame;
};

const conditionGameNod = (randomFirstNumber, answerForGameNod, questionForGameNod) => {
	const valueAnswer = Number(answerForGameNod);
	let valueQuestionForGameNod = questionForGameNod;
	let randomSecondNumber = valueQuestionForGameNod[1];
		
	let resultGameNod;
	while (randomFirstNumber !== randomSecondNumber) {
		if (randomFirstNumber > randomSecondNumber) {
			randomFirstNumber = randomFirstNumber - randomSecondNumber;
		} else {
			randomSecondNumber = randomSecondNumber - randomFirstNumber;
        }		   
	}
	if (valueAnswer === randomFirstNumber) {
		resultGameNod = true;
		return resultGameNod;
	} else {
		resultGameNod = false;
		return [resultGameNod, randomFirstNumber];
	}
};

const falseGameResultNod = (nameUserGameNod, answerForGameNod, conditionGameNod) => {
	let valueConditionGameNod = conditionGameNod;
	let valueNod = valueConditionGameNod[1];
		
	let endOfTheGameNod = "'" + answerForGameNod + "' is wrong answer ;(. Correct answer was '" + valueNod + "'. \nLet's try again, " + nameUserGameNod + '!';
	return endOfTheGameNod;
};

const gameNod = () => {
	logics(explanationGameNod, questionForGameNod, conditionGameNod, falseGameResultNod);
};
export {gameNod};
import {logics} from '../src/index.js';

const explanationcalc = () => {
	const ee = 'What is the result of the expression?';
	console.log(ee);
};

const randomNumberGame2 = () => {
	let f = Math.floor(Math.random()*50);
	return f;
};

const randomOperationGame = (r) => {
	const randomNumber = r;
		if (randomNumber < 17) {
			const randomOperation = '+';
		  	return randomOperation;
		} else if (randomNumber >= 17 && randomNumber < 34) {
		 	const randomOperation = '-';
		  	return randomOperation;
		} else {
		  	const randomOperation = '*';
		  	return randomOperation;
		}
};

	
//let ro = randomOperationGame();
let rn2 = randomNumberGame2();


const questionforgamecalc = (rn1) => {
	let ro = randomOperationGame(rn1);
	const qfg = 'Question: ' + rn1 + ' ' + ro + ' ' + ((rn2+rn1)/2);
	console.log(qfg);
	//return ro;
};

const conditioncalc = (rn1, a) => {
	const b = Number(a);
	//let randomValues = questionforgamecalc();
	//let rn11 = randomValues[0],
	//ro = randomValues[1],
	//rn2 = randomValues[2];
	let ro = randomOperationGame(rn1);
	
	let resaltcalc;
	if (ro === '+'){
		if (b === rn1 + ((rn2+rn1)/2)) {
		   let resultcalc = 1;
		   return resultcalc;
		} else {
		   let resultcalc = 0;
		   return resultcalc;
		}
	 } else if (ro === '-') {
		if (b === rn1 - ((rn2+rn1)/2)) {
		   let resultcalc = 1;
		   return resultcalc;
		   }
		else {
		   let resultcalc = 0;
		   return resultcalc;
		   }
	} else {
		if (b === rn1 * ((rn2+rn1)/2)) {
		   let resultcalc = 1;
		   return resultcalc;
		   }
		else {
		   let resultcalc = 0;
		   return resultcalc;
		   }
	}
};

const resultfalsecalc = (nameuserfalsecalc, answerfalsecalc, rn1) => {
	const b = Number(answerfalsecalc);
	//let randomValues = random();
	//let rn11 = randomValues[0],
	//ro = randomValues[1],
	//rn2 = randomValues[2];
	let ro = randomOperationGame(rn1);

	let resultoperation;
	if (ro === '+'){
		resultoperation = rn1 + ((rn2+rn1)/2);
		const rfe = "'" + answerfalsecalc + "' is wrong answer ;(. Correct answer was '" + resultoperation + "'. \nLet's try again, " + nameuserfalsecalc + '!';
		return rfe;
	} else if (ro === '-'){
		resultoperation = rn1 - ((rn2+rn1)/2);
		const rfe = "'" + answerfalsecalc + "' is wrong answer ;(. Correct answer was '" + resultoperation + "'. \nLet's try again, " + nameuserfalsecalc + '!';
		return rfe;
	} else {
		resultoperation = rn1 * ((rn2+rn1)/2);
		const rfe = "'" + answerfalsecalc + "' is wrong answer ;(. Correct answer was '" + resultoperation + "'. \nLet's try again, " + nameuserfalsecalc + '!';
		return rfe;
		}
};


const calc = () => {
	logics(explanationcalc, questionforgamecalc, conditioncalc, resultfalsecalc);
};
export {calc};
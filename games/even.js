import {logics} from '../src/index.js';

const explanationeven = () => {
	const ee = 'Answer "yes" if the number is even, otherwise answer "no".';
	console.log(ee);
};

const questionforgameeven = (r) => {
	let qfg = 'Question: ' + r;
	console.log(qfg);	
	return;
};

const conditioneven = (r, a) => {
	let resalteven;
	if (((r % 2 === 0) && (a === 'yes')) || ((r % 2 !== 0) && (a === 'no'))){
		   let resulteven = 1;
		   return resulteven;
	 } else {
		   let resulteven = 0;
		   return resulteven;
	}
};

const resultfalseeven = (nameuserfalseeven, answerfalseeven, r) => {
	if (answerfalseeven === 'yes'){
		const rfe = "'yes' is wrong answer ;(. Correct answer was 'no'. \nLet's try again, " + nameuserfalseeven + '!';
		return rfe;
	} else if (answerfalseeven === 'no'){
		const rfe = "'no' is wrong answer ;(. Correct answer was 'yes'. \nLet's try again, " + nameuserfalseeven + '!';
		return rfe;
	} else {
		if (r % 2 === 0){
			const rfe = "'" + answerfalseeven + "' is wrong answer ;(. Correct answer was 'yes'. \nLet's try again, " + nameuserfalseeven + '!';
			return rfe;
		} else {
			const rfe = "'" + answerfalseeven + "' is wrong answer ;(. Correct answer was 'no'. \nLet's try again, " + nameuserfalseeven + '!';
			return rfe;
		}
	}
};

const even = () => {
	logics(explanationeven, questionforgameeven, conditioneven, resultfalseeven);
};
export {even};
import {logics} from '../src/index.js';

const explanationnod = () => {
	const ee = 'Find the greatest common divisor of given numbers.';
	console.log(ee);
};

const randomNumberGame2 = () => {
	let f = Math.floor(Math.random()*100+1);
	return f;
};

const questionforgamenod = (rn1) => {
	const qfg = ['Question: ', + rn1, + randomNumberGame2()];;
	console.log(qfg[0], qfg[1], qfg[2]);
	return qfg;
};

const conditionnod = (rn1, a, qfgnod) => {
	const b = Number(a);
	let randomValues = qfgnod;
	let rn2 = randomValues[2];
		
	let resaltnod;
	while (rn1 !== rn2) {
		if (rn1 > rn2) {
			rn1 = rn1 - rn2;
		} else {
            		rn2 = rn2 - rn1;
        	}		   
	}
	if (b === rn1) {
		let resultnod = 1;
		   return resultnod;
		} else {
		   let resultnod = 0;
		   return [resultnod, rn1];
		}
};

const resultfalsenod = (nameuserfalsenod, answerfalsenod, confalsenod) => {
	let conditionValues = confalsenod;
	let rn1 = conditionValues[1];
		
	let rfe = "'" + answerfalsenod + "' is wrong answer ;(. Correct answer was '" + rn1 + "'. \nLet's try again, " + nameuserfalsenod + '!';
	return rfe;
};

const nod = () => {
	logics(explanationnod, questionforgamenod, conditionnod, resultfalsenod);
};
export {nod};
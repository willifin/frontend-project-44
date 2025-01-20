import {logics} from '../src/index.js';

const explanationprime = () => {
	const ee = 'Answer "yes" if given number is prime. Otherwise answer "no".';
	console.log(ee);
};


const questionforgameprime = (rn) => {
	const qfg = ['Question: ', + rn];
	console.log(qfg[0], qfg[1]);
	return qfg[1];
};

const conditionprime = (rn, a, qfgprime) => {
	const prime = (qfgprime) => {
		if (qfgprime > 1) {
			for (let i = 2; i < qfgprime; i++) {
				if (qfgprime % i === 0) {
					return false;
				}
			}
			return true;
		} else {
	    	return false;
		}
	};
	
	let resaltprime;
	if ((prime(qfgprime) === true)&&(a === 'yes')) {
		resaltprime = 1;
		return resaltprime;
	} else if ((prime(qfgprime) === false)&&(a === 'no')) {
		resaltprime = 1;
		return resaltprime;
	} else if ((prime(qfgprime) === true)&&(a === 'no')) {
		resaltprime = 0;
		return resaltprime;
	} else if ((prime(qfgprime) === false)&&(a === 'yes')) {
		resaltprime = 0;
		return resaltprime;
	}
	
};

const resultfalseprime = (nameuserfalseprime, answerfalseprime, confalseprime) => {
	let c = confalseprime;
	if (answerfalseprime === 'yes'){
		const rfe = "'yes' is wrong answer ;(. Correct answer was 'no'. \nLet's try again, " + nameuserfalseprime + '!';
		return rfe;
	} else if (answerfalseprime === 'no'){
		const rfe = "'no' is wrong answer ;(. Correct answer was 'yes'. \nLet's try again, " + nameuserfalseprime + '!';
		return rfe;
	}
};

const prime = () => {
	logics(explanationprime, questionforgameprime, conditionprime, resultfalseprime);
};
export {prime};
//import {random} from 'lodash';
//import * as _ from "lodash";
import {logics} from '../src/index.js';

const explanationprogres = () => {
	const explprogres = 'What number is missing in the progression?';
	console.log(explprogres);
};


const questionforgameprogres = (rn1) => {
	const length = rn1;
	//const min = 0;
	//const max = 50;
	const rn2 = () => {
		let r = Math.floor(Math.random()*10+1);
		return r;
	};
	
	function getRandomInt(min, max) {
		const minCeiled = Math.ceil(min);
		const maxFloored = Math.floor(max);
		return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
	};

	const n = rn2();
	const gri = getRandomInt(0, 50);
	const numbers = [...Array(length)]; // создаём массив
	numbers[0] = gri;
	for (let i = 1; i < numbers.length; i+=1) { // перебираем элементы
		numbers[i] = numbers[i-1] + n;
	};

	const rn3 = () => {
		let f = Math.floor(Math.random()*numbers.length);
		return f;
	};
	const qrn = rn3();

	const numbersrn3 = numbers[qrn];
	numbers[qrn] = '..';
	const qfg = ['Question: ', numbers, numbersrn3];
	//console.log(numbers);
	const output = numbers.join(' ');
	console.log('Question:', output);
	return qfg;
};


const conditionprogres = (rn1, a, qfgprogres) => {
	const v = rn1;
	const b = Number(a);
	const randomValues = qfgprogres;
	const numbersrn3 = randomValues[2];
		
	let resaltprogres;
	if (b === numbersrn3) {
	let resultprogres = 1;
		   return resultprogres;
		} else {
		   let resultprogres = 0;
		   return [resultprogres, numbersrn3];
		}
};

const resultfalseprogres = (nameuserfalseprogres, answerfalseprogres, confalseprogres) => {
	let conditionValues = confalseprogres;
	let numbersrn3 = conditionValues[1];
		
	let rfe = "'" + answerfalseprogres + "' is wrong answer ;(. Correct answer was '" + numbersrn3 + "'. \nLet's try again, " + nameuserfalseprogres + '!';
	return rfe;
};

const progression = () => {
	logics(explanationprogres, questionforgameprogres, conditionprogres, resultfalseprogres);
};

export {progression};
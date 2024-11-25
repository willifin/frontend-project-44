import readlineSync from 'readline-sync';

const greeting = ()  => {
	console.log('Welcome to the Brain Games!');
	const nameuser = readlineSync.question('May I have your name? ');
	console.log('Hello, ' + nameuser + '!');
	return nameuser
};

export const randomnumbergame = () => {
	let f = Math.floor(Math.random()*10+5);
	return f;
};

const answerforgame = ()  => {
	const answer = readlineSync.question('Your answer: ');
	return answer;
};

export const logics = (explanation, questionforgame, condition, resultfalse) => {
	const nameusers = greeting();
	const readexplanation = explanation();
	
	for (let i = 0; i < 3; i += 1) {
	let randomlogic = randomnumbergame ();
	let qfg = questionforgame(randomlogic);
	const afg = answerforgame();
	const con = condition(randomlogic, afg, qfg);
	let result;
		if (con === 1){
		   result = 'Correct!';
		   console.log(result);
		} else {
		   result = resultfalse (nameusers, afg, con);
		   console.log(result);
		   return;
		}
	}

	return console.log('Congratulations, ' + nameusers + '!');
};
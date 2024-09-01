import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
export const questionanswer = ()  => {
	const answer = readlineSync.question('May I have your name? ');
	console.log('Hello, ' + answer + '!');
	return answer;
}

//export questionanswer default;
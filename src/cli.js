import readlineSync from 'readline-sync';
export const questionanswer = ()  => {
	const answer = readlineSync.question('May I have your name? ');
	console.log('Hello, ' + answer + '!');
}
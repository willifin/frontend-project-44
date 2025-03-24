import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const answer = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${answer}!`);
  return answer;
};

export default greeting ;

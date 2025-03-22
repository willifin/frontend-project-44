import readlineSync from 'readline-sync';

const answerfirstgame = ()  => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

export default answerfirstgame;

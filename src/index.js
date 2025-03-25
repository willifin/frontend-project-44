import readlineSync from 'readline-sync';

const greetingGame = () => {
  console.log('Welcome to the Brain Games!');
  const nameUserGame = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameUserGame}!`);
  return nameUserGame;
};

export const randomNumberGame = () => {
  const randomNumberGameIndex = Math.floor(Math.random() * 10 + 5);
  return randomNumberGameIndex;
};

const answerForGame = () => {
  const answerForGameIndex = readlineSync.question('Your answer: ');
  return answerForGameIndex;
};

export const logics = (explanationGame, questionForGame, conditionGame, falseGameResultLogics) => {
  const nameUserGameLogics = greetingGame();
  explanationGame();
  for (let i = 0; i < 3; i += 1) {
    const randomNumberGameLog = randomNumberGame();
    const questionGameLog = questionForGame(randomNumberGameLog);
    const answerGameLog = answerForGame();
    const conditionGameLog = conditionGame(randomNumberGameLog, answerGameLog, questionGameLog);
    let resultGameLogics;
    if (conditionGameLog === true) {
      resultGameLogics = 'Correct!';
      console.log(resultGameLogics);
    } else {
      resultGameLogics = falseGameResultLogics(nameUserGameLogics, answerGameLog, conditionGameLog);
      console.log(resultGameLogics);
      return;
    }
  }

  console.log(`Congratulations, ${nameUserGameLogics}!`);
};

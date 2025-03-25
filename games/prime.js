import { logics } from '../src/index.js';

const explanationGamePrime = () => {
  const explanation = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  console.log(explanation);
};

const questionForGamePrime = (randomNumberGamePrime) => {
  const questionForGame = `Question: ${randomNumberGamePrime}`;
  console.log(questionForGame);
};

const conditionGamePrime = (randomNumberGamePrime, answerForGamePrime) => {
  const prime = () => {
    if (randomNumberGamePrime > 1) {
      for (let i = 2; i < randomNumberGamePrime; i += 1) {
        if (randomNumberGamePrime % i === 0) {
          return false;
        }
      }
      return true;
    }
    return false;
  };

  let resaltGamePrime;
  if (((prime(randomNumberGamePrime) === true) && (answerForGamePrime === 'yes')) || ((prime(randomNumberGamePrime) === false) && (answerForGamePrime === 'no'))) {
    resaltGamePrime = true;
    return resaltGamePrime;
  }
  resaltGamePrime = false;
  return resaltGamePrime;
};

const falseGameResultPrime = (nameUserGamePrime, answerForGamePrime) => {
  if (answerForGamePrime === 'yes') {
    const endOfTheGamePrime = `'yes' is wrong answer ;(. Correct answer was 'no'. \nLet's try again, ${nameUserGamePrime}!`;
    return endOfTheGamePrime;
  } if (answerForGamePrime === 'no') {
    const endOfTheGamePrime = `'no' is wrong answer ;(. Correct answer was 'yes'. \nLet's try again, ${nameUserGamePrime}!`;
    return endOfTheGamePrime;
  }
  const endOfTheGamePrime = `'${answerForGamePrime}' is wrong answer ;(. Correct answer was 'yes' or 'no'. \nLet's try again, ${nameUserGamePrime}!`;
  return endOfTheGamePrime;
};

const gamePrime = () => {
  logics(explanationGamePrime, questionForGamePrime, conditionGamePrime, falseGameResultPrime);
};
export default gamePrime;

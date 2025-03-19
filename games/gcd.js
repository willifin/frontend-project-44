import { logics } from '../src/index.js';

const explanationGameNod = () => {
  const explanation = 'Find the greatest common divisor of given numbers.';
  console.log(explanation);
};

const randomSecondNumberGame = () => {
  const valueRandomSecondNumber = Math.floor(Math.random() * 100 + 1);
  return valueRandomSecondNumber;
};

const questionForGameNod = (randomFirstNumber) => {
  const randomSecondNumber = randomSecondNumberGame();
  const questionForGame = [randomFirstNumber, +randomSecondNumber];
  const randomFirstNumberString = `${String(randomFirstNumber)} `;
  const questionForGameLog = `Question: ${randomFirstNumberString}${randomSecondNumber}`;
  console.log(questionForGameLog);
  return questionForGame;
};

const conditionGameNod = (randomFirstNumber, answerForGameNod, questionForGameNod) => {
  const valueAnswer = Number(answerForGameNod);
  const valueQuestionForGameNod = questionForGameNod;
  let randomSecondNumber = valueQuestionForGameNod[1];

  let resultGameNod;
  while (randomFirstNumber !== randomSecondNumber) {
    if (randomFirstNumber > randomSecondNumber) {
      randomFirstNumber -= randomSecondNumber;
    } else {
      randomSecondNumber -= randomFirstNumber;
    }
  }
  if (valueAnswer === randomFirstNumber) {
    resultGameNod = true;
    return resultGameNod;
  }
  resultGameNod = false;
  return [resultGameNod, randomFirstNumber];
};

const falseGameResultNod = (nameUserGameNod, answerForGameNod, conditionGameNod) => {
  const valueConditionGameNod = conditionGameNod;
  const valueNod = valueConditionGameNod[1];

  const endOfTheGameNod = `'${answerForGameNod}' is wrong answer ;(. Correct answer was '${valueNod}'. \nLet's try again, ${nameUserGameNod}!`;
  return endOfTheGameNod;
};

const gameNod = () => {
  logics(explanationGameNod, questionForGameNod, conditionGameNod, falseGameResultNod);
};
export { gameNod };

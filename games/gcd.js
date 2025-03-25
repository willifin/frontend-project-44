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

const conditionGameNod = (randomFirstNumberNod, answerForGameNod, conditionQuestionForGameNod) => {
  const valueAnswer = Number(answerForGameNod);
  const valueQuestionForGameNod = conditionQuestionForGameNod;
  let randomSecondNumber = valueQuestionForGameNod[1];
  
  let resultGameNod;
  while (randomFirstNumberNod !== randomSecondNumber) {
    if (randomFirstNumberNod > randomSecondNumber) {
      // randomFirstNumber -= randomSecondNumber;
      randomFirstNumberNod = randomFirstNumberNod - randomSecondNumber;
    } else {
      // randomSecondNumber -= randomFirstNumber;
      randomSecondNumber = randomSecondNumber - randomFirstNumberNod;
    }
  }
  if (valueAnswer === randomFirstNumberNod) {
    resultGameNod = true;
    return resultGameNod;
  }
  resultGameNod = false;
  return [resultGameNod, randomFirstNumberNod];
};

const falseGameResultNod = (nameUserGameNod, answerForGameNod, falseConditionGameNod) => {
  const valueConditionGameNod = falseConditionGameNod;
  const valueNod = valueConditionGameNod[1];

  const endOfTheGameNod = `'${answerForGameNod}' is wrong answer ;(. Correct answer was '${valueNod}'. \nLet's try again, ${nameUserGameNod}!`;
  return endOfTheGameNod;
};

const gameNod = () => {
  logics(explanationGameNod, questionForGameNod, conditionGameNod, falseGameResultNod);
};
export default gameNod;

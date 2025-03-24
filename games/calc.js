import { logics } from '../src/index.js';

const explanationGameCalc = () => {
  const explanation = 'What is the result of the expression?';
  console.log(explanation);
};

const questionForGameCalc = (randomFirstNumber) => {
  const randomOperationGame = () => {
    const randomOperation = Math.floor(Math.random() * 15);
    return randomOperation;
  };

  const rog = randomOperationGame();

  const OperationGame = (randomValueOperation) => {
    let operation;
    if (randomValueOperation < 5) {
      operation = ' + ';
      return operation;
    } if (randomValueOperation >= 5 && randomValueOperation < 10) {
      operation = ' - ';
      return operation;
    }
    operation = ' * ';
    return operation;
  };

  const randomOperation = OperationGame(rog);

  const randomSecondNumberGame = () => {
    const randomNumber = Math.floor(Math.random() * 15);
    return randomNumber;
  };

  const randomSecondNumber = randomSecondNumberGame();

  const questionForGame = [randomFirstNumber, randomOperation, +randomSecondNumber];
  const questionForGameLog = `Question: ${randomFirstNumber}${randomOperation}${randomSecondNumber}`;
  console.log(questionForGameLog);
  return questionForGame;
};

const conditioncGameCalc = (randomFirstNumber, answerForGameCalc, questionForGame) => {
  const b = Number(answerForGameCalc);
  const rn1 = randomFirstNumber;
  const valueQuestionForGameCalc = questionForGame;
  const ro = valueQuestionForGameCalc[1];
  const rn2 = valueQuestionForGameCalc[2];

  if (ro === ' + ') {
    if (b === rn1 + rn2) {
      return true;
    }
    const a = rn1 + rn2;
    return a;
  } if (ro === ' - ') {
    if (b === rn1 - rn2) {
      return true;
    }
    const a = rn1 - rn2;
    return a;
  }
  if (b === rn1 * rn2) {
    return true;
  }
  const a = rn1 * rn2;
  return a;
};

const falseGameResultCalc = (nameUserGameCalc, answerForGameCalc, conditionGameCalc) => {
  const valueConditionGameCalc = conditionGameCalc;

  const endOfTheGameCalc = `'${answerForGameCalc}' is wrong answer ;(. Correct answer was '${valueConditionGameCalc}'. \nLet's try again, ${nameUserGameCalc}!`;
  return endOfTheGameCalc;
};

const gameCalc = () => {
  logics(explanationGameCalc, questionForGameCalc, conditioncGameCalc, falseGameResultCalc);
};

export default gameCalc;

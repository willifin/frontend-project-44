// import {random} from 'lodash';
// import * as _ from "lodash";
import { logics } from '../src/index.js';

const explanationGameProg = () => {
  const explanation = 'What number is missing in the progression?';
  console.log(explanation);
};

const questionForGameProg = (randomNumber1GameProgression) => {
  const lengthProgression = randomNumber1GameProgression;
  // const min = 0;
  // const max = 50;
  const randomNumber2GameProgression = () => {
    const randomNumber2 = Math.floor(Math.random() * 10 + 1);
    return randomNumber2;
  };

  function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
  }

  const stepProgression = randomNumber2GameProgression();
  const valueFirstElement = getRandomInt(0, 50);
  const numbers = [...Array(lengthProgression)]; // создаём массив длинной lengthProgression
  numbers[0] = valueFirstElement;
  for (let i = 1; i < numbers.length; i += 1) { // перебираем все элементы массива
    numbers[i] = numbers[i - 1] + stepProgression; // формируем new эл. Arr с шагом stepProgression
  }

  const randomNumber3GameProgression = () => {
    const randomNumber3 = Math.floor(Math.random() * numbers.length);
    return randomNumber3;
  };
  const valueIndexHiddenElement = randomNumber3GameProgression();

  const hiddenElement = numbers[valueIndexHiddenElement];
  numbers[valueIndexHiddenElement] = '..';
  const questionForGame = ['Question: ', numbers, hiddenElement];
  const output = numbers.join(' ');
  console.log('Question:', output);
  return questionForGame;
};

const conditionnGameProg = (randomNumberGameProg, answerForGameProg, questionForGameProgCond) => {
  const numberAnswer = Number(answerForGameProg);
  const valuesQuestion = questionForGameProgCond;
  const valueHiddenElement = valuesQuestion[2];

  if (numberAnswer === valueHiddenElement) {
    const resultGameProgression = true;
    return resultGameProgression;
  }
  const resultGameProgression = false;
  return [resultGameProgression, valueHiddenElement];
};

const falseGameResultProg = (nameUserGameProg, answerForGameProg, conditionGameProg) => {
  const conditionValues = conditionGameProg;
  const valueHiddenElement = conditionValues[1];

  const endOfTheGameProgression = `'${answerForGameProg}' is wrong answer ;(. Correct answer was '${valueHiddenElement}'. \nLet's try again, ${nameUserGameProg}!`;
  return endOfTheGameProgression;
};

const gameProgression = () => {
  logics(explanationGameProg, questionForGameProg, conditionnGameProg, falseGameResultProg);
};

export default gameProgression;

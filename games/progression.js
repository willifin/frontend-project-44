// import {random} from 'lodash';
// import * as _ from "lodash";
import { logics } from '../src/index.js';

const explanationGameProgression = () => {
  const explanation = 'What number is missing in the progression?';
  console.log(explanation);
};

const questionForGameProgression = (randomNumber1GameProgression) => {
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

const conditionnGameProgression = (randomNumberGameProgression, answerForGameProgression, questionForGameProgression) => {
  const numberAnswer = Number(answerForGameProgression);
  const valuesQuestion = questionForGameProgression;
  const valueHiddenElement = valuesQuestion[2];

  if (numberAnswer === valueHiddenElement) {
    const resultGameProgression = true;
    return resultGameProgression;
  }
  const resultGameProgression = false;
  return [resultGameProgression, valueHiddenElement];
};

const falseGameResultProgression = (nameUserGameProgression, answerForGameProgression, conditionGameProgression) => {
  const conditionValues = conditionGameProgression;
  const valueHiddenElement = conditionValues[1];

  const endOfTheGameProgression = `'${answerForGameProgression}' is wrong answer ;(. Correct answer was '${valueHiddenElement}'. \nLet's try again, ${nameUserGameProgression}!`;
  return endOfTheGameProgression;
};

const gameProgression = () => {
  logics(explanationGameProgression, questionForGameProgression, conditionnGameProgression, falseGameResultProgression);
};

export { gameProgression };

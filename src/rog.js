const randomOperationGame = () => {
  const randomNumber = Math.floor(Math.random() * 100);
  if (randomNumber < 33) {
    const randomOperation = '+';
    return randomOperation;
  } if (randomNumber >= 33 && randomNumber < 66) {
    const randomOperation = '-';
    return randomOperation;
  }
  const randomOperation = '*';
  return randomOperation;
};

export default randomOperationGame;
